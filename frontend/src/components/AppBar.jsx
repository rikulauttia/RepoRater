import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab title="Repositories" onPress={() => navigate("/")} />
        <AppBarTab title="Sign In" onPress={() => navigate("/signin")} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
