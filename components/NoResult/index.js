import React from "react";
import { Image, Text, View } from "react-native";

function NoResult({ message }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/empty.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text styles={{ fontSize: 20 }}>{message || "No Result Found !"}</Text>
    </View>
  );
}

export default NoResult;
