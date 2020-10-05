import * as React from 'react';
import { global_success_color_200, global_danger_color_100, global_spacer_xs } from '@patternfly/react-tokens';
import { assertNever, toUtc } from '@redhat-cloud-services/insights-common-typescript';
import format from 'date-fns/format';
import { ExclamationCircleIcon, CheckCircleIcon } from '@patternfly/react-icons';
import { style } from 'typestyle';

export interface ConnectionAttemptProps {
    type: ConnectionAttemptType;
    date: Date;
}

export enum ConnectionAttemptType {
    SUCCESS,
    FAILED
}

const dateClassName = style({
    marginLeft: global_spacer_xs.var
});

const dateFormatString = 'MMM d, HH:mm:ss';

const getIcon = (type: ConnectionAttemptType) => {
    switch (type) {
        case ConnectionAttemptType.SUCCESS:
            return <CheckCircleIcon color={ global_success_color_200.value } />;
        case ConnectionAttemptType.FAILED:
            return <ExclamationCircleIcon color={ global_danger_color_100.value } />;
        default:
            assertNever(type);
    }
};

export const ConnectionAttempt: React.FunctionComponent<ConnectionAttemptProps> = (props) => {
    const formattedDate = format(toUtc(props.date), dateFormatString);
    return (
        <>
            { getIcon(props.type) } <span className={ dateClassName }> { formattedDate } UTC </span>
        </>
    );
};
