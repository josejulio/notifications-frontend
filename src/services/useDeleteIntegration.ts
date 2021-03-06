import { useMutation } from 'react-fetching-library';

import { Operations } from '../generated/OpenapiIntegrations';

const deleteIntegrationActionCreator = (integrationId: string) => {
    return Operations.EndpointServiceDeleteEndpoint.actionCreator({
        id: integrationId
    });
};

export const useDeleteIntegration = () => useMutation<boolean>(deleteIntegrationActionCreator);
