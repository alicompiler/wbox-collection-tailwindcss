import React from 'react';
import { useTheme } from '../Theme/UseTheme';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export function Table() {
    const theme = useTheme();
    return (
        <div>
            <table className={theme.table.table}>
                <TableHead />
                <TableBody />
            </table>
        </div>
    );
}
