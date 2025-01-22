import { Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    marginHorizontal: 10,
  },
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ title, onPress }) => {
  return (
    <Pressable style={styles.tab} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AppBarTab;
