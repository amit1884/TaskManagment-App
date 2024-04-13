import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function TaskPreview({ task }) {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#F2F4F8",
        marginVertical: 3,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{fontSize:18,fontWeight:500}}>Task Title</Text>
          <View style={{ flexDirection: "row",marginVertical:10,columnGap:10,alignItems:'center' }}>
            <Text>Folder</Text>
            <View style={{ backgroundColor: "#fff", color: "orange" ,paddingVertical:2,paddingHorizontal:20,borderRadius:19}}>
              <Text style={{ color: "orange" }}>Low</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 500 }}>Created At: </Text>
            <Text>12/04/2024</Text>
          </View>
        </View>
        <View >
          <Ionicons name="chevron-forward-outline" size={18}/>
        </View>
      </View>
    </View>
  );
}

export default TaskPreview;
