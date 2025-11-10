"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/training-app/components/ui/toast"
import { useToast } from "@/training-app/hooks/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props} onClick={() => dismiss(id)} className="cursor-pointer">
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
