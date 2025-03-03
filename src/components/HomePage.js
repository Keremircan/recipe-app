import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import SearchPage from "./SearchPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurCateg,
  setSearchedItem,
  setIsSearched,
  setSearchedItem2,
  setLikedRecipes,
} from "../redux/categorySlice";

const categories = ["All", "Main Meal", "Entree", "Dessert", "Snack"];

const HomePage = () => {
  const { curCateg, searchedItem, isSearched, likedRecipes, recipes } =
    useSelector((state) => state.category);
  const dispatch = useDispatch();

  // const [fontsLoaded] = useFonts({
  //   Font: require("../assets/fonts/SairaCondens.ttf"),
  // });

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

  const filteredRecipes =
    curCateg === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === curCateg);

  return (
    <View style={styles.container}>
      {isSearched == true ? (
        <SearchPage />
      ) : (
        <>
          <View style={styles.container1}>
            <View style={styles.searchIcon}>
              <Ionicons name="search" size={20} color="black" />
            </View>
            <TextInput
              style={styles.textInput}
              inputMode="search"
              placeholder="Search a recipe..."
              value={searchedItem}
              onChangeText={(text) => dispatch(setSearchedItem(text))}
              onSubmitEditing={() => {
                dispatch(setIsSearched(true));
                dispatch(setSearchedItem2());
              }}
              returnKeyType="search"
            />
          </View>

          <View style={styles.container2}>
            <Text style={styles.textCatHead}>Category</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categories}
            >
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => dispatch(setCurCateg(category))}
                  style={styles.categoryButton}
                >
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.dashes}>
            {Array.from({ length: 20 }).map((_, index) => (
              <View key={index} style={styles.dash} />
            ))}
          </View>

          <View style={styles.container3}>
            <ImageBackground
              source={require("../assets/brush.png")}
              style={{
                width: 210,
                justifyContent: "center",
                alignItems: "center",
                marginVertical:10,
              }}
              resizeMode="cover"
            >
              <Text style={styles.header}>{curCateg} Recipes</Text>
            </ImageBackground>

            <FlatList
              data={filteredRecipes}
              renderItem={renderRecipe}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
              numColumns={1}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default HomePage;

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
    alignItems: "flex-end",
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
    // For IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // For Android
    elevation: 17,
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
    width: "100%",
    justifyContent: "space-evenly",
    // borderColor: "black",
    // borderBottomWidth: 2,
    // borderStyle: "dashed",
  },
  textCatHead: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Font",
  },
  categories: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryButton: {
    justifyContent: "center",
    marginLeft: 6,
    marginRight: 6,
    paddingHorizontal: 22,
    height: 45,
    borderRadius: 18,
    backgroundColor: "#FFF9C4",
    borderWidth: 0.5,
  },
  categoryText: {
    color: "black",
    
  },
  dashes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  dash: {
    width: 10,
    height: 2,
    backgroundColor: "black",
  },
  container3: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 22,
   
    color: "white",
    marginBottom: 10,
    width: 250,
    textAlign: "center",
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
    // elevation: 3, // Android gölgesi
    // shadowColor: "gray", // iOS gölgesi
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
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
