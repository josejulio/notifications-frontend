import { assertNever } from 'assert-never';
import { useReducer } from 'react';

import { Action, DefaultNotificationBehavior, Notification } from '../../../types/Notification';

enum UseFormModalReducerActionType {
    EDIT_NOTIFICATION = 'edit-notification',
    EDIT_DEFAULTS = 'edit-defaults',
    NONE = 'none'
}

interface UseFormModalReducerActionEditNotification {
    type: UseFormModalReducerActionType.EDIT_NOTIFICATION;
    template: Notification;
    defaultActions: Array<Action>;
}

interface UseFormModalReducerActionEditDefault {
    type: UseFormModalReducerActionType.EDIT_DEFAULTS;
    template: DefaultNotificationBehavior;
}

interface UseFormModalReducerActionNone {
    type: UseFormModalReducerActionType.NONE;
}

type UseFormModalReducerAction = UseFormModalReducerActionEditNotification | UseFormModalReducerActionEditDefault | UseFormModalReducerActionNone;

type UseFormModalReducerState = {
    isOpen: false;
} | ({
    isOpen: true;
} & ({
    type: 'default';
    data: DefaultNotificationBehavior;
} | {
    type: 'notification';
    data: Notification;
    defaultActions: Array<Action>;
}))

const noneState = {
    isOpen: false as const
};

const reducer = (state: UseFormModalReducerState, action: UseFormModalReducerAction): UseFormModalReducerState => {
    switch (action.type) {
        case UseFormModalReducerActionType.EDIT_DEFAULTS:
            return {
                isOpen: true,
                type: 'default',
                data: action.template
            };
        case UseFormModalReducerActionType.EDIT_NOTIFICATION:
            return {
                isOpen: true,
                type: 'notification',
                data: action.template,
                defaultActions: action.defaultActions
            };
        case UseFormModalReducerActionType.NONE:
            return noneState;
        default:
            assertNever(action);
    }
};

export const makeEditNotificationAction = (template: Notification, defaultActions: Array<Action>): UseFormModalReducerActionEditNotification => ({
    type: UseFormModalReducerActionType.EDIT_NOTIFICATION,
    template,
    defaultActions
});

export const makeEditDefaultAction = (template: DefaultNotificationBehavior): UseFormModalReducerActionEditDefault => ({
    type: UseFormModalReducerActionType.EDIT_DEFAULTS,
    template
});

export const makeNoneAction = (): UseFormModalReducerActionNone => ({
    type: UseFormModalReducerActionType.NONE
});

export const useFormModalReducer = () => {
    return useReducer(reducer, noneState);
};
