import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curCateg: "All",
  searchedItem: "",
  isSearched: false,
  searchedItem2: "",
  isLiked: false,
  likedRecipes: [],
  recipes : [
    {
      id: "1",
      name: "Fish and Chips",
      category: "Main Course",
      likes: 12340,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "2",
      name: "Cookie",
      category: "Dessert",
      likes: 9123,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "3",
      name: "Adana Kebab",
      category: "Entree Starter",
      likes: 8420,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "4",
      name: "Kebab",
      category: "Snack",
      likes: 7640,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "5",
      name: "Döner",
      category: "Beverage",
      likes: 7640,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "6",
      name: "Dolma",
      category: "Main Course",
      likes: 7640,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "7",
      name: "Hamburger",
      category: "Main Course",
      likes: 2884,
      image: require("../assets/mainscreen.jpg"),
    },
    {
      id: "8",
      name: "Pizza",
      category: "Main Course",
      likes: 7640,
      image: require("../assets/mainscreen.jpg"),
    },
  ],
 
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCurCateg: (state, action) => {
      state.curCateg = action.payload;
    },
    setSearchedItem: (state, action) => {
      state.searchedItem = action.payload;
    },
    setIsSearched: (state, action) => {
      state.isSearched = action.payload;
    },
    setSearchedItem2: (state) => {
      state.searchedItem2 = state.searchedItem;
    },
    setLikedRecipes: (state, action) => {
      const recipe = action.payload;
      const index = state.likedRecipes.findIndex(
        (item) => item.id === recipe.id
      );

      if (index !== -1) {
        // Tarif zaten varsa array'den kaldır
        state.likedRecipes = state.likedRecipes.filter(
          (item) => item.id !== recipe.id
        );

        state.recipes = state.recipes.map((item) =>
          item.id === recipe.id ? { ...item, likes: item.likes - 1 } : item
        );
      } else {
        // Tarif yoksa array'e ekle
        state.likedRecipes.push({ ...recipe, likes: recipe.likes + 1 });

        state.recipes = state.recipes.map((item) =>
          item.id === recipe.id ? { ...item, likes: item.likes + 1 } : item
        );
      }
    },
  },
});

export const {
  setCurCateg,
  setSearchedItem,
  setIsSearched,
  setSearchedItem2,
  setLikedRecipes,
} = categorySlice.actions;

export default categorySlice.reducer;
