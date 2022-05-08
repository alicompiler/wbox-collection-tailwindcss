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
export interface Theme {
    alert: AlertTheme;
    table: TableTheme;
    spinner: string;
}
