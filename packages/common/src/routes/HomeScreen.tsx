import React from 'react';
import { Text } from 'react-native';
import { StaticScreen, Link } from '../shared';

export default () => (
  <StaticScreen title="HomeScreen in @/common" link="MiniApp">
    <Link to="/"><Text>Back</Text></Link>
    <Link to="/iam/login"><Text>Login</Text></Link>
  </StaticScreen>
)