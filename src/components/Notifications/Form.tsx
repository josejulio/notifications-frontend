import { Button, ButtonVariant, Radio, Text, TextContent, TextVariants } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
import { global_spacer_md, global_spacer_sm } from '@patternfly/react-tokens';
import {
    Form,
    FormText,
    OuiaComponentProps,
    ouiaIdConcat
} from '@redhat-cloud-services/insights-common-typescript';
import { FieldArray, FieldArrayRenderProps, FormikProps, useFormikContext } from 'formik';
import * as React from 'react';
import { style } from 'typestyle';

import { UserIntegrationType } from '../../types/Integration';
import {
    Action,
    DefaultNotificationBehavior,
    IntegrationRef,
    Notification,
    NotificationType
} from '../../types/Notification';
import { getOuiaProps } from '../../utils/getOuiaProps';
import { EditableActionTable } from './Form/EditableActionTable';
import assertNever from 'assert-never';

type Type = 'default' | 'notification';

export interface NotificationFormPropsBase extends OuiaComponentProps {
    getRecipients: (search: string) => Promise<Array<string>>;
    getIntegrations: (type: UserIntegrationType, search: string) => Promise<Array<IntegrationRef>>;
}

export interface NotificationFormDefaultProps extends NotificationFormPropsBase {
    type: 'default';
}

export interface NotificationFormNotificationProps extends NotificationFormPropsBase {
    type: 'notification';
    defaultActions: Array<Action>;
}

export type NotificationFormProps = NotificationFormDefaultProps | NotificationFormNotificationProps;

interface ActionsArrayProps extends FieldArrayRenderProps {
    form: FormikProps<Notification | DefaultNotificationBehavior>;
    type: Type;
    getRecipients: (search: string) => Promise<Array<string>>;
    getIntegrations: (type: UserIntegrationType, search: string) => Promise<Array<IntegrationRef>>;
}

const alignLeftClassName = style({
    textAlign: 'left',
    paddingLeft: 0
});

const radioClassName = style({
    paddingTop: global_spacer_sm.var,
    paddingBottom: global_spacer_sm.var
});

const defaultAction: Action = {
    type: NotificationType.EMAIL_SUBSCRIPTION,
    integrationId: '',
    recipient: []
};

const ActionArray: React.FunctionComponent<ActionsArrayProps> = (props) => {

    const { values, isSubmitting } = props.form;
    const actions = values.actions;

    const addAction = React.useCallback(() => {
        const push = props.push;
        const newAction: Action = { ...defaultAction };

        push(newAction);
    }, [ props.push ]);

    return (
        <table>
            { (actions === undefined || actions.length === 0) && (
                <tbody { ...getOuiaProps('Notifications/Form/NoActions', {}) }>
                    <tr>
                        <td colSpan={ 3 }><span>No actions. Users will not be notified.</span></td>
                    </tr>
                </tbody>
            )}

            { actions && actions.length > 0 && (
                <EditableActionTable
                    path={ props.name }
                    actions={ actions }
                    getRecipients={ props.getRecipients }
                    getIntegrations={ props.getIntegrations }
                    handleRemove={ props.handleRemove }
                    isDisabled={ isSubmitting }
                />
            ) }
            <tbody { ...getOuiaProps('Notifications/Form/Button', {}) }>
                <tr>
                    <td>
                        <Button
                            className={ alignLeftClassName }
                            variant={ ButtonVariant.link }
                            icon={ <PlusCircleIcon /> }
                            onClick={ addAction }
                            isDisabled={ isSubmitting }
                        >
                            Add action
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

enum NotificationSelectionType {
    MUTE = 'notification-selection-mute',
    DEFAULT = 'notification-selection-default',
    CUSTOM = 'notification-selection-custom'
}

export const NotificationForm: React.FunctionComponent<NotificationFormProps> = (props) => {

    const { values, setFieldValue } = useFormikContext<Notification | DefaultNotificationBehavior>();
    const { type } = props;

    const [ notificationSelectionType, setNotificationSelectionType ] = React.useState(NotificationSelectionType.MUTE);

    React.useEffect(() => {
        if (type === 'notification') {
            setFieldValue('useDefault', notificationSelectionType === NotificationSelectionType.DEFAULT);

            if (notificationSelectionType === NotificationSelectionType.CUSTOM) {
                const notification = values as Notification;
                if (notification.actions.length === 0) {
                    setFieldValue('actions', [{ ...defaultAction }]);
                }
            }
        }

    }, [ notificationSelectionType, setFieldValue, type, values ]);

    const onClickRadio = React.useCallback((checked, event) => {
        const type = event.currentTarget.name as NotificationSelectionType;
        switch (type) {
            case NotificationSelectionType.MUTE:
            case NotificationSelectionType.CUSTOM:
            case NotificationSelectionType.DEFAULT:
                setNotificationSelectionType(type);
                break;
            default:
                assertNever(type);
        }

    }, [ setNotificationSelectionType ]);

    return (
        <div { ... getOuiaProps('Notifications/Form', props) }>
            <Form>
                <TextContent>
                    { props.type === 'notification' && (
                        <Text component={ TextVariants.p }>
                            Edit notification actions and recipients for <b>{(values as Notification).eventTypeDisplayName }</b>
                        </Text>
                    ) }
                    { props.type === 'default' && (
                        <>
                            <Text component={ TextVariants.p }>Change the default notification actions for <b>Red Hat Insights</b>.</Text>
                            <Text component={ TextVariants.p }>These actions apply to all events that use the default actions.</Text>
                        </>
                    )}

                    <Radio
                        id="mute-notifications"
                        name={ NotificationSelectionType.MUTE }
                        label="Mute notifications"
                        isChecked={ notificationSelectionType === NotificationSelectionType.MUTE }
                        className={ radioClassName }
                        onChange={ onClickRadio }
                    />

                    { notificationSelectionType === NotificationSelectionType.MUTE && (
                        <Text component={ TextVariants.p }>
                            <b>You will not receive any notifications for this event.</b>
                        </Text>
                    ) }

                    { props.type === 'notification' && (
                        <>
                            <Radio
                                id="use-default-notifications"
                                name={ NotificationSelectionType.DEFAULT }
                                label="Use default notification actions"
                                isChecked={ notificationSelectionType === NotificationSelectionType.DEFAULT }
                                className={ radioClassName }
                                onChange={ onClickRadio }
                            />
                            { notificationSelectionType === NotificationSelectionType.DEFAULT && (
                                <EditableActionTable
                                    actions={ props.defaultActions }
                                    getRecipients={ props.getRecipients }
                                    getIntegrations={ props.getIntegrations }
                                    isDisabled={ true }
                                />
                            ) }
                        </>
                    )}

                    <Radio
                        id="use-custom-notifications"
                        name={ NotificationSelectionType.CUSTOM }
                        label="Use custom notification actions"
                        isChecked={ notificationSelectionType === NotificationSelectionType.CUSTOM }
                        className={ radioClassName }
                        onChange={ onClickRadio }
                    />

                    { notificationSelectionType === NotificationSelectionType.CUSTOM && (
                        <FieldArray name="actions">
                            { helpers =>  <ActionArray
                                type={ props.type }
                                { ...helpers }
                                getRecipients={ props.getRecipients }
                                getIntegrations={ props.getIntegrations }
                            /> }
                        </FieldArray>
                    ) }

                </TextContent>
            </Form>
        </div>
    );
};
