import { View } from "react-native";

import Subheading from "./Subheading";
import Text from "./Text";

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazerCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View>
      <Subheading>{fullName}</Subheading>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazerCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
