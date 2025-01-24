// This component will display stats (stars, forks, review, ratings).

import { StyleSheet, View } from "react-native";

import { formatCount } from "../utils/utils";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
});

const RepositoryStats = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text testID="repositoryStars" fontWeight="bold">
          {formatCount(stars)}
        </Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text testID="repositoryForks" fontWeight="bold">
          {formatCount(forks)}
        </Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text testID="repositoryReviews" fontWeight="bold">
          {formatCount(reviews)}
        </Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text testID="repositoryRating" fontWeight="bold">
          {formatCount(rating)}
        </Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;
