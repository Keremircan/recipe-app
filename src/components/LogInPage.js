import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const LogInPage = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.icon} source={require("../assets/login_gif.gif")} />
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
            placeholder="Email"
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
              name={isPasswordVisible ? "eye" : "eye-off"} 
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ width: "100%" }}>
          <Text style={styles.textForgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.buttonBlue}>
          <Text style={styles.textWhite}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.textAccount}>If you don't have account:</Text>

        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.textBlue}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container4}>
        <Text style={{ color: "gray", marginVertical: 20 }}>
          Or Continue With
        </Text>
        <TouchableOpacity style={styles.buttonRed}>
          <Image
            style={styles.iconSmall}
            source={require("../assets/google.png")}
          />
          <Text style={styles.textWhite}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInPage;

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
    width: 150,
    height: 150,
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
  textForgot: {
    width: "90%",
    textAlign: "right",
    fontWeight: "600",
  },
  container3: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonBlue: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "#32cccc",
    borderRadius: 30,
  },
  textAccount: {
    width: "75%",
    fontWeight: "500",
    color: "#343b36",
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
  },
  buttonRed: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "#f35958",
    borderRadius: 30,
  },
  textWhite: {
    color: "white",
    fontWeight: "bold",
  },
  textBlue: {
    color: "#32cccc",
    fontWeight: "bold",
  },
  container4: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
