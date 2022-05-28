import React from 'react';
import { useTheme } from '../Theme/UseTheme';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import {withCollection, WithCollectionProps} from "wbox-collections";

export type RowStyle = "normal" | "hover" | "strip";

interface Props extends WithCollectionProps {
    fullWidth?: boolean;
    rowStyle?: RowStyle;
}

function _Table(props: Props) {
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

export const Table = withCollection(_Table);
