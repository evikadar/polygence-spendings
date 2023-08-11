import React from "react";
import { Button, Select } from "antd";
import styled from "styled-components";
import { variables } from "../shared/variables";

export interface Props {
  updateSorting: (
    value: "spent_at" | "-spent_at" | "amount" | "-amount"
  ) => void;
}

const SelectionContainer = styled.div`
  display: flex;
  margin-bottom: ${variables.spacingM};
  justify-content: space-between;
`;

const Filter: React.FC<Props> = ({ updateSorting }) => {
  const handleDateRangeSelect = (
    value: "spent_at" | "-spent_at" | "amount" | "-amount"
  ) => {
    updateSorting(value);
  };

  return (
    <SelectionContainer>
      <Select
        defaultValue="spent_at"
        size="large"
        onChange={handleDateRangeSelect}
        options={[
          { value: "spent_at", label: "Sort by Date descending" },
          { value: "-spent_at", label: "Sort by Date ascending" },
          { value: "amount", label: "Sort by Amount descending" },
          { value: "-amount", label: "Sort by Amount ascending" },
        ]}
      />
      <div>
        <Button size="large">All</Button>
        <Button size="large">HUF</Button>
        <Button size="large">USD</Button>
      </div>
    </SelectionContainer>
  );
};

export default Filter;
