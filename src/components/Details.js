import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import axios from "axios";

const Details = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true

  useEffect(() => {
    // API'den veri çekme
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=85e40a4127f8493f97ff82366c7d3b96"
      ) // API URL'sini buraya girin
      .then((response) => {
        setRecipes(response.data.results); // Veriyi state'e ata
        setLoading(false); // Yükleniyor durumunu sonlandır
      })
      .catch((error) => {
        setError(error); // Hata durumunu yakala
        setLoading(false); // Yükleniyor durumunu sonlandır
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>Data:</Text>
      {recipes.length > 0 ? (
        recipes.map((value, index) => 
        <View key={index}>
          <Text>{value.title}</Text>
          <Image style={{width:50, height:150}} source={{uri: value.image}}/>
        </View>
      )
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

export default Details;
