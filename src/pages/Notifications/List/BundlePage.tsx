import { Button, ButtonVariant } from '@patternfly/react-core';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import {
    getInsights,
    InsightsEnvDetector,
    RenderIfFalse
} from '@redhat-cloud-services/insights-common-typescript';
import { default as React } from 'react';
import { style } from 'typestyle';

import { Messages } from '../../../properties/Messages';
import { stagingAndProd } from '../../../types/Environments';
import { Facet } from '../../../types/Notification';
import { BundlePageBehaviorGroupContent } from './BundlePageBehaviorGroupContent';

interface NotificationListBundlePageProps {
    bundle: Facet;
    applications: Array<Facet>;
}

const displayInlineClassName = style({
    display: 'inline'
});

export const NotificationListBundlePage: React.FunctionComponent<NotificationListBundlePageProps> = (props) => {

    const pageHeaderTitleProps = {
        className: displayInlineClassName,
        title: Messages.pages.notifications.list.title
    };

    return (
        <>
            <PageHeader>
                <PageHeaderTitle { ...pageHeaderTitleProps } />
                <InsightsEnvDetector insights={ getInsights() } onEnvironment={ stagingAndProd }>
                    <RenderIfFalse>
                        <Button variant={ ButtonVariant.link }>{ Messages.pages.notifications.list.viewHistory }</Button>
                    </RenderIfFalse>
                </InsightsEnvDetector>
            </PageHeader>
            <Main>
                <BundlePageBehaviorGroupContent applications={ props.applications } bundle={ props.bundle } />
            </Main>
        </>
    );
};
