import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 10);
  }, [router]);

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
