import React from "react";
import { useDefaults } from "../Defaults/DefaultsContext";
import { useTheme } from "../Theme/UseTheme";

export interface Props {
    type: "error" | "empty" | "loading";
}

export function Alert({type}:Props) {
    const theme = useTheme();
    const defaults = useDefaults();
    const className = {
        error: theme.alert.error,
        empty: theme.alert.empty,
        loading: theme.alert.loading
    }[type];
    const message = {
        error: defaults.errorMessage,
        empty: defaults.emptyMessage,
        loading: defaults.loadingMessage
    }[type];
    return <div className={className} role="alert">
        <span>{message}</span>
    </div>;
}