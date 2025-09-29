"use client";

import { createContext, useState, ReactNode } from "react";
import { Templates } from "../components/types";


type TemplateContextType = {
  template: Templates;
  setTemplate: React.Dispatch<React.SetStateAction<Templates>>;
};

const TemplateContext = createContext<TemplateContextType>({
  template: "Minimalist",
  setTemplate: () => {
    throw new Error("setTemplate function must be overridden by TemplateProvider");
  },
});

type TemplateProviderProps = {
  children: ReactNode;
};

const TemplateProvider = ({ children }: TemplateProviderProps) => {
  const [template, setTemplate] = useState<Templates>("Minimalist");

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateContext, TemplateProvider };
