import { Image, StyleSheet, View } from "react-native";

import LanguageTag from "./LanguageTag";
import RepositoryStats from "./RepositoryStats";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
  },
  topContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  description: {
    marginTop: 5,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text fontSize="subheading" fontWeight="bold">
            {fullName}
          </Text>
          <Text color="textSecondary" style={styles.description}>
            {description}
          </Text>
          <LanguageTag language={language} />
        </View>
      </View>
      <RepositoryStats
        stars={stargazersCount}
        forks={forksCount}
        reviews={reviewCount}
        rating={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
