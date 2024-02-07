"use client";
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
  const primaryButton = (
    <button
      className=" grow  py-12 px-38 bg-primary-100 whitespace-nowrap text-white rounded-[28px]"
      onClick={onPrimaryClick}
    >
      {textPrimary}
    </button>
  );

  const secondaryButton = (
    <button
      className=" grow  py-12 px-38 bg-gray-10 whitespace-nowrap text-gray-60 font-bold rounded-[28px]"
      onClick={onSecondaryClick}
    >
      {textSecondary}
    </button>
  );
  const buttonGroup = primaryFirst ? [primaryButton, secondaryButton] : [secondaryButton, primaryButton];
  return (
    <ModalPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <ModalPrimitive.Overlay className="fixed inset-0 z-30 bg-neutral-60"></ModalPrimitive.Overlay>
      <ModalPrimitive.Content className="fixed max-w-[calc(420px-48px)] w-[calc(100%-48px)] left-[50%] bottom-[32px] translate-x-[-50%] z-40 data-[state=open]:animate-toastShow data-[state=closed]:animate-toastDown">
        <article className="bg-white flex flex-col items-center rounded-md py-24 pl-20 pr-24">
          <h5 className="px-16 py-4 font-bold bg-primary-10 mb-24 text-primary-100 text-12 rounded-[13.5px] ">
            {title}
          </h5>
          <p className="font-bold text-center text-14">{description}</p>
          <div className=" flex flex-col w-full mt-24 gap-12 text-14 font-bold">
            {buttonGroup[0]}
            {buttonGroup[1]}
          </div>
        </article>
      </ModalPrimitive.Content>
    </ModalPrimitive.Root>
  );
};
