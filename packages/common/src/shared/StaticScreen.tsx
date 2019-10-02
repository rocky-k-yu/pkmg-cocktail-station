import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Link } from "./Routing";


type StaticProps = {
  title: string,
  link?: string
}

/**
 * Static screen for prototyping.
 * @param title Screen's title
 * @param link Optional link to next page of happy journey or expected auto redirect
 * @param children Optional dependency injection for component reuse
 */
const StaticScreen: FunctionComponent<StaticProps> = ({ title, link, children }) => {

  return (
    <View style={styles.dummy}>
      <Text>{title}</Text>
      <Text>is actually a demo of static DummyScreen</Text>
      {link &&
        <Link
          to={link}>
          <Text>{`Click to go ${link}`}</Text>
        </Link>
      }
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StaticScreen;