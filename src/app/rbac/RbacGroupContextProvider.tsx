import { useSyncInterval } from '@redhat-cloud-services/insights-common-typescript';
import * as React from 'react';
import { useState } from 'react';

import { client } from '../../generated/OpenapiRbac';
import { RbacGroup, RbacGroupContext } from './RbacGroupContext';

const SYNC_INTERVAL = 2 * 60 * 1000;
const LIMIT = 100;

const getPage = async (
    requestor: ReturnType<typeof client.ListGroups.useRequest>,
    offset: number
): Promise<[ ReadonlyArray<RbacGroup> | undefined, boolean ]> => {
    const groups = await requestor({
        limit: LIMIT,
        offset,
        platformDefault: false,
        adminDefault: false
    });

    if (groups.type === 'GroupPagination') {
        const page = groups.value;

        const hasMore =  page.data.length > 0 && (
            page.meta?.count ? (page.meta.count > offset + LIMIT) : true
        );

        return [ groups.value.data.map(value => ({
            id: value.uuid,
            name: value.name
        })), hasMore ];
    }

    return [ undefined, false ];
};

export const RbacGroupContextProvider: React.FunctionComponent = props => {
    const requestor = client.ListGroups.useRequest();

    const [ isLoading, setLoading ] = useState(true);
    const [ rbacGroups, setRbacGroups ] = useState<ReadonlyArray<RbacGroup>>([]);

    const sync = React.useCallback(async () => {
        const allGroups: Array<RbacGroup> = [];
        let offset = 0;

        while (true) {
            const [ groups, hasMorePages ] = await getPage(requestor, offset);
            if (groups === undefined) {
                return;
            }

            allGroups.push(...groups);
            if (!hasMorePages) {
                break;
            }

            offset += LIMIT;
        }

        setRbacGroups(allGroups);
        setLoading(false);
    }, [ requestor ]);

    useSyncInterval(SYNC_INTERVAL, sync, true);

    const value = React.useMemo(() => ({
        groups: rbacGroups,
        isLoading
    }), [ rbacGroups, isLoading ]);

    return (
        <RbacGroupContext.Provider value={ value }>
            { props.children }
        </RbacGroupContext.Provider>
    );
};
