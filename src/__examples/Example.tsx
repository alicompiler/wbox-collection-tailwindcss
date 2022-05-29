import React, {useState} from 'react';
import {CollectionProvider, Field, HttpFetchOptions} from 'wbox-collections';
import {Table} from '../Table/Table';
import {DefaultsProvider} from "../Defaults/DefaultsContext";
import {PaginationBar} from "../Components/Pagination/PaginationBar";

export function Example() {
    const [url, setUrl] = useState('http://localhost:8080/collection?page=0');

    const dataOptions: HttpFetchOptions = {
        url: url,
        buildDataResult: (res: any) => ({ items: res.data, totalCount: res.totalCount }),
    };
    const fields: Field[] = [
        { name: 'id', title: '#' },
        { name: 'name', title: 'Name' },
        { name: 'age', title: 'Age' },
        { name: 'height', title: 'Height' },
        { name: 'phone', title: 'Phone' },
        { name: 'email', title: 'Email' },
    ];

    return (
        <DefaultsProvider>
            <CollectionProvider fetchOptions={dataOptions} fields={fields} pageSize={100}>
                <div>
                    <PaginationBar />
                    <Table fullWidth={true}  />
                </div>
            </CollectionProvider>
        </DefaultsProvider>
    );
}
