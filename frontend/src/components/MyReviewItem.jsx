import { format } from "date-fns";
import { StyleSheet, Text, View } from "react-native";

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
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewItem = ({ review }) => {
  const { rating, text, createdAt, repository } = review;

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
      </View>
    </View>
  );
};

export default MyReviewItem;
export { ItemSeparator };
