import { Field, State, useCollectionData } from 'wbox-collections';
import React from 'react';
import { useState } from 'wbox-context';
import { getFieldValue } from 'wbox-collections';
import { useTheme } from '../Theme/UseTheme';
import { RowStyle } from './Table';

interface Props {
    rowStyle: RowStyle;
}

export function TableBody(props:Props) {
    const theme = useTheme();
    const state = useState<State>();
    const fields = state.fields.filter(field => state.visibleFields.includes(field.name));
    const items = state.allItems;
    const rowClassName = {
        normal: theme.table.bodyRow,
        hover: theme.table.hoveredRow,
        strip: theme.table.stripedRow
    }[props.rowStyle];

    return (
        <tbody className={theme.table.body}>
                {(items as unknown[]).map((item: unknown, index) => (
                    <tr className={rowClassName} key={index}>
                        {fields.map(field => (
                            <BodyCell key={field.name} field={field} item={item} index={index} />
                        ))}
                    </tr>
                ))}
        </tbody>
    );
}

export function BodyCell({ field, item, index }: { field: Field; item: unknown; index: number }) {
    const theme = useTheme();
    if (field.renderValue) {
        return field.renderValue(getFieldValue(field, item), field, item, index);
    }
    return <td className={theme.table.bodyCell} key={field.name}>{getFieldValue(field, item)}</td>;
}
