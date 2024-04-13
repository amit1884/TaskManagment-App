import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dropdown from "../Dropdown";
function AddTasks({ open, isOpen }) {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (name, value) => {
    let temp = { ...formValues };
    temp[name] = value;
    setFormValues(temp);
  };
  const handleSubmit = () => {};
  return (
    <Modal
      onRequestClose={() => isOpen(false)}
      visible={open}
      animationType="slide"
    >
      <View style={{ position: "relative", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 15,
            backgroundColor: "#fff",
            elevation: 1,
            alignItems: "center",
            paddingHorizontal: 20,
            columnGap: 20,
          }}
        >
          <Pressable onPress={() => isOpen(false)}>
            <Ionicons name="arrow-back-outline" color="#000" size={18} />
          </Pressable>
          <Text style={{ fontSize: 18 }}>Add Tasks</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            placeholder="enter task title"
            style={{
              backgroundColor: "#F2F4F8",
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            value={formValues["title"]}
            onChangeText={(text) => handleChange("title", text)}
          />
          <TextInput
            multiline
            placeholder="enter task description ..."
            numberOfLines={8}
            textAlignVertical="top"
            style={{
              backgroundColor: "#F2F4F8",
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            value={formValues["desc"]}
            onChangeText={(text) => handleChange("desc", text)}
          />
          <View
            style={{
              backgroundColor: "#F2F4F8",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Priority</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <Pressable
                style={[
                  styles.commonPriorityComp,
                  formValues["priority"] == "low"
                    ? styles.lowActive
                    : styles.lowDefault,
                ]}
                onPress={() => handleChange("priority", "low")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color:
                      formValues["priority"] === "low" ? "#fff" : "#A7E1B7",
                  }}
                >
                  Low
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.commonPriorityComp,
                  formValues["priority"] == "medium"
                    ? styles.mediumActive
                    : styles.mediumDefault,
                ]}
                onPress={() => handleChange("priority", "medium")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color:
                      formValues["priority"] === "medium" ? "#fff" : "#77B1DC",
                  }}
                >
                  Medium
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.commonPriorityComp,
                  formValues["priority"] == "high"
                    ? styles.heighActive
                    : styles.heighDefault,
                ]}
                onPress={() => handleChange("priority", "high")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color:
                      formValues["priority"] === "high" ? "#fff" : "#FF9494",
                  }}
                >
                  High
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F2F4F8",
            padding: 10,
            borderRadius: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Select Folder</Text>
          <Dropdown
            items={[
              { label: "Common", value: "common" },
              { label: "Personal", value: "personal" },
              { label: "Work", value: "Work" },
            ]}
            selectedItem={formValues["folder"]}
            setSelectedItem={handleChange}
          />
        </View>
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: "midnightblue",
            padding: 10,
            borderRadius: 20,
            margin: 10,
            position: "absolute",
            bottom: 20,
            width: 200,
            left: "20%",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default AddTasks;

const styles = StyleSheet.create({
  commonPriorityComp: {
    flex: 1,
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  lowDefault: {
    backgroundColor: "#fff",
    borderColor: "#A7E1B7",
  },
  lowActive: {
    backgroundColor: "#A7E1B7",
    borderWidth: 0,
  },
  mediumDefault: {
    backgroundColor: "#fff",
    borderColor: "#77B1DC",
  },
  mediumActive: {
    backgroundColor: "#77B1DC",
    borderWidth: 0,
  },
  heighDefault: {
    backgroundColor: "#fff",
    borderColor: "#FF9494",
  },
  heighActive: {
    backgroundColor: "#FF9494",
    borderWidth: 0,
  },
});
