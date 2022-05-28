import React from "react";
import {usePagingData} from "wbox-collections";
import {PageAction} from "./PageAction";

export interface Props {
    title?: string;
    hideWhenOnlyPage?: boolean;
}

export function PaginationActions(props: Props) {
    const paginationData = usePagingData();

    if (paginationData.pageCount === 1 && props.hideWhenOnlyPage) {
        return null;
    }

    return <div className={"p-4"}>
        {
            Array(paginationData.pageCount)
                .fill(undefined)
                .map((_, index) => <PageAction key={index} page={index}
                                               selected={paginationData.currentPage === index}/>)
        }
    </div>
}
