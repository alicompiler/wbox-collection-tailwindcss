import {CollectionFactory, CollectionProvider, CollectionProviderProps, InfiniteScroll} from "wbox-collections";
import React from "react";
import {Table} from "../Table/Table";
import {PaginationBar, PaginationBarProps} from "../Components/Pagination/PaginationBar";

export interface TableFactoryOptions {
    fetchType?: "one-page-only" | "infinite" | "pagination";
    collectionProvider: CollectionProviderProps;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    infinityScrollOptions?: any;
    fullWidth?: boolean;
    paginationBarOptions?: PaginationBarProps;
}

export class TableFactory implements CollectionFactory<TableFactoryOptions> {
    create(configuration: TableFactoryOptions): React.ReactElement {
        const fetchType = configuration.fetchType ?? "one-page-only";
        const Wrapper = fetchType === "infinite" ? InfiniteScroll : 'div';
        const wrapperProps = fetchType === "infinite" ? (configuration.infinityScrollOptions ?? {}) : {};
        const fullWidth = configuration.fullWidth ?? true;
        return <CollectionProvider {...configuration.collectionProvider}>
            <Wrapper {...wrapperProps}>
                <Table fullWidth={fullWidth}/>
                <PaginationBar {...(configuration.paginationBarOptions ?? {})}  />
            </Wrapper>
        </CollectionProvider>
    }
}
