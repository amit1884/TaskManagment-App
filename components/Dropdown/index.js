// DropdownComponent.js
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet } from 'react-native';

const Dropdown = ({ items,selectedItem,setSelectedItem ,customStyle}) => {

  return (
    <View style={[styles.container,customStyle]}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedItem('folder',value)}
        items={items}
        placeholder={{ label: 'Select an item...', value: null }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
});

export default Dropdown;
