import React, { Suspense, lazy } from 'react';

import {
    Layout, Content, MainWrap, ComponentContent
} from './style.js';

const Navigation = lazy(() => import('../navigation/header/Navigation'));
const SideNav = lazy(() => import('../navigation/sidebar/SideNav'));

function LayoutContent(props){
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <SideNav />
                <MainWrap>
                    <Navigation />
                    <Content>
                        <ComponentContent>
                            {props.children}
                        </ComponentContent>
                    </Content>
                </MainWrap>
            </Suspense>
        </Layout>
    )
}

export default LayoutContent;