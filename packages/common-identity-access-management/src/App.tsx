import React from "react";
import { Redirect, Route } from '@emma-services/common/src/shared';

import LoginStep1 from './mod-login/routes/LoginStep1';
import LoginStep2 from './mod-login/routes/LoginStep2';
import LoginStep3 from './mod-login/routes/LoginStep3';

export function AppRouter(props: any) {
  const { match: { url } } = props;
  return (
    <>
      <Redirect exact from={`${url}/login`} to={`${url}/login/1`} />
      <Route path={`${url}/login/1`} component={LoginStep1} />
      <Route path={`${url}/login/2`} component={LoginStep2} />
      <Route path={`${url}/login/3`} component={LoginStep3} />
    </>
  )
}



export default AppRouter;