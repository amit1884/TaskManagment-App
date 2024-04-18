import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { statusList } from "../../constants";

function Status({ activeStatus = "todo" }) {
  const getActiveIndex = () => {
    if (activeStatus == "todo") return 0;
    else if (activeStatus == "inprogress") return 1;
  };
  return (
    <View style={{ flexDirection: "row", columnGap: 5 }}>
      {statusList?.map((status, index) => {
        return (
          <View style={{ flex: 1 }} key={index}>
            <View
              style={[
                styles.defaultBarStyle,
                getActiveIndex() >= index
                  ? styles.activeBarStyle
                  : styles.inActiveBarStyle,
              ]}
            ></View>
            <Text
              style={[
                { textAlign: "center", fontWeight: 500 },
                getActiveIndex() >= index
                  ? styles.activeText
                  : styles.inActiveText,
              ]}
            >
              {status.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default Status;

const styles = StyleSheet.create({
  defaultBarStyle: {
    height: 4,
    borderRadius: 10,
  },
  activeBarStyle: {
    backgroundColor: "#0E46A3",
  },
  inActiveBarStyle: {
    backgroundColor: "#666",
  },
  activeText: {
    color: "#0E46A3",
  },
  inActiveText: {
    color: "#666",
  },
});
