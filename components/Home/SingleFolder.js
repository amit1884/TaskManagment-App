import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function SingleFolder({folder,metaData,customStyle}) {
  return (
    <View
      style={[{
        elevation: 1,
        backgroundColor: "#F2F4F8",
        padding: 10,
        borderRadius: 10,
        height: 100,
        justifyContent: "space-between",
        flex: 1,
        width: Dimensions.get("window").width / 2,
      },customStyle?customStyle:{}]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 14,textTransform:'capitalize' }}>{folder}</Text>
        <Pressable>
          <Ionicons name="chevron-forward-outline" color="#000" size={18} />
        </Pressable>
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>{metaData?.tasks?.length} tasks</Text>
      </View>
    </View>
  );
}

export default SingleFolder;
