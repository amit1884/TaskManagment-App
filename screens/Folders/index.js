import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NoResult from "../../components/NoResult";
import FloatingButton from "../../components/FloatingButton";
import AddFolder from "../../components/Folder/AddFolder";
import { setFolders } from "../../redux/slice/folderSlice";
import { BASE_URL } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;
function FoldersScreen() {
  const token = useSelector((state) => state?.auth?.token);
  const userData = useSelector((state) => state?.auth?.user);
  const folders = useSelector((state) => state?.folder?.folders?.data);
  const [showAddFolder, setShowAddFolder] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addFolder = (folderName) => {
    try {
      axios({
        method: "post",
        url: `${BASE_URL}/folders/createFolder`,
        headers: {
          Authorization: token,
        },
        data: {
          email: userData?.email,
          title: folderName,
        },
      })
        .then((response) => {
          console.log(response.data);
          setShowAddFolder(false);
          getFolders();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getFolders = () => {
    try {
      axios({
        method: "get",
        url: `${BASE_URL}/folders/getfolders/${userData?.email}`,
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          dispatch(setFolders(response.data));
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFolders();
  }, []);
  const openTasks = (folder) => {
    navigation.navigate("Tasks", { folderName: folder });
  };
  const handleDelete = (e, folder) => {
    e.stopPropagation();
    console.log(folder);
  };
  const handleEditModal = (e) => {
    e.stopPropagation();
    setShowAddFolder(true);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: "#9AC8CD",
          marginHorizontal: 10,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
        }}
        onPress={() => openTasks(item?.title)}
      >
        <View>
          <Text style={{ color: "#1E0342", fontSize: 20 }}>{item?.title}</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", columnGap: 20 }}>
            <Pressable onPress={(e) => handleEditModal(e)}>
              <Ionicons name="pencil" size={22} color={"#1E0342"} />
            </Pressable>
            <Pressable onPress={(e) => handleDelete(e,item)}>
              <Ionicons name="trash" size={22} color={"red"} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {folders?.length > 0 ? (
        <FlatList
          data={folders}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <NoResult />
      )}
      <AddFolder
        showAddFolder={showAddFolder}
        setShowAddFolder={setShowAddFolder}
        addFolder={addFolder}
      />
      <FloatingButton setOpen={setShowAddFolder} />
    </SafeAreaView>
  );
}

export default FoldersScreen;
