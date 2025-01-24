import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import { useApolloClient, useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signin");
  };

  const isLoggedIn = data?.me;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab title="Repositories" onPress={() => navigate("/")} />
        {isLoggedIn ? (
          <AppBarTab title="Sign Out" onPress={signOut} />
        ) : (
          <AppBarTab title="Sign In" onPress={() => navigate("/signin")} />
        )}
        {isLoggedIn && (
          <AppBarTab
            title="Create a review"
            onPress={() => navigate("/create-review")}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
