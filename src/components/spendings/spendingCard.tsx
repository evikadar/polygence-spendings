import React from "react";
import { StyledText, StyledTitle } from "../shared/sharedLayouts";
import { variables } from "../shared/variables";
import styled from "styled-components";
import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { Spending } from "./spendingsList";

const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  width: 80vw;
  margin-bottom: ${variables.spacingM};
  border-radius: 15px;
  padding: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const IconButton = styled(Button)<{ backgroundcolor: string }>`
  color: white;
  background-color: ${(props) => props.backgroundcolor};
  border: none;
`;

interface Props {
  item: Spending;
}

const SpendingCard: React.FC<Props> = ({ item }) => {
  const onPlay = () => {
    // lets ask the user if this is today's challenge
  };

  return (
    <CardContainer>
      <>
        <StyledTitle level={5} style={{ margin: "15px 0 0" }}>
          {item.description}
        </StyledTitle>
        <StyledText color={variables.middleGray} fontSize="14px">
          {item.spent_at}
        </StyledText>
        <StyledTitle level={5}>
          {item.currency === "USD" && "$"}
          {item.amount}
          {item.currency === "HUF" && "Ft"}
        </StyledTitle>
      </>

      <ButtonContainer>
        <IconButton
          backgroundcolor={variables.black}
          icon={<CaretRightOutlined />}
          shape="circle"
          onClick={onPlay}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default SpendingCard;
