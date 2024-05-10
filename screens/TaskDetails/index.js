import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BASE_URL } from "../../constants";
import { useSelector } from "react-redux";
import Status from "../../components/StatusBar";
import ChangeStatus from "../../components/Tasks/ChangeStatus";

const TaskDetails = () => {
  const route = useRoute();
  const taskId = route?.params?.taskId;
  const [loading, setLoading] = useState(false);
  const [taskDetails, setTaskDetails] = useState({});
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const token = useSelector((state) => state?.auth?.token);
  const getTask = () => {
    try {
      axios({
        method: "post",
        url: `${BASE_URL}/tasks/getSingleTask`,
        headers: {
          Authorization: token,
        },
        data: {
          taskId: taskId,
        },
      })
        .then((response) => {
          setTaskDetails(response.data.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (taskId) {
      getTask();
    }
  }, [taskId]);
  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, position: "relative" }}>
        <View style={{ marginBottom: 40 }}>
          <Status activeStatus={taskDetails?.status} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Title: </Text>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              {taskDetails?.title}
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Description</Text>
            <Text>{taskDetails?.description}</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              marginVertical: 5,
              padding: 10,
              position: "relative",
            }}
          >
            <Ionicons name="folder" size={24} />
            <Text style={{ fontSize: 20, textTransform: "capitalize" }}>
              {taskDetails?.folder}
            </Text>
            <Ionicons
              name="pencil"
              size={18}
              style={{ position: "absolute", right: 10, top: 10 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              marginVertical: 5,
              padding: 10,
              position: "relative",
            }}
          >
            <Ionicons name="analytics-outline" size={24} />
            <Text style={{ fontSize: 20, textTransform: "capitalize" }}>
              {taskDetails?.priority}
            </Text>
            <Ionicons
              name="pencil"
              size={20}
              style={{ position: "absolute", right: 10, top: 10 }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "rgba(0,0,255,0.5)",
            padding: 10,
            borderRadius: 10,
            bottom: 60,
            position: "absolute",
            width: "100%",
            left: 2,
          }}
          onPress={() => setShowChangeStatus(true)}
        >
          <Text style={{ color: "#fff", fontSize: 17 }}>Change Status</Text>
          {/* <Ionicons name="trash" size={30} color={"red"} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "rgba(255,0,0,0.4)",
            padding: 10,
            borderRadius: 10,
            bottom: 10,
            position: "absolute",
            width: "100%",
            left: 2,
          }}
        >
          <Text style={{ color: "red", fontSize: 17 }}>Delete Task</Text>
          {/* <Ionicons name="trash" size={30} color={"red"} /> */}
        </TouchableOpacity>
      </View>
      {showChangeStatus && (
        <ChangeStatus
          showChangeStatus={showChangeStatus}
          setShowChangeStatus={setShowChangeStatus}
          onClose={getTask}
          taskId={taskId}
        />
      )}
    </SafeAreaView>
  );
};

export default TaskDetails;
