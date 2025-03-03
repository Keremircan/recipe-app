import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const Details = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true
  useEffect(() => {
    // API'den veri çekme
    axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=85e40a4127f8493f97ff82366c7d3b96')  // API URL'sini buraya girin
      .then((response) => {
        setData(response.data.recipes[0]);  // Veriyi state'e ata
        setLoading(false);  // Yükleniyor durumunu sonlandır
      })
      .catch((error) => {
        setError(error);  // Hata durumunu yakala
        setLoading(false);  // Yükleniyor durumunu sonlandır
      });
  }, []);  // Boş bağımlılık dizisi, sadece component mount olduğunda çalışır

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />  {/* Yükleniyor göstergesi */}
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>Data:</Text>
      {/* Data null veya undefined değilse veriyi göster */}
      {data ? (
        <Text>{JSON.stringify(data, null, 2)}</Text>  
      ) : (
        <Text>No data available</Text> 
      )}
    </ScrollView>
  );
};

export default Details;
