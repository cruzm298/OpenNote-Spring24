import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet from "react-native-actions-sheet";

const PickFile = ({refVar}) => {
  return (
    <ActionSheet ref={refVar}>
      <Text>Hi, I am here.</Text>
    </ActionSheet>
  );
}

export default PickFile