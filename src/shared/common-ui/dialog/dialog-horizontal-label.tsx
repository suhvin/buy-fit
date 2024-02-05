import React from "react";

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

const HorizontalLabel = ({
  onPrimaryClick,
  onSecondaryClick,
  onOpenChange,
  isOpen,
  title,
  description,
  primaryFirst,
  textPrimary,
  textSecondary,
}: labelProps) => {
  const primaryButton = (
    <button className=" grow py-12 bg-primary-100 whitespace-nowrap text-white rounded-[28px]" onClick={onPrimaryClick}>
      {textPrimary}
    </button>
  );

  const secondaryButton = (
    <button
      className=" grow py-12 bg-gray-20 whitespace-nowrap text-gray-80 font-bold rounded-[28px]"
      onClick={onSecondaryClick}
    >
      {textSecondary}
    </button>
  );
  const buttonGroup = primaryFirst ? [primaryButton, secondaryButton] : [secondaryButton, primaryButton];
  return isOpen ? (
    <div>
      <div
        onClick={() => onOpenChange(false)}
        className="fixed top-0 z-10 left-0 w-screen h-screen bg-neutral-60 backdrop-blur-sm"
      ></div>
      <div className=" z-30">
        <div className="fixed top-[50%] translate-y-[-50%] z-30 translate-x-[-50%] left-[50%]">
          <div className=" relative">
            <div className=" bg-white rounded-md max-w-[calc(100vw-48px)]  sm:max-w-[372px] w-screen">
              <article className="bg-white flex flex-col items-center rounded-md py-24 pl-20 pr-24">
                <h5 className="px-16 py-4 font-bold bg-primary-10 mb-24 text-primary-100 text-[12px] rounded-[13.5px] ">
                  {title}
                </h5>
                <p className="font-bold text-center text-14">{description}</p>
                <div className=" flex w-full mt-24 gap-12 text-14 font-bold">
                  {buttonGroup[0]}
                  {buttonGroup[1]}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default HorizontalLabel;
