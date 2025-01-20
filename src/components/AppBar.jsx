import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
    paddingBottom: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" onPress={() => {}} />
    </View>
  );
};

export default AppBar;
