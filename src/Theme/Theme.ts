export interface TableTheme {
    table: string;
    head: string;
    headRow: string;
    headCell: string;
    body: string;
    bodyRow: string;
    stripedRow: string;
    hoveredRow: string;
    bodyCell: string;
}

export interface AlertTheme {
    empty: string;
    error: string;
    loading: string;
}

export interface PaginationTheme {
    wrapper: string;
    threeDots: string;
    pageButton: string;
    selectedPageButton: string;
    nextButtonText: string;
    prevButtonText: string;
    arrow: string;
}

export interface Theme {
    alert: AlertTheme;
    table: TableTheme;
    pagination: PaginationTheme;
    spinner: string;
    rightToLeft: boolean;
}
