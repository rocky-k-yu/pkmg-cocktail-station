import React, { Component, Fragment } from 'react';
import { View } from "react-native";
import { withRouter } from "react-router-dom";
import { Input, Button } from 'react-native-elements';
import { StaticScreen } from '@emma-services/common/src/shared'


const LoginStep1 = (props: any) => {
  console.log(props)
  return (
    <StaticScreen title="LoginStep1 in @/common-iam">
      <Input
        label="E-mail"
        placeholder="example@company.com"
      />
      <Input
        label="Password"
        placeholder="1234ABC"
      />
      <Button
        title='SUBMIT'
        onPress={() => props.history.push("2")}
      />
    </StaticScreen >
  )
}
export default withRouter(LoginStep1);