import { createContext, useContext, useState } from "react";

type SwitcherContextType = {
  switcherValue: boolean;
  toggle: () => void;
  title: string;
};

export const SwitcherContext = createContext<SwitcherContextType>({} as SwitcherContextType);

type SwitcherProviderProps = {
  children: React.ReactNode;
};

const SwitcherProvider = ({ children }: SwitcherProviderProps) => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [title] = useState("Context");

  const handleToggle = () => {
    setSwitcherValue(!switcherValue);
  };

  return (
    <SwitcherContext.Provider value={{ switcherValue, toggle: handleToggle, title }}>
      {children}
    </SwitcherContext.Provider>
  );
};

const useSwitcher = () => {
    const context = useContext(SwitcherContext);
    
    if (!context) {
        throw new Error("useSwitcher must be used within a SwitcherProvider");
    }
    
    return context;
};

export { useSwitcher, SwitcherProvider };