import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { isAlpha } from "../../utitlity";
function AddFolder({ showAddFolder, setShowAddFolder, addFolder }) {
  const [folderName, setFolderName] = useState("");
  const [formError, setFormErrors] = useState("");
  const handleChange = (value) => {
    setFolderName(value);
    if (!isAlpha(value)) {
      setFormErrors("Invalid Value, only alphabets allowed!");
    } else {
      setFormErrors("");
    }
  };
  const handleSubmit = () => {
    if (!folderName) {
      setFormErrors("Field is required!");
    } else {
      addFolder(folderName);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showAddFolder}
      onRequestClose={() => setShowAddFolder(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18,color:'#1E0342',fontWeight:600 }}>Add Folder</Text>
            <Pressable onPress={() => setShowAddFolder(false)}>
              <Ionicons name="close" size={22} />
            </Pressable>
          </View>
          <View
            style={{ flex: 1, marginTop: 10, justifyContent: "space-between" }}
          >
            <View>
              <TextInput
                placeholder="enter folder name"
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  paddingVertical: 5,
                  backgroundColor: "#E1F7F5",
                }}
                value={folderName}
                onChangeText={(text) => handleChange(text)}
              />
              {formError && (
                <Text style={{ color: "red", fontSize: 12, paddingLeft: 8 }}>
                  {formError}
                </Text>
              )}
            </View>
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "#1E0342",
                margin: 10,
                borderRadius: 10,
              }}
              onPress={() => handleSubmit()}
            >
              <Text
                style={{ color: "#fff", textAlign: "center", fontSize: 18 }}
              >
                Add
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddFolder;

const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: windowHeight / 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 2,
  },
});
