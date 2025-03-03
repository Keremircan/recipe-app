import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";

const SignUpPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Font: require("../assets/fonts/Runtoe.ttf"),
  });
  if (!fontsLoaded) {
    return null; // Yüklenmeden önce bir ekran gösterebilirsiniz
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.icon} source={require("../assets/signup.png")} />
      </View>

      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.iconSmall}
            source={require("../assets/email.png")}
          />
          <TextInput
            inputMode="email"
            style={styles.textInput}
            placeholder="Email or phone number"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.iconSmall}
            source={require("../assets/password.png")}
          />
          <TextInput
            secureTextEntry={!isPasswordVisible}
            inputMode="password"
            style={styles.textInput}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.iconEye}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon
              name={isPasswordVisible ? "eye" : "eye-off"} // Göz ikonunu değiştir
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.textWhite}>Sign Up</Text>
        </TouchableOpacity>

        <Text>
          By signing up, I accept the{" "}
          <Text style={styles.underline}>terms of use</Text> and the{" "}
          <Text style={styles.underline}>data privacy policy</Text>.
        </Text>
      </View>

      <View style={styles.container4}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textGreen}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: 110,
    height: 110,
  },
  container2: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    height: 55,
    backgroundColor: "white",
    paddingLeft: 25,
    paddingRight: 45,
    borderRadius: 20,
    // For IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // For Android
    elevation: 17,
  },
  iconEye: {
    position: "absolute",
    right: 40,
  },
  iconSmall: {
    marginRight: 15,
    width: 25,
    height: 25,
  },
  container3: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonGreen: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "#32cccc",
    borderRadius: 30,
  },
  textWhite: {
    color: "white",
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
    color: "#32cccc",
  },
  container4: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonWhite: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderWidth: 2,
    borderColor: "#32cccc",
    borderStyle: "solid",
    borderRadius: 30,
    marginTop: 20,
  },
  textGreen: {
    color: "#32cccc",
    fontWeight: "bold",
  },
});
