import { useMutation } from 'react-fetching-library';

import { Operations } from '../../generated/OpenapiNotifications';
import { UUID } from '../../types/Notification';

const deleteBehaviorGroupAction = (id: UUID) => {
    return Operations.NotificationServiceDeleteBehaviorGroup.actionCreator({
        id
    });
};

export const useDeleteBehaviorGroupMutation = () => useMutation(deleteBehaviorGroupAction);
