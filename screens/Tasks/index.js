import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Dropdown from "../../components/Dropdown";
import TaskPreview from "../../components/Tasks/TaskPreview";
import { BASE_URL, appData, folderList } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../redux/slice/tasksSlice";
import NoResult from "../../components/NoResult";
import axios from "axios";
import { parseFolders } from "../../utitlity";
import AddTasks from "../../components/AddTasks";
import FloatingButton from "../../components/FloatingButton";

function TaskScreen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const folderName = route.params?.folderName;
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state?.task?.tasks?.data);
  const folders = useSelector((state) => state?.folder?.folders?.data);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [loading, setLoading] = useState(false);
  const [openAddTask,setOpenAddTasks]=useState(false)
  useEffect(() => {
    if (folderName) {
      setSelectedFolder(folderName);
      getTasks(folderName.toLowerCase());
    } else {
      getTasks();
    }
  }, []);
  const getTasks = (folderName) => {
    setLoading(true);
    let payload = {
      email: userData?.email,
    };
    if (folderName) {
      payload = { ...payload, filter: { folder: folderName } };
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
          dispatch(setTasks(response.data));
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
  const handleFolderChange = (name, value) => {
    setSelectedFolder(value);
    getTasks(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
      <View>
        <View style={{marginBottom:10}}>
          <Text style={{ padding: 10, fontWeight: 600 }}>Select Folder</Text>
          <Dropdown
            items={parseFolders(folders)}
            selectedItem={selectedFolder}
            setSelectedItem={handleFolderChange}
            customStyle={{ backgroundColor: "#F2F4F8", borderRadius: 10 }}
            name="folder"
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : tasks?.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskPreview task={item} />}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <NoResult />
      )}
      <View>
        <AddTasks open={openAddTask} isOpen={setOpenAddTasks} getTasks={getTasks}/>
      </View>
      <FloatingButton setOpen={setOpenAddTasks} />
    </SafeAreaView>
  );
}

export default TaskScreen;
