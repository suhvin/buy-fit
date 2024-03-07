"use client";
import { Toast, ToastProvider, ToastViewport } from "./toast";
import { useToast } from "./use-toast";

export const Toaster = () => {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className=" grid">
            {title}
            {description}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};
