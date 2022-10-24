import React, { createContext, useState } from "react";

interface Value {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckingOut: boolean;
  setIsCheckingOut: React.Dispatch<React.SetStateAction<boolean>>;
  hasPaid: boolean;
  setHasPaid: React.Dispatch<React.SetStateAction<boolean>>;
  onReset: () => void;
}

export const UiCtx = createContext<Value>({
  showModal: false,
  setShowModal: () => {},
  isCheckingOut: false,
  setIsCheckingOut: () => {},
  hasPaid: false,
  setHasPaid: () => {},
  onReset: () => {},
});

const UiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);

  const onReset = () => {
    setHasPaid(false);
    setIsCheckingOut(false);
    setShowModal(false);
  };

  return (
    <UiCtx.Provider
      value={{
        showModal: showModal,
        setShowModal: setShowModal,
        isCheckingOut: isCheckingOut,
        setIsCheckingOut: setIsCheckingOut,
        hasPaid: hasPaid,
        setHasPaid: setHasPaid,
        onReset: onReset,
      }}
    >
      {children}
    </UiCtx.Provider>
  );
};

export default UiProvider;
