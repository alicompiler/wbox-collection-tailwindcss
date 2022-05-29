import {ServiceFactory, State, usePagingData} from "wbox-collections";
import React, {useMemo} from "react";
import {useServiceFactory, useState} from "wbox-context";
import {buildPagesArray} from "./BuildPagesArray";
import {PageAction} from "./PageAction";
import {useTheme} from "../../Theme/UseTheme";
import {useDefaults} from "../../Defaults/DefaultsContext";

export interface PaginationBarProps {
    maxPageButtons?: number;
    hideWhenOnlyPage?: boolean;
    rightToLeft?: boolean;
}

export const PaginationBar = (props: PaginationBarProps) => {
    const pagingData = usePagingData();
    const theme = useTheme();
    const defaults = useDefaults();
    const pages = buildPagesArray(pagingData.currentPage, pagingData.pageCount, props.maxPageButtons ?? defaults.maxPageButtons);
    const loading = useState<State>().loading;

    return <div className={theme.pagination.wrapper}>
        <PrevButton/>
        <div>
            {
                pages.map((page, index) =>
                    <React.Fragment key={index}>
                        <PageAction page={page} selected={loading ? false : pagingData.currentPage === page}/>
                    </React.Fragment>)
            }
        </div>
        <NextButton/>
    </div>
}

const PrevButton = () => {
    const theme = useTheme();
    const defaults = useDefaults();
    const serviceFactory: ServiceFactory = useServiceFactory();
    const pagingData = usePagingData();
    const fetchService = useMemo(() => serviceFactory.createHttpFetchService(), [serviceFactory]);

    return <a href={'#'} onClick={() => fetchService.fetchPage(pagingData.currentPage - 1)}
              className={'flex items-center'}>
        {theme.rightToLeft ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
        <span className={'w-2'}/>
        <span className={theme.pagination.prevButtonText}>{defaults.previousButtonText}</span>
    </a>
}

const NextButton = () => {
    const theme = useTheme();
    const defaults = useDefaults();
    const serviceFactory: ServiceFactory = useServiceFactory();
    const pagingData = usePagingData();
    const fetchService = useMemo(() => serviceFactory.createHttpFetchService(), [serviceFactory]);

    return <a href={'#'} onClick={() => fetchService.fetchPage(pagingData.currentPage + 1)}
              className={'flex items-center'}>
        <span className={theme.pagination.prevButtonText}>{defaults.nextButtonText}</span>
        <span className={'w-2'}/>
        {theme.rightToLeft ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
    </a>
}

const ArrowLeftIcon = () => {
    const theme = useTheme();
    return <svg xmlns="http://www.w3.org/2000/svg" className={theme.pagination.arrow} viewBox="0 0 20 20"
                fill="currentColor">
        <path fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"/>
    </svg>;
}

const ArrowRightIcon = () => {
    const theme = useTheme();
    return <svg xmlns="http://www.w3.org/2000/svg" className={theme.pagination.arrow} viewBox="0 0 20 20"
                fill="currentColor">
        <path fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"/>
    </svg>
}
