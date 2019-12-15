import React, { Suspense, lazy } from 'react';

import {
    LeadboardContent
} from './style.js';

import LoadingSpinner from '../../loading';

const LayoutContent = lazy(() => import('../../layout/LayoutContent'));


function Leadboard(){
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <LayoutContent>
                <LeadboardContent>
                    Leadboard
                </LeadboardContent>
            </LayoutContent>
        </Suspense>
    )
}

export default Leadboard;
