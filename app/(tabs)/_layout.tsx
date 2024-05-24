import assets from "@/assets";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00bbff",
        tabBarInactiveTintColor: "#000000",
      }}
    >
      <Tabs.Screen
        name="(home)/home"
        options={{
          title: "Home",
          tabBarIcon: () => <Image source={assets.home} />,
        }}
      />
      <Tabs.Screen
        name="(settings)/settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <Image source={assets.settings} />,
        }}
      />
    </Tabs>
  );
}
