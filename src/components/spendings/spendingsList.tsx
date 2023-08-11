import React from "react";
import {
  FormContainer,
  StyledContainer,
  StyledInput,
  StyledInputNumber,
  StyledRadioButton,
} from "../shared/sharedLayouts";
import { Button, Form, Radio, Select } from "antd";
import SpendingCard from "./spendingCard";
import { getAPI, postAPI } from "../../common/apiCommon";
import Filter from "./filter";
import AddCostForm from "./addCostForm";

export interface Spending {
  id: number;
  description: string;
  amount: number;
  spent_at: string;
  currency: string;
}

const SpendingsList: React.FC = () => {
  const [spendings, setSpendings] = React.useState<Spending[]>([]);
  const [order, setOrder] = React.useState("amount");
  const [currency, setCurrency] = React.useState();
  const [refresh, setRefresh] = React.useState(false);

  const updateSorting = (value: string) => {
    setOrder(value);
  };

  const callUpdateList = () => {
    setRefresh(!refresh);
  };

  React.useEffect(() => {
    getAPI("spendings", currency, order).then((res) => {
      if (res.status === 200) {
        setSpendings(res.data);
      } else {
        console.log(res);
      }
    });
  }, [order, currency, refresh]);

  return (
    <StyledContainer>
      <AddCostForm updateList={callUpdateList} />
      <Filter updateSorting={updateSorting} />
      {spendings.map((item) => (
        <SpendingCard item={item} key={item.id} />
      ))}
    </StyledContainer>
  );
};

export default SpendingsList;
