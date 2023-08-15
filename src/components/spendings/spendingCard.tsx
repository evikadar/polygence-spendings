import React from "react";
import { FlexboxCol, StyledText, StyledTitle } from "../shared/sharedLayouts";
import { variables } from "../shared/variables";
import styled from "styled-components";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Spending } from "./spendingsList";

const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  width: 80vw;
  margin-bottom: ${variables.spacingM};
  border-radius: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconButton = styled(Button)`
  color: ${variables.darkGray};
  border: none;
`;

const StyledCurrency = styled.div`
  background-color: ${variables.antdBlue};
  height: 48px;
  width: 48px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  color: white;
`;

interface Props {
  item: Spending;
}

const SpendingCard: React.FC<Props> = ({ item }) => {
  const onEdit = () => {
    console.log("Lets call a PUT request if we have it");
  };
  const onDelete = () => {
    console.log("Lets call a DELETE request if we have it");
  };

  const spent_at = new Date(item.spent_at);
  const formattedDate = `${spent_at.getHours()}:${spent_at.getMinutes()} - ${spent_at.toLocaleString(
    "default",
    { month: "long" }
  )} ${spent_at.getDate()} ${spent_at.getFullYear()}
`;

  return (
    <CardContainer>
      <StyledCurrency>
        <p>{item.currency}</p>
      </StyledCurrency>
      <FlexboxCol>
        <StyledTitle level={5}>{item.description}</StyledTitle>
        <StyledText color={variables.middleGray} fontSize="14px">
          {formattedDate}
        </StyledText>
      </FlexboxCol>
      {/* needs an extra margin bottom to keep the horizontal alignment, otherwise antd styling overrides it */}
      <StyledTitle level={5} style={{ marginBottom: 0 }}>
        {item.currency === "USD" && "$"}
        {item.amount}
        {item.currency === "HUF" && "Ft"}
      </StyledTitle>
      <ButtonContainer>
        <IconButton icon={<EditOutlined />} shape="circle" onClick={onEdit} />
        <IconButton
          icon={<DeleteOutlined />}
          shape="circle"
          onClick={onDelete}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default SpendingCard;
