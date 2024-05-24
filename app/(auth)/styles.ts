import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding-left: 24px;
`;

export const Main = styled(ScrollView)`
  padding-right: 18px;
`;

export const HeaderView = styled.View`
  width: 343px;
  height: 211px;
  margin-top: 97px;
`;

export const Section = styled.View``;

export const Box = styled.View``;

export const Img = styled.Image`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 10px;
  margin-right: 4px;
`;

export const LogoImg = styled.Image``;

export const Div = styled.View`
  width: 343px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 2px solid #dbdbdb;
  margin-bottom: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BoxEmail = styled.View``;

export const EmailText = styled.Text``;

export const PwdText = styled.Text``;

export const BoxPwd = styled.View``;

export const LabelEmail = styled.Text`
  color: #999;
  text-align: left;
  font-family: "Inter-Medium";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.5px;
  margin-bottom: 4px;
`;

export const LabelPwd = styled.Text``;

export const Input = styled.TextInput<any>`
  color: #111;
  text-align: left;
  font-family: "Inter-Medium";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.5px;
  width: 100%; /* 전체 너비 사용 */
  height: 100%; /* 전체 높이 사용 */
  padding: 0 4px; /* 패딩 추가 */
`;

export const ImageMain = styled.Image`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
  display: block;
`;

export const Button = styled.Pressable`
  width: 343px;
  height: 63px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #016bdf;
  margin-top: 77px;
  ${Platform.OS === "ios"
    ? `
    shadow-color: rgba(1, 107, 223, 0.2);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 20px;
  `
    : `
    elevation: 4;
  `}
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Inter-SemiBold";
  font-size: 14px;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.5px;
`;
