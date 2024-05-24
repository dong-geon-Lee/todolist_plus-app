import { Image, Text, View } from "react-native";
import React from "react";
import assets from "@/assets";

const TodoItems = () => {
  return (
    <View>
      <Image source={assets.center} />
      <Text>TodoItems</Text>
    </View>
  );
};

export default TodoItems;
