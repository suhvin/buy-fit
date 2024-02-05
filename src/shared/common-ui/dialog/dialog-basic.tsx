import * as ModalPrimitive from "@radix-ui/react-dialog";
interface labelProps {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  title?: string;
  description?: string;
  textPrimary?: string;
  textSecondary?: string;
  primaryFirst?: boolean;
}

export const DialogBottomUp = ({
  isOpen,
  onOpenChange,
  title,
  description,
  textPrimary,
  textSecondary,
  primaryFirst,
  onSecondaryClick,
  onPrimaryClick,
}: labelProps) => {
  return (
    <ModalPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <ModalPrimitive.Overlay className="fixed inset-0 z-30 bg-neutral-60"></ModalPrimitive.Overlay>
      <ModalPrimitive.Content className="fixed max-w-[calc(420px-48px)] w-[calc(100%-48px)] left-[50%] bottom-[32px] translate-x-[-50%] z-40 data-[state=open]:animate-toastShow data-[state=closed]:animate-toastDown"></ModalPrimitive.Content>
    </ModalPrimitive.Root>
  );
};
