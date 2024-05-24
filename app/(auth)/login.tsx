import React, { useRef, useState } from "react";
import { router } from "expo-router";

import assets from "@/assets";
import * as S from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<any>(null);

  const onSumbit = () => {
    console.log("제출");
    console.log(email, password);
    router.push("/home");
  };

  return (
    <S.Container>
      <S.Main>
        <S.HeaderView>
          <S.ImageMain source={assets.heros} />
        </S.HeaderView>

        <S.Section>
          <S.Box>
            <S.LabelEmail>이메일</S.LabelEmail>
            <S.Div>
              <S.Img source={assets.mail} alt="mail" />
              <S.Input
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
                placeholder="yourLife@gmail.com"
                placeholderTextColor="#dbdbdb"
                onSubmitEditing={() => passwordInputRef.current.focus()}
                blurOnSubmit={false}
              />
            </S.Div>
          </S.Box>
          <S.Box>
            <S.LabelEmail>비밀번호</S.LabelEmail>
            <S.Div>
              <S.Img source={assets.lock} alt="lock" />
              <S.Input
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="password"
                placeholderTextColor="#dbdbdb"
                returnKeyType="done"
                ref={passwordInputRef}
                onSubmitEditing={onSumbit}
              />
            </S.Div>
          </S.Box>
        </S.Section>

        <S.Button onPress={onSumbit}>
          <S.Title>로그인</S.Title>
        </S.Button>
      </S.Main>
    </S.Container>
  );
};

export default Login;
