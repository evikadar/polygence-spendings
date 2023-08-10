import { Button, Form, Input, InputNumber, Radio } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import styled from "styled-components";
import { variables } from "./variables";

export const StyledContainer = styled.div`
  display: grid;
  margin: 10%;
`;

export const FormContainer = styled(Form)`
  display: flex;
  gap: ${variables.spacingS};
`;

export const StyledButton = styled(Button)<{ backgroundcolor: string }>`
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundcolor};
  width: 100%;
`;

export const StyledInput = styled(Input)`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
`;

export const StyledInputNumber = styled(InputNumber)`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
`;

export const StyledRadioButton = styled(Radio.Button)`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
`;

export const StyledTitle = styled(Title)`
  font-weight: bold;
  color: ${variables.black};
`;

export const StyledText = styled(Text)<{
  color: string;
  fontSize: string;
  fontWeight?: string;
}>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize ?? "inherit"};
`;
