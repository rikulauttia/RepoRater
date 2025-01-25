import React, { useState } from "react";

import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";

import { Picker } from "@react-native-picker/picker";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 8,
    backgroundColor: "#f6f8fa",
  },
  pickerContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  searchInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#e1e4e8",
    borderWidth: 1,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({
  selectedOrder,
  setSelectedOrder,
  searchKeyword,
  setSearchKeyword,
}) => (
  <View>
    <TextInput
      style={styles.searchInput}
      placeholder="Search repositories..."
      value={searchKeyword}
      onChangeText={setSearchKeyword}
    />
    <View style={styles.pickerContainer}>
      <Picker selectedValue={selectedOrder} onValueChange={setSelectedOrder}>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated" value="highestRated" />
        <Picker.Item label="Lowest rated" value="lowestRated" />
      </Picker>
    </View>
  </View>
);
export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedOrder, setSelectedOrder, searchKeyword, setSearchKeyword } =
      this.props;

    return (
      <RepositoryListHeader
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReach } = this.props;
    const repositoryNodes = repositories?.edges?.map((edge) => edge.node) || [];
    return (
      <FlatList
        style={styles.container}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
            <RepositoryItem repository={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  const orderVariables = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highestRated: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowestRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  };
  const { repositories, fetchMore } = useRepositories({
    first: 3,
    ...orderVariables[selectedOrder],
    searchKeyword: debouncedSearchKeyword,
  });
  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };
  const navigate = useNavigate();
  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
