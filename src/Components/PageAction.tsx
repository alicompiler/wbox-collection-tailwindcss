import React from "react";
import {useServiceFactory} from "wbox-context";
import {ServiceFactory} from "wbox-collections";

export function PageAction({page}: { page: number, selected: boolean }) {
    const serviceFactory: ServiceFactory = useServiceFactory();
    const fetchService = serviceFactory.createHttpFetchService();
    return <button className={'p-2'} onClick={() => fetchService.fetchPage(page)}>
        {page + 1}
    </button>
}
