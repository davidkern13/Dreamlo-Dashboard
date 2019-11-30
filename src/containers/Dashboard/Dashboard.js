import React, { Suspense, lazy } from 'react';

import {
    Layout, Content, MainWrap, DashboardContent
} from './style.js';

const Navigation = lazy(() => import('../../navigation/header/Navigation'));
const SideNav = lazy(() => import('../../navigation/sidebar/SideNav'));

function Dashboard(){
    return (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <SideNav />
              <MainWrap>
                  <Navigation />
                  <Content>
                      <DashboardContent>
                          Dashboard
                      </DashboardContent>
                  </Content>
              </MainWrap>
          </Suspense>
        </Layout>
    )
}

export default Dashboard;
