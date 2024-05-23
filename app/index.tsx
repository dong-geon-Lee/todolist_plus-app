import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>앱 시작 전 페이지</Text>
        <Link href="/login">로그인 페이지로 이동</Link>
      </View>
    </SafeAreaView>
  );
};

export default App;
