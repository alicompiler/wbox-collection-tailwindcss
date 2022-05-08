import { Field, State, useCollectionData } from 'wbox-collections';
import React from 'react';
import { useState } from 'wbox-context';
import { getFieldValue } from 'wbox-collections';
import { useTheme } from '../Theme/UseTheme';

export function TableBody() {
    const theme = useTheme();
    const state = useState<State>();
    const [items] = useCollectionData();
    const fields = state.fields.filter(field => state.visibleFields.includes(field.name));
    return (
        <tbody className={theme.table.body}>
                {(items as unknown[]).map((item: unknown, index) => (
                    <tr className={theme.table.bodyRow} key={index}>
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
