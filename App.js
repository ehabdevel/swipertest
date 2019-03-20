import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Screen from "./components/Screen";

class App extends React.Component {
  render() {
    return <Screen />;
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent("App", () => App);

export default App;
