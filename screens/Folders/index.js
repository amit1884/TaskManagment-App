import React from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Folders from "../../components/Home/Folders";
import { appData } from "../../constants";
import SingleFolder from "../../components/Home/SingleFolder";
const numColumns=2
function FoldersScreen() {
    const folders=Object.entries(appData).map((folder)=>folder[0])
    const addFolder=()=>{
        
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "midnightblue",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
            Add Folder
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={folders}
        renderItem={({item})=><SingleFolder folder={item} metaData={appData[item]} customStyle={{margin:5}}/>}
        keyExtractor={(item) => item.category}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
}

export default FoldersScreen;
