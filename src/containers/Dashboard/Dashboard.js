import React, { Suspense, lazy } from 'react';

import {
    DashboardContent
} from './style.js';

import LoadingSpinner from '../../loading';

const LayoutContent = lazy(() => import('../../layout/LayoutContent'));


function Dashboard(){
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <LayoutContent>
                <DashboardContent>
                    <LoadingSpinner />
                </DashboardContent>
            </LayoutContent>
        </Suspense>
    )
}

export default Dashboard;
