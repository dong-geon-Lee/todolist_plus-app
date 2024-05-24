import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoItems from "@/components/TodoItems/TodoItems";
import { Text } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <TodoItems />
      <Text>여긴 달라</Text>
    </SafeAreaView>
  );
};

export default Home;
