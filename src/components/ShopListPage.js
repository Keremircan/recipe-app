import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const ShopListPage = () => {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState(0);
  const [unit, setUnit] = useState("");
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");

  const addItem = () => {
    const isDuplicate = items.some(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );

    if (itemName.trim() == "") {
      setMessage("Please enter a product name!");
      return;
    } else if (isDuplicate) {
      setMessage("This item is already in the list!");
      return;
    } else if (
      number <= 0 ||
      number > 999 ||
      Number.isInteger(Number(number)) == false
    ) {
      setMessage("Please enter a valid number!");
      return;
    } else if (unit == "") {
      setMessage("Please select an unit!");
      return;
    } else {
      setItems([
        ...items,
        { name: itemName, num: number, unit: unit, confirm: false },
      ]);
      setItemName("");
      setNumber(0);
      setUnit("");
      setMessage("");
    }
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleConfirm = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const selectedItem = updatedItems.splice(index, 1)[0];

      selectedItem.confirm = !selectedItem.confirm;

      if (selectedItem.confirm == true) {
        updatedItems.push(selectedItem);
      } else {
        updatedItems.splice(0, 0, selectedItem);
      }

      return updatedItems;
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-evenly",
          overflow: "hidden",
        }}
      >
        <Text style={{ flex: 1, textAlign: "center" }}>{item.num}</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>{item.unit}</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>{item.name}</Text>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => toggleConfirm(index)}
          style={{ justifyContent: "center" }}
        >
          {item.confirm ? (
            <Ionicons name="checkbox" size={24} color={"green"} />
          ) : (
            <Ionicons name="stop-outline" size={25} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => deleteItem(index)}
          style={styles.buttonRed}
        >
          <Text
            style={{ color: "#f2fff2", fontWeight: "900", fontStyle: "italic" }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Ionicons name="cart" size={30} color="green" />
        <Text style={{ marginLeft: 15 }}>Shopping List</Text>
      </View>

      <View style={styles.container2}>
        <Text style={{ width: "90%", alignItems: "flex-start", marginTop: 15 }}>
          Add a product:
        </Text>

        <View style={styles.subcontainer}>
          <TextInput
            inputMode="numeric"
            onChangeText={(num) => setNumber(num)}
            value={number}
            style={styles.textInput}
            placeholder="number"
          />
          <View style={styles.picker}>
            <Picker
              selectedValue={unit}
              onValueChange={(value) => setUnit(value)}
              mode="dropdown"
            >
              <Picker.Item style={{ fontSize: 14 }} label="piece" value="X" />
              <Picker.Item style={{ fontSize: 14 }} label="kg" value="kg" />
              <Picker.Item style={{ fontSize: 14 }} label="gr" value="gr" />
            </Picker>
          </View>

          <TextInput
            inputMode="text"
            onChangeText={(text) => {
              setItemName(text.toLowerCase());
            }}
            value={itemName}
            style={styles.textInput2}
            placeholder="Product name"
          />

          <TouchableOpacity style={styles.button} onPress={() => addItem()}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "red" }}>{message}</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.headContainer}>
          <Text style={{ marginLeft: 5 }}>Number</Text>
          <Text style={{ marginHorizontal: 38 }}>Unit</Text>
          <Text>Product</Text>
        </View>

        <FlatList
          data={items}
          renderItem={renderItem}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ShopListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcf5bc",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "#77DD77",
  },

  container2: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
  subcontainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  picker: {
    backgroundColor: "#f2fff2",
    borderWidth: 0.5,
    borderRadius: 7,
    height: 40,
    width: "12%",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  textInput: {
    width: "20%",
    paddingLeft: 15,
    backgroundColor: "#f2fff2",
    borderWidth: 0.5,
    borderRadius: 7,
  },
  textInput2: {
    paddingLeft: 35,
    width: "40%",
    backgroundColor: "#f2fff2",
    borderWidth: 0.5,
    borderRadius: 7,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 35,
    backgroundColor: "#77dd77",
    borderRadius: 5,
  },
  buttonRed: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    marginLeft: 30,
    marginRight: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  container3: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headContainer: {
    width: 350,
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  itemContainer: {
    width: 350,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
