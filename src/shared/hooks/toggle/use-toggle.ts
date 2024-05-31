'use client';
import React from 'react';
export const useToggle = () => {
  const [isOpen, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const onOpenChange = (bool: boolean) => {
    setOpen(bool);
  };
  return { isOpen, onClose, onOpen, onOpenChange };
};
