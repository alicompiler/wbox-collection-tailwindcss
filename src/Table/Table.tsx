import React from 'react';
import {useTheme} from '../Theme/UseTheme';
import {TableBody} from './TableBody';
import {TableHead} from './TableHead';
import {State} from "wbox-collections";
import {useState} from "wbox-context";
import {Alert} from "../Components/Alert";
import {Spinner} from "../Components/Spinner";

export type RowStyle = "normal" | "hover" | "strip";

interface Props {
    fullWidth?: boolean;
    rowStyle?: RowStyle;
}

export function Table(props: Props) {
    const theme = useTheme();
    const state: State = useState();
    const isEmpty = state.allItems.length === 0 && !state.loading && !state.error;
    const anyStatusComponent = state.loading || state.error || isEmpty;
    return (
        <div>
            {
                anyStatusComponent &&
                <div className={'p-4'}>
                    {
                        state.loading && <div className={'flex items-center justify-center'}><Spinner/></div>
                    }
                    {
                        state.error && <Alert type={'error'}/>
                    }
                    {
                        isEmpty && <Alert type={'empty'}/>
                    }
                </div>
            }
            <table className={`${theme.table.table} __table ${props.fullWidth ? 'w-full' : ''}`}>
                <TableHead/>
                <TableBody rowStyle={props.rowStyle ?? "normal"}/>
            </table>
        </div>
    );
}
