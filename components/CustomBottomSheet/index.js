import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function CustomBottomSheet({
  showModal,
  setShowModal,
  children,
  title,
}) {
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={handleModalClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18, color: "#1E0342", fontWeight: 600 }}>
              {title}
            </Text>
            <Pressable onPress={handleModalClose}>
              <Ionicons name="close" size={22} />
            </Pressable>
          </View>
          <View
            style={{ flex: 1, marginTop: 10, justifyContent: "space-between" }}
          >
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomBottomSheet;

const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: windowHeight / 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 2,
  },
});
