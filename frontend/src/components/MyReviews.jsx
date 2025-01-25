import { FlatList } from "react-native";

import useCurrentUser from "../hooks/useCurrentUser";
import MyReviewItem, { ItemSeparator } from "./MyReviewItem";
import Text from "./Text";

const MyReviews = () => {
  const { user, loading } = useCurrentUser(true);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  const reviews = user?.reviews?.edges.map((edge) => edge.node) || [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
