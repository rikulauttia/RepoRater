import { StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  tag: {
    backgroundColor: theme.colors.primary,
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 4,
  },
});

const LanguagTag = ({ language }) => {
  return <Text style={styles.tag}>{language}</Text>;
};

export default LanguagTag;
