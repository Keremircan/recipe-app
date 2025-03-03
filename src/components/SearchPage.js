import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchedItem,
  setSearchedItem2,
  setLikedRecipes,
  setIsSearched,
} from "../redux/categorySlice";
import Details from "./Details";

const SearchPage = () => {
  const { searchedItem, searchedItem2, likedRecipes, recipes } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  const renderRecipe = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <View>
        <Image source={item.image} style={styles.recipeImage} />

        <TouchableOpacity
          onPress={() => {
            dispatch(setLikedRecipes(item));
          }}
          style={styles.likeSection}
        >
          <Ionicons
            name={
              likedRecipes.some((recipe) => recipe.id === item.id)
                ? "heart"
                : "heart-outline"
            }
            style={styles.heart}
          />
          <Text style={{ color: "#555" }}>{item.likes}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={styles.recipeName}>{item.name}</Text>

        <View style={styles.recipeDetails}>
          <Text style={styles.TextDetails}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchedItem2.toLowerCase())
  );

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const message =
    filteredRecipes.length === 1
      ? "1 recipe found"
      : filteredRecipes.length > 1
      ? `${filteredRecipes.length} recipes found`
      : "No recipes found";

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setIsSearched(false)), dispatch(setSearchedItem(""));
          }}
          style={{ marginHorizontal: 8 }}
        >
          <Ionicons name="chevron-back" style={{ fontSize: 22 }} />
        </TouchableOpacity>

        <View style={styles.searchIcon}>
          <Ionicons name="search" size={20} color="black" />
        </View>

        <TextInput
          style={styles.textInput}
          inputMode="search"
          placeholder="Search a recipe..."
          value={searchedItem}
          onChangeText={(text) => dispatch(setSearchedItem(text))}
          onSubmitEditing={() => dispatch(setSearchedItem2())}
          returnKeyType="search"
        />

        <TouchableOpacity style={{ marginHorizontal: 8 }}>
          <Ionicons name="filter" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Text style={styles.header}>
          Results for {capitalize(searchedItem2)}
        </Text>

        <Text style={styles.message}>{message}</Text>
      </View>

      <View style={styles.container3}>
        <FlatList
          data={filteredRecipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A7C7E7",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  searchIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 55,
    marginBottom: 10,
    backgroundColor: "#008cd6",
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textInput: {
    fontSize: 16,
    width: "70%",
    height: 55,
    marginBottom: 10,
    backgroundColor: "white",
    paddingLeft: 25,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    // For IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // For Android
    elevation: 17,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCatHead: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 30,
    marginTop: 20,
  },

  container3: {
    flex: 4,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  message: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "italic",
    backgroundColor: "black",
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    padding: 3,
  },
  listContainer: {
    paddingBottom: 15,
  },
  recipeCard: {
    flexDirection: "row",
    width: 320,
    height: 150,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3, // Android gölgesi
    shadowColor: "gray", // iOS gölgesi
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  likeSection: {
    position: "absolute",
    width: 68,
    height: 25,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 75,
    marginRight: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  recipeImage: {
    flex: 1,
    width: 150,
    borderRadius: 10,
    borderWidth: 2,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "#333",
  },
  recipeDetails: {
    marginHorizontal: 10,
  },
  TextDetails: {
    fontSize: 12,
    color: "#666",
  },
  heart: {
    fontSize: 18,
    paddingTop: 2,
    color: "tomato",
  },
});
