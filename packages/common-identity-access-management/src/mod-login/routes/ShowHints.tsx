import React, { useState, useContext } from 'react';
import { Text, Button } from 'react-native';
// import Button from '@material-ui/core/Button';
import { StaticScreen } from '@emma-services/common/src/shared'
import { Store as AdminStore } from "@emma-services/common/src/context/authen"

const LoginShowHints = () => {

  const { state, dispatch } = useContext(AdminStore);
  const login = () => dispatch({ type: "LOGIN" });

  return (
    <StaticScreen title="Show optional hints" link="/home" >
      {/* <Button contained="normal" onClick={login} ><Text>{state.isAuth ? "Logout" : "Login"} </Text></Button> */}
      <Button onPress={login} title={state.isAuth ? "Logout" : "Login"} />
    </StaticScreen>
  )
}

export default LoginShowHints;