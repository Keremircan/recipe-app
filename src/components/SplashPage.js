import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

const SplashPage = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    Font: require("../assets/fonts/Runtoe.ttf"),
  });

  return (
    <ImageBackground source={require('../assets/mainscreen.jpg')} style={styles.container} resizeMode="cover">
      <View style={styles.container1}>

        <Text style={styles.textWelcome}>WELCOME</Text>
        <Text style={styles.textWelcome}>TO</Text>
        <Text style={styles.textWelcome}>LEZZET DIYARI</Text>

      </View>

      <View style={styles.container2}>

        <Text style={styles.text1}>Lezzet Diyârı</Text>
        <Text style={styles.text2}>
          A mobile application offering a variety of delicious recipe
          recommendations, enriched with unique features.
        </Text>

      </View>
      <View style={styles.container3}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text3}>Let's Cooking!</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  container1:{
    position: "absolute",
    width: "80%",
    alignItems: "center",
    top: 170,
    right: 110,
    
  },
  textWelcome: {
    color: "white",
    fontSize: 55,
    fontFamily: "Font",
    textShadowColor: "gray",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
  },
  container2: {
    position: "absolute",
    bottom: 220,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#363636",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
  },
  text2: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    color: "#cfcecc",
    marginTop: 10,
  },
  container3: {
    position: "absolute",
    bottom: 120,
    width: '100%',
    alignItems: "center",
    
  },
  button: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32cccc",
    borderRadius: 50,
    height: 50,
  },
  text3: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
