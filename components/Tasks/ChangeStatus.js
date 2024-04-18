import React, { useState } from "react";
import CustomBottomSheet from "../CustomBottomSheet";
import { statusList } from "../../constants";
import { Pressable, Text, View } from "react-native";
import Dropdown from "../Dropdown";

function ChangeStatus({
  showChangeStatus,
  setShowChangeStatus,
  onClose,
  status,
}) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const handleStatusChange = (name, value) => {
    setSelectedStatus(value);
  };
  const handleSubmit=()=>{
    
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
