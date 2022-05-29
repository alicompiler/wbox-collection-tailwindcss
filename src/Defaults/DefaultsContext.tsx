import React, {useContext} from "react";
import {Defaults} from "./Defaults";
import {DefaultsContext as CollectionsDefaultsContext, defaults as collectionsDefaults} from "wbox-collections";
import {Spinner} from "../Components/Spinner";
import {Alert} from "../Components/Alert";

const defaults: Defaults = {
    loadingMessage: 'Loading Data...',
    emptyMessage: 'No Data',
    errorMessage: 'Failed To Fetch Data',
    nextButtonText: 'Next',
    previousButtonText: 'Previous',
    maxPageButtons: 7
}

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider: React.FC<Partial<Defaults>> = props => {
    const {children, ...otherProps} = props;
    return <DefaultsContext.Provider value={{...defaults, ...otherProps}}>
        <CollectionsDefaultsContext.Provider value={{
            ...collectionsDefaults,
            renderOptions: {
                ...collectionsDefaults.renderOptions,
                renderLoading: () => <Spinner/>,
                renderError: () => <Alert type={'error'}/>,
                renderEmpty: () => <Alert type={'empty'}/>
            }
        }}>
            {
                children
            }
        </CollectionsDefaultsContext.Provider>
    </DefaultsContext.Provider>
};

export function useDefaults() {
    return useContext(DefaultsContext);
}
