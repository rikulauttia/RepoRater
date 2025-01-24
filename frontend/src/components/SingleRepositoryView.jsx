import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "e1e4e8",
  },
});

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} showGitButton />
    </View>
  );
};

export default SingleRepositoryView;
