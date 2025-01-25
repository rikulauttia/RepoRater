import { FlatList } from "react-native";

import useCurrentUser from "../hooks/useCurrentUser";
import useDeleteReview from "../hooks/useDeleteReview";
import MyReviewItem, { ItemSeparator } from "./MyReviewItem";
import Text from "./Text";

const MyReviews = () => {
  const { user, loading, refetch } = useCurrentUser(true);
  const { deleteReview } = useDeleteReview();

  if (loading) {
    return <Text>Loading...</Text>;
  }
  const reviews = user?.reviews?.edges.map((edge) => edge.node) || [];

  const handleDelete = async (id) => {
    await deleteReview(id);
    refetch();
  };
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <MyReviewItem review={item} onDelete={handleDelete} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
