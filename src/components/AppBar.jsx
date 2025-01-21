import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

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
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" onPress={() => navigate("/")} />
      <AppBarTab title="Sign In" onPress={() => navigate("/signin")} />
    </View>
  );
};

export default AppBar;
