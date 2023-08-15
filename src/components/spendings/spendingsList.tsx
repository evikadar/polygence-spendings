import React from "react";
import { StyledContainer } from "../shared/sharedLayouts";
import SpendingCard from "./spendingCard";
import { getAPI } from "../shared/apiCommon";
import Filter from "./filter";
import AddCostForm from "./addCostForm";
import Title from "antd/es/typography/Title";
import { variables } from "../shared/variables";

export interface Spending {
  id: number;
  description: string;
  amount: number;
  spent_at: string;
  currency: string;
}

export type Currency = "USD" | "HUF" | undefined;

const SpendingsList: React.FC = () => {
  const [spendings, setSpendings] = React.useState<Spending[]>([]);
  const [order, setOrder] = React.useState("amount");
  const [currency, setCurrency] = React.useState<Currency>();
  const [refresh, setRefresh] = React.useState(false);

  const updateSorting = (value: string) => {
    setOrder(value);
  };

  const updateCurrency = (value?: Currency) => {
    setCurrency(value);
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
      <Title style={{ margin: `0 auto ${variables.spacingL}` }} level={3}>
        Your Spendings
      </Title>
      <AddCostForm updateList={callUpdateList} />
      <Filter
        updateSorting={updateSorting}
        updateCurrency={updateCurrency}
        currency={currency}
      />
      {spendings.map((item) => (
        <SpendingCard item={item} key={item.id} />
      ))}
    </StyledContainer>
  );
};

export default SpendingsList;
