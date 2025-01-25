import { useState } from "react";

import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import { Picker } from "@react-native-picker/picker";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
  pickerContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedOrder}
        onValueChange={(itemValue) => setSelectedOrder(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRated" />
        <Picker.Item label="Lowest rated repositories" value="lowestRated" />
      </Picker>
    </View>
  );
};

export const RepositoryListContainer = ({
  repositories,
  navigate,
  selectedOrder,
  setSelectedOrder,
}) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories?.edges?.map((edge) => edge.node) || [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <RepositoryListHeader
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      }
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const orderVariables = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highestRated: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowestRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  };
  const { repositories } = useRepositories(orderVariables[selectedOrder]);
  const navigate = useNavigate();
  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
