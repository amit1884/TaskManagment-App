import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
function FloatingButton({setOpen}) {
  return (
    <Pressable
      style={{
        backgroundColor: "#1E0342",
        padding: 10,
        borderRadius: 60,
        margin: 10,
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
      onPress={() => setOpen(true)}
    >
      <Ionicons name="add-outline" size={24} color={"#fff"} />
    </Pressable>
  );
}

export default FloatingButton;
