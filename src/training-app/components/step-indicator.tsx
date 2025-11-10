import { Check } from "lucide-react"

type StepKey = "original" | "correction" | "audio"

type StepStatus = "active" | "completed" | "upcoming"

interface StepIndicatorProps {
  currentStep: StepKey
  isAudioComplete?: boolean
}

const circleClassnames: Record<StepStatus, string> = {
  completed: "border-sky-600 bg-sky-600 text-white shadow-sm shadow-sky-400/40",
  active: "border-sky-500 bg-sky-50 text-sky-600 ring-2 ring-sky-200",
  upcoming: "border-slate-300 text-slate-400",
}

const labelClassnames: Record<StepStatus, string> = {
  completed: "text-sm font-semibold text-slate-900",
  active: "text-sm font-semibold text-slate-900",
  upcoming: "text-sm font-medium text-slate-400",
}

function Step({
  label,
  number,
  status,
}: {
  label: string
  number: number
  status: StepStatus
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-200 ${circleClassnames[status]}`}
      >
        {status === "completed" ? <Check className="h-4 w-4" /> : number}
      </div>
      <span className={labelClassnames[status]}>{label}</span>
    </div>
  )
}

export function StepIndicator({ currentStep, isAudioComplete = false }: StepIndicatorProps) {
  const isOnTextStep = currentStep === "original" || currentStep === "correction"
  const textStatus: StepStatus = isAudioComplete || currentStep === "audio" ? "completed" : isOnTextStep ? "active" : "upcoming"
  const audioStatus: StepStatus = isAudioComplete ? "completed" : currentStep === "audio" ? "active" : "upcoming"

  const connectorClass =
    audioStatus === "completed"
      ? "bg-sky-500"
      : audioStatus === "active"
        ? "bg-sky-300"
        : "bg-slate-300"

  return (
    <div className="mb-8 mt-16 flex items-center justify-center gap-3 lg:mt-0">
      <Step label="Text Correction" number={1} status={textStatus} />
      <div className={`h-px w-12 rounded-full transition-colors duration-200 ${connectorClass}`} />
      <Step label="Audio Record" number={2} status={audioStatus} />
    </div>
  )
}

