import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { setLikedRecipes } from "../redux/categorySlice";

const LikedPage = () => {
  const { likedRecipes } = useSelector((state) => state.category);
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

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Ionicons name={"heart-circle"} style={styles.heartHead} />
        <Text style={styles.header}>Liked Recipes</Text>
      </View>

      {likedRecipes.length === 0 ? (
        <View style={styles.container2}>
          <Text style={styles.warning}>No Liked Recipe!</Text>
        </View>
      ) : (
        <View style={styles.container2}>
          <FlatList
            data={likedRecipes}
            renderItem={renderRecipe}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            numColumns={1}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default LikedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA8A8",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "italic",
    color: "white",
  },
  container2: {
    flex: 5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingTop: 30,
  },
  warning: {
    color: "red",
    fontSize: 18,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
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
  heartHead: {
    fontSize: 27,
    paddingTop: 2,
    color: "black",
    marginRight: 10,
  },
  heart: {
    fontSize: 18,
    paddingTop: 2,
    color: "tomato",
  },
});
