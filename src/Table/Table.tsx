import React from 'react';
import { useTheme } from '../Theme/UseTheme';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export type RowStyle = "normal" | "hover" | "strip";

interface Props {
    fullWidth?: boolean;
    rowStyle?: RowStyle;
}

export function Table(props: Props) {
    const theme = useTheme();
    return (
        <div>
            <table className={`${theme.table.table} __table ${props.fullWidth ? 'w-full' : ''}`}>
                <TableHead />
                <TableBody rowStyle={props.rowStyle ?? "normal"} />
            </table>
        </div>
    );
}
