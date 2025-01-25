import { format } from "date-fns";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  ratingContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0366d6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  ratingText: {
    color: "#0366d6",
    fontWeight: "bold",
  },
  reviewContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "#586069",
    marginBottom: 5,
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewItem = ({ review, onDelete }) => {
  const navigate = useNavigate();
  const { rating, text, createdAt, repository } = review;

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(review.id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.reviewContent}>
        <Text style={styles.username}>{repository.fullName}</Text>
        <Text style={styles.date}>
          {format(new Date(createdAt), "dd.MM.yyyy")}
        </Text>
        <Text>{text}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="View repository"
            color="#0366d6"
            onPress={() => navigate(`/repository/${repository.id}`)}
          />
          <Button
            title="Delete review"
            color="#d73a4a"
            onPress={handleDelete}
          />
        </View>
      </View>
    </View>
  );
};

export default MyReviewItem;
export { ItemSeparator };
