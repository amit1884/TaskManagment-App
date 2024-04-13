import React from "react";
import { ScrollView, Text, View } from "react-native";
import SingleFolder from "./SingleFolder";
function Folders({ data }) {
  const folderList = Object.keys(data);
  return (
    <ScrollView contentContainerStyle={{ gap: 5, marginTop: 20 }} horizontal>
      {folderList?.map((folder,index) => {
        return <SingleFolder key={index} folder={folder} metaData={data[folder]}/>;
      })}
    </ScrollView>
  );
}

export default Folders;
