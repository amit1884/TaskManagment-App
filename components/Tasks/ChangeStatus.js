import React, { useState } from "react";
import CustomBottomSheet from "../CustomBottomSheet";
import { BASE_URL, statusList } from "../../constants";
import { Pressable, Text, View } from "react-native";
import Dropdown from "../Dropdown";
import axios from "axios";
import { useSelector } from "react-redux";

function ChangeStatus({
  showChangeStatus,
  setShowChangeStatus,
  onClose,
  status,
  taskId
}) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const token = useSelector((state) => state?.auth?.token);
  const handleStatusChange = (name, value) => {
    setSelectedStatus(value);
  };
  const handleSubmit=()=>{
    try {
      axios({
        method: "put",
        url: `${BASE_URL}/tasks/editTask`,
        headers: {
          Authorization: token,
        },
        data: {
          status:selectedStatus,
          taskId:taskId
        }
      })
        .then((response) => {
          console.log(response.data.data);
          onClose()
          setShowChangeStatus(false)

        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <CustomBottomSheet
      showModal={showChangeStatus}
      setShowModal={setShowChangeStatus}
      title={"Change Status"}
    >
      <View>
        <Dropdown
          items={statusList}
          selectedItem={selectedStatus}
          setSelectedItem={handleStatusChange}
          name="status"
        />
      </View>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "#1E0342",
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => handleSubmit()}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Update
        </Text>
      </Pressable>
    </CustomBottomSheet>
  );
}

export default ChangeStatus;
