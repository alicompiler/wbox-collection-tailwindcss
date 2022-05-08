import { useState } from 'wbox-context';
import { Field, State } from 'wbox-collections';
import React from 'react';
import { useTheme } from '../Theme/UseTheme';

export function TableHead() {
    const state = useState<State>();
    const fields = state.fields.filter(field => state.visibleFields.includes(field.name));
    return (
        <thead>
            <tr>
                {fields.map(field => (
                    <HeadCell key={field.name} field={field} />
                ))}
            </tr>
        </thead>
    );
}

export function HeadCell({ field }: { field: Field }) {
    const theme = useTheme();
    if (field.renderTitle) {
        return field.renderTitle(null, field);
    }
    return <th className={theme.table.headCell}>{field.title}</th>;
}
