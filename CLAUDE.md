# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Suara is a Next.js-based speech training platform designed to collect Malaysian dialect voice data. Users read and correct AI-generated text, then record themselves speaking in their regional dialect. The app uses Privy for authentication and Supabase for data storage.

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm start                # Start production server

# Building
npm run build            # Build for production (static export)
npm run export           # Export static files
npm run build:export     # Combined build and export
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix linting issues
npm run type-check       # TypeScript type checking (no emit)

# Cleanup
npm run clean            # Remove .next and out directories
```

## Architecture

### Next.js Static Export Configuration
The app is configured for static export (`output: 'export'`) to deploy on Azure Static Web Apps. This means:
- No server-side rendering or API routes
- All data fetching happens client-side
- Images use `unoptimized: true`
- Trailing slashes enabled for Azure compatibility

### Route Structure
- **`src/app/(marketing)/`** - Public marketing pages (home, features, about, contact, privacy, terms, roadmap)
  - Uses Next.js route groups for layout isolation
  - Marketing layout includes navigation and footer
- **`src/app/app/`** - Protected application pages
  - `/app` - Region selection landing
  - `/app/training` - Main training interface
  - `/app/dashboard`, `/app/submissions`, `/app/earnings` - User data views
  - Separate layout with Privy authentication and theme provider

### Training System Architecture

**Data Flow:**
1. User authenticates via Privy (Google/Twitter OAuth)
2. `getOrCreateUser()` creates/updates user record in Supabase
3. `getNextStory()` retrieves next untrained story based on:
   - User's region (Malaysian state)
   - Completed story IDs from submissions
   - Region-to-batch mapping (see state-batch-mapping.ts)
4. User edits text and records audio
5. `createSubmission()` uploads audio to Supabase Storage and saves submission record

**Training Stories:**
- Stories are organized in 16 batches (batch-1.ts through batch-16.ts)
- Each story has: id, title, content
- `state-batch-mapping.ts` maps Malaysian states to starting batch numbers
- Stories are served in batch sequence based on region
- Invalid/truncated stories are filtered out via `PLACEHOLDER_PREFIX` check

**State Management:**
- Training page (`src/app/app/training/page.tsx`) uses React hooks for local state
- Three-step flow: original → correction → audio
- Caches submissions and user data in refs to minimize database calls
- Falls back to localStorage for unauthenticated users

### Key Libraries & Integration Points

**Authentication (Privy):**
- Configuration in `src/training-app/components/privy-provider.tsx`
- Requires `NEXT_PUBLIC_PRIVY_APP_ID` env var
- Login methods: Google, Twitter
- Creates embedded Solana wallets for users

**Database (Supabase):**
- Client initialization in `src/training-app/lib/supabase.ts`
- Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Tables: `users`, `training_submissions`
- Storage bucket: `audio-submissions`
- RPC function: `increment_user_earnings(user_id_input, amount)`

**UI Components:**
- Shadcn/ui components in `src/training-app/components/ui/`
- Custom components for training flow: AudioRecorder, StepIndicator, HistoryModal
- Regional components: malaysia-map.tsx, region-selector.tsx
- Uses Radix UI primitives (Dialog, DropdownMenu, Toast, Avatar, Label)

### Component Organization
- **`src/components/`** - Shared marketing components (home sections, animated wrappers)
- **`src/training-app/components/`** - Training app-specific components
- **`src/training-app/lib/`** - Business logic and data services
- **`src/training-app/hooks/`** - Custom React hooks (use-toast)

## Environment Variables

Required environment variables (see `.env.development` or `.env.production`):

```bash
# Supabase (required for data persistence)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_PROJECT_ID=

# Privy (required for authentication)
NEXT_PUBLIC_PRIVY_APP_ID=
PRIVY_APP_SECRET=

# Optional: Analytics, monitoring flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

## Deployment

The app deploys to Azure Static Web Apps via GitHub Actions (`.github/workflows/azure-production.yml`). See `DEPLOYMENT.md` for detailed Azure setup instructions.

**Build process:**
1. Static export generates `out/` directory
2. GitHub Actions uploads to Azure Blob Storage
3. Azure serves as static website

**Important:** Console logs are removed in production builds except `error` and `warn` (see `next.config.ts` compiler settings).

## Common Patterns

**Database operations:**
- Always use functions from `training-service.ts` rather than calling Supabase directly
- Handle both authenticated (Supabase) and unauthenticated (localStorage) flows
- Use `maybeSingle()` instead of `single()` when record might not exist

**Type safety:**
- Database types defined in `database.types.ts` (Supabase-generated)
- Manual types in `supabase.ts`: User, TrainingSubmission, AUDIO_BUCKET
- Use `Nullable<T>` helper type for optional/null values

**Audio handling:**
- Recording limited to 30 seconds max
- Audio stored as Blob client-side, uploaded as file to Supabase Storage
- Storage path: `{userId}/{submissionId}.webm`
- Fallback to localStorage uses data URLs for audio

## Testing a Change

1. Make your changes
2. Run `npm run type-check` to verify TypeScript
3. Run `npm run lint:fix` to fix any linting issues
4. Test locally with `npm run dev`
5. Build and preview: `npm run build && npm run preview`
6. Verify static export works (check `out/` directory)
