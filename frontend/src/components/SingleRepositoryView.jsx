import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
});

export const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} showGitButton />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository, fetchMore, loading } = useRepository({ id, first: 5 });

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  const reviews = repository?.reviews?.edges?.map((edge) => edge.node) || [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepositoryView;
