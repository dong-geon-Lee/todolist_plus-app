import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

import * as S from "./styles";

const Login = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <View>
          <Text>Login</Text>
          <Link href="/home">로그인</Link>
        </View>
      </S.Container>
    </SafeAreaView>
  );
};

export default Login;
