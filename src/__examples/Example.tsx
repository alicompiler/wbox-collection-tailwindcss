import React, { useState } from 'react';
import { Field, HttpFetchOptions, CollectionProvider, InfiniteScroll } from 'wbox-collections';
import { Spinner } from '../Components/Spinner';
import { Table } from './../Table/Table';

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
        <CollectionProvider fetchOptions={dataOptions} fields={fields}>
            <div>
                <Spinner />
                <InfiniteScroll>
                    <Table />
                </InfiniteScroll>
            </div>
        </CollectionProvider>
    );
}
