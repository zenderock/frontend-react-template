"use client";

import { type AppStateStore, createAppStateStore } from "@/store/app";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";



export const AppStoreContext = createContext<StoreApi<AppStateStore> | null>(
    null
);

export interface AppStoreProviderProps {
    children: ReactNode;
}

export const AppStoreProvider = ({ children }: AppStoreProviderProps) => {
    const storeRef = useRef<StoreApi<AppStateStore>>();
    if (!storeRef.current) {
        storeRef.current = createAppStateStore();
    }

    return (
        <AppStoreContext.Provider value={storeRef.current}>
            {children}
        </AppStoreContext.Provider>
    );
};

export const useAppStateStore = <T,>(
    selector: (store: AppStateStore) => T
): T => {
    const appStoreContext = useContext(AppStoreContext);

    if (!appStoreContext) {
        throw new Error("useAppStateStore must be use within AppStoreProvider");
    }

    return useStore(appStoreContext, selector);
};