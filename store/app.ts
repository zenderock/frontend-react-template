import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type AppState = {
   name: string;
};

export type AppActions = {
    setName: (name: string) => void;
};

export type AppStateStore = AppState & AppActions;

export const defaultInitState: AppState = {
    name: "",
};

export const createAppStateStore = (initState: AppState = defaultInitState) => {
    return createStore<AppStateStore>()(
        persist(
            (set) => ({
                ...initState,
                setName: (name: string) => set({ name }),
            }),
            {
                name: "AppState",
            }
        )
    );
};