import React from "react";
import { Button, Select } from "antd";
import styled from "styled-components";
import { variables } from "../shared/variables";
import { FormContainer } from "../shared/sharedLayouts";
import { Currency } from "./spendingsList";

export interface Props {
  updateSorting: (
    value: "spent_at" | "-spent_at" | "amount" | "-amount"
  ) => void;
  updateCurrency: (value: Currency) => void;
  currency?: Currency;
}

const SelectionContainer = styled.div`
  display: flex;
  margin-bottom: ${variables.spacingM};
  justify-content: space-between;
`;

const Filter: React.FC<Props> = ({
  updateSorting,
  updateCurrency,
  currency,
}) => {
  const handleDateRangeSelect = (
    value: "spent_at" | "-spent_at" | "amount" | "-amount"
  ) => {
    updateSorting(value);
  };

  const handleCurrencySelect = (value: Currency) => {
    updateCurrency(value);
  };

  return (
    <SelectionContainer>
      <Select
        defaultValue="-spent_at"
        size="large"
        onChange={handleDateRangeSelect}
        options={[
          { value: "-spent_at", label: "Sort by Date descending" },
          { value: "spent_at", label: "Sort by Date ascending" },
          { value: "-amount", label: "Sort by Amount descending" },
          { value: "amount", label: "Sort by Amount ascending" },
        ]}
      />
      <FormContainer>
        {/* todo: these buttons could get a component as an improvement */}
        <Button
          style={{
            backgroundColor:
              currency === undefined ? variables.lightGray : "inherit",
          }}
          onClick={() => handleCurrencySelect(undefined)}
          size="large"
        >
          All
        </Button>
        <Button
          style={{
            backgroundColor:
              currency === "HUF" ? variables.lightGray : "inherit",
          }}
          onClick={() => handleCurrencySelect("HUF")}
          size="large"
        >
          HUF
        </Button>
        <Button
          style={{
            backgroundColor:
              currency === "USD" ? variables.lightGray : "inherit",
          }}
          onClick={() => handleCurrencySelect("USD")}
          size="large"
        >
          USD
        </Button>
      </FormContainer>
    </SelectionContainer>
  );
};

export default Filter;
