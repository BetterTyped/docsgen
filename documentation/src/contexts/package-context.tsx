import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface PackageContextValue {
  pkg: string | string[] | null;
  setPkg: (pkg: string | string[]) => void;
  clearPkg: () => void;
}

const PackageContext = createContext<PackageContextValue>({
  pkg: null,
  setPkg: () => {},
  clearPkg: () => {},
});

export const PackageProvider = ({ children }: { children: ReactNode }) => {
  const [pkg, setPkgState] = useState<string | string[] | null>(null);

  const setPkg = useCallback((value: string | string[]) => {
    setPkgState(value);
  }, []);

  const clearPkg = useCallback(() => {
    setPkgState(null);
  }, []);

  return <PackageContext.Provider value={{ pkg, setPkg, clearPkg }}>{children}</PackageContext.Provider>;
};

export const usePackageContext = () => useContext(PackageContext);
