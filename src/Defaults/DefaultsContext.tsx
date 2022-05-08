import React, { useContext } from "react";
import { Defaults } from "./Defaults";

const defaults : Defaults = {
    loadingMessage: 'Loading Data...',
    emptyMessage: 'No Data',
    errorMessage: 'Failed To Fetch Data'
}

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = DefaultsContext.Provider;


export function useDefaults() {
    return useContext(DefaultsContext);
}