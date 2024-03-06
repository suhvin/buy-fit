import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { VariantProps, cva } from "class-variance-authority";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={`
      fixed z-[100] 
      md:max-w-[420px] flex max-h-screen gap-y-[16px] w-full flex-col-reverse 
     justify-center items-center
      left-[50%] translate-x-[-50%] bottom-0 pb-[16px]
      `}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

// 가로 스와이프

const toastVariants = cva(
  `group pointer-events-auto relative flex w-full
 justify-center item-center p-16 rounded-sm

transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]
data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
data-[swipe=move]:transition-none data-[state=open]:animate-in 

data-[state=closed]:animate-out data-[swipe=end]:animate-out
data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full
data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
  {
    variants: {
      variant: {
        default: " bg-positive-10",
        warning: "bg-negative-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root className={toastVariants({ variant })} ref={ref} {...props} />
));

Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => <ToastPrimitives.Action ref={ref} className={className} {...props} />);

ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close toast-close="" ref={ref} {...props}>
    X
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, ToastAction, Toast };
