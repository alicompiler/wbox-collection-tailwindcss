import React from "react";
import {useServiceFactory} from "wbox-context";
import {ServiceFactory} from "wbox-collections";
import {useTheme} from "../../Theme/UseTheme";

export function PageAction({page, selected}: { page: number, selected: boolean }) {
    const serviceFactory: ServiceFactory = useServiceFactory();
    const fetchService = serviceFactory.createHttpFetchService();
    const theme = useTheme();
    return <a className={selected ? theme.pagination.selectedPageButton : theme.pagination.pageButton}
              onClick={() => fetchService.fetchPage(page)}>
        {page + 1}
    </a>
}
