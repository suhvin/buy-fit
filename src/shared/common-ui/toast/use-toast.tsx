"use client";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { State, ToasterToast } from "./toast.type";
const TOAST_LIMIT = 5;

const ToastContext = createContext<null | { state: State; setState: Dispatch<SetStateAction<State>> }>(null);

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<State>({ toasts: [] });
  return <ToastContext.Provider value={{ state, setState }}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  const value = useContext(ToastContext);
  if (value === null) throw new Error("context 감싸주세요");
  const { state, setState } = value;

  const toast = (newToast: Omit<ToasterToast, "id">) => {
    setState((state) => ({
      toasts: [{ ...newToast, id: new Date().toISOString() }, ...state.toasts].slice(0, TOAST_LIMIT),
    }));
  };
  return {
    toasts: state.toasts,
    toast,
  };
};
