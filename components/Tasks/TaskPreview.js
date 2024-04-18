import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function TaskPreview({ task }) {
  const navigation = useNavigation();
  const goToTaskDetails = (id) => {
    navigation.navigate("TaskDetails", { taskId: id });
  };
  return (
    <Pressable
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#F2F4F8",
        marginVertical: 3,
      }}
      onPress={() => goToTaskDetails(task?._id)}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            {task?.title || "Task Title"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              columnGap: 10,
              alignItems: "center",
            }}
          >
            <Text>{task?.folder || "Folder"}</Text>
            <View
              style={{
                backgroundColor: "#fff",
                color: "orange",
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 19,
              }}
            >
              <Text style={{ color: "orange" }}>{task?.priority || "Low"}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 500 }}>Created At: </Text>
            <Text>12/04/2024</Text>
          </View>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={18} />
        </View>
      </View>
    </Pressable>
  );
}

export default TaskPreview;
