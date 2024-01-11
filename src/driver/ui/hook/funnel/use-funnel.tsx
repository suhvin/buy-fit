"use client";
import React, { useEffect, useMemo } from "react";
import { NonEmptyArray, RouteFunnelProps, StepProps } from "./funnel.type";
import { Funnel, Step } from "./funnel";
import { usePathname, useRouter } from "next/navigation";

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  option?: {
    initialStep: Steps[number];
    // targetPath: string;
  },
) => {
  const [steps, _] = React.useState<Steps>(array);
  const [currentStep, setCurrentStep] = React.useState<Steps[number]>(array[0]);
  const router = useRouter();
  const pathName = usePathname();

  const nextStep = (nextQuery: Steps[number]) => {
    const nextPath = `${pathName}?step=${nextQuery}`;
    setCurrentStep(() => {
      router.push(nextPath);
      return nextQuery;
    });
  };

  useEffect(() => {
    if (option?.hasOwnProperty("initialStep")) {
      const initialPath = `${pathName}?step=${option.initialStep}`;
      setCurrentStep(option.initialStep);
      router.replace(initialPath);
    } else {
      const initialPath = `${pathName}?step=${array[0]}`;
      setCurrentStep(array[0]);
      router.replace(initialPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FunnelComponent = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return Object.assign(
      (props: RouteFunnelProps<Steps>) => {
        return <Funnel<Steps> step={currentStep} steps={steps} {...props} />;
      },
      {
        Step: (props: StepProps<Steps>) => {
          return <Step {...props} />;
        },
      },
    );
  }, [currentStep, steps]);
  return [FunnelComponent, nextStep] as const;
};
