import React from "react";
import { ScrollView, Text, View } from "react-native";
import SingleFolder from "./SingleFolder";
function Folders({ data }) {
  const folders=data.slice(0,4)
  return (
    <ScrollView contentContainerStyle={{ gap: 5, marginTop: 20 }} horizontal>
      {folders?.map((folder, index) => {
        return <SingleFolder key={index} folder={folder} />;
      })}
    </ScrollView>
  );
}

export default Folders;
