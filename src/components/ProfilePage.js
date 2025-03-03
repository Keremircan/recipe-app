import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const ProfilePage = () => {
  const [image, setImage] = useState(null);

  const [name, setName] = useState("");

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [gender, setGender] = useState("");

  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={{ width: "88%", alignItems: "flex-end", marginTop: 5 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Your Profile
        </Text>

        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TouchableOpacity onPress={pickImage} style={{ marginVertical: 10 }}>
          <Image
            source={require("../assets/profile.png")}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={require("../assets/pen3.png")}
            style={styles.editStick}
          />
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          {gender == "male" ? "MR." : "MRS."} {name}
        </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Name: </Text>
          <TextInput
            inputMode="text"
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(name) => setName(name)}
            maxLength={20}
          />
        </View>

        <View style={styles.subcontainer}>
          <Text style={styles.text}>Birthday: </Text>
          <TouchableOpacity
            style={styles.textInput}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>
              {date.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          )}
        </View>

        <View style={styles.subcontainer}>
          <Text style={styles.text}>Gender: </Text>
          <View
            style={{
              backgroundColor: "#edf7fc",
              borderWidth: 0.5,
              borderRadius: 7,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item style={{ fontSize: 14 }} label="Male" value="male" />
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Female"
                value="female"
              />
            </Picker>
          </View>
        </View>

        <View style={styles.subcontainer}>
          <Text style={styles.text}>Password: </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.textInput2}
              placeholder="Password"
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={styles.button2}
            >
              <Text style={styles.buttonText2}>
                {secureText ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 15 }}>
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "red", fontWeight: "600" }}>
              Delete account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A7C7E7",
  },
  save: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#2374ff",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "500",
    fontStyle: "italic",
    color: "#2374ff",
  },
  buttonText2: {
    fontWeight: "500",
    fontStyle: "italic",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 3,
  },
  editStick: {
    position: "absolute",
    top: 10,
    left: 66,
    width: 20,
    height: 20,
  },
  container1: {
    backgroundColor: "#2374ff",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },

  container2: {
    flex: 2,
    width: "100%",
    padding: 20,
    borderWidth: 1,
  },
  subcontainer: {
    margin: 10,
    marginBottom: 5,
    width: "80%",
  },
  text: {
    fontWeight: "500",
    color: "blue",
    padding: 10,
    paddingLeft: 0,
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 7,
    paddingLeft: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#edf7fc",
  },
  textInput2: {
    width: "90%",
    marginRight: 20,
    borderWidth: 0.5,
    borderRadius: 7,
    paddingLeft: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#edf7fc",
  },
  button2: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 35,
    backgroundColor: "#2374ff",
    borderRadius: 5,
  },
  container3: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
});
