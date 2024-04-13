import React, { useState } from "react";
import {
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
import { appData } from "../../constants";
import TaskPreview from "../../components/Tasks/TaskPreview";
import { useNavigation } from "@react-navigation/native";
function HomeScreen() {
  const [data, setData] = useState(appData);
  const [openAddTask, setOpenAddTasks] = useState(false);
  const navigation=useNavigation()
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
            <Text>amitraj@gmail.com</Text>
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
              }}
            >
              <Ionicons name="pencil" color="#000" />
              <Text>Edit Profile</Text>
            </Pressable>
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
            <Pressable onPress={()=>navigation.navigate('Folders')}>
              <Text
                style={{ fontSize: 15, color: "midnightblue", fontWeight: 600 }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <Folders data={data} />
        </View>
        <View style={styles.tasksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18 }}>Tasks</Text>
            <Pressable onPress={()=>navigation.navigate('Tasks')}>
              <Text
                style={{ fontSize: 15, color: "midnightblue", fontWeight: 600 }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <View>
            <TaskPreview />
            <TaskPreview />
            <TaskPreview />
            <TaskPreview />
          </View>
          <View>
            <Pressable
              style={{
                backgroundColor: "midnightblue",
                padding: 10,
                borderRadius: 20,
                margin: 10,
              }}
              onPress={() => setOpenAddTasks(true)}
            >
              <Text
                style={{ color: "#fff", textAlign: "center", fontSize: 18 }}
              >
                Add Task
              </Text>
            </Pressable>
            <AddTasks open={openAddTask} isOpen={setOpenAddTasks} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
