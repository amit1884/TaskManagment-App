import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Folders from "../../components/Home/Folders";
import AddTasks from "../../components/AddTasks";
import { BASE_URL, appData } from "../../constants";
import TaskPreview from "../../components/Tasks/TaskPreview";
import { useNavigation } from "@react-navigation/native";
import { removeItemFromStorage } from "../../utitlity";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, clearUserData } from "../../redux/slice/authSlice";
import FloatingButton from "../../components/FloatingButton";
import { setTasks } from "../../redux/slice/tasksSlice";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import NoResult from "../../components/NoResult";
import { setFolders } from "../../redux/slice/folderSlice";
function HomeScreen() {
  const [data, setData] = useState(appData);
  const [openAddTask, setOpenAddTasks] = useState(false);
  const [tasks,setTasks]=useState([])
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state?.auth?.user);
  const folders = useSelector((state) => state?.folder?.folders?.data);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogout = () => {
    removeItemFromStorage("token");
    removeItemFromStorage("userData");
    dispatch(clearToken());
    dispatch(clearUserData());
  };
  useEffect(() => {
    getTasks('medium');
    getFolders()
  }, []);
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
  const getTasks = (priority) => {
    setLoading(true);
    let payload = {
      email: userData?.email,
    };
    if (priority) {
      payload = { ...payload, filter: { priority: priority } };
    }
    try {
      axios({
        method: "post",
        url: `${BASE_URL}/tasks/getTasks`,
        headers: {
          Authorization: token,
        },
        data: payload,
      })
        .then((response) => {
          setLoading(false);
          setTasks(response.data.data)
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data);
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View>
            <Image
              source={require("../../assets/profile_default.png")}
              style={{
                resizeMode: "cover",
                width: 100,
                height: 100,
                borderRadius: 200,
              }}
            />
          </View>
          <View>
            <Text>Amit Raj</Text>
            <Text>{userData?.email || "NA"}</Text>
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                alignItems: "center",
              }}
            >
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 10,
                  paddingVertical: 5,
                  borderRadius: 4,
                  marginTop: 10,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                }}
              >
                <Ionicons name="pencil" color="#000" />
                <Text>Edit Profile</Text>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 10,
                  paddingVertical: 6,
                  borderRadius: 4,
                  marginTop: 10,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                }}
                onPress={() => handleLogout()}
              >
                <Ionicons name="power" color="#000" />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.folderContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18 }}>Folders</Text>
            <Pressable onPress={() => navigation.navigate("Folders")}>
              <Text
                style={{ fontSize: 15, color: "midnightblue", fontWeight: 600 }}
              >
                View All
              </Text>
            </Pressable>
          </View>

          <Folders data={folders} />
        </View>
        <View style={styles.tasksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18 }}>Tasks</Text>
            <Pressable onPress={() => navigation.navigate("Tasks")}>
              <Text
                style={{ fontSize: 15, color: "midnightblue", fontWeight: 600 }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <View>
            {loading ? (
              <ActivityIndicator />
            ) : tasks?.length > 0 ? (
              tasks?.map((item, index) => {
                return <TaskPreview task={item} key={item?._id} />;
              })
            ) : (
              <NoResult />
            )}
          </View>
          <View>
            <AddTasks open={openAddTask} isOpen={setOpenAddTasks} />
          </View>
        </View>
      </ScrollView>

      <FloatingButton setOpen={setOpenAddTasks} />
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 30,
  },
  folderContainer: {
    padding: 10,
  },
  tasksContainer: {
    padding: 10,
  },
});
