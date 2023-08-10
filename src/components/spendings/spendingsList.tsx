import React from "react";
import {
  FormContainer,
  StyledContainer,
  StyledInput,
  StyledInputNumber,
  StyledRadioButton,
} from "../shared/sharedLayouts";
import { Button, Form, Radio } from "antd";
import SpendingCard from "./spendingCard";
import { getAPI, postAPI } from "../../common/apiCommon";

export interface Spending {
  id: number;
  description: string;
  amount: number;
  spent_at: string;
  currency: string;
}

const SpendingsList: React.FC = () => {
  const testSpendings: Spending[] = [
    {
      id: 3,
      description: "Lunch",
      amount: 3200,
      currency: "HUF",
      spent_at: "2023-08-10T11:30:21.493Z",
    },
    {
      id: 5,
      description: "Ticket",
      amount: 20,
      currency: "USD",
      spent_at: "2023-08-10T11:30:21.493Z",
    },
  ];
  const [spendings, setSpendings] = React.useState(testSpendings);

  const onFinish = (values: any) => {
    // this could be updated with potential manually added date and time
    const currentTime = new Date();
    const data = {
      description: values.description,
      amount: values.amount,
      currency: values.currency,
      spent_at: currentTime.toISOString(),
    };
    console.log(data);
    postAPI("spendings", { ...data }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setSpendings(res.data);
      } else {
        console.log(res);
      }
    });
    // lets make a POST call with the values here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const getData = () =>
    getAPI("spendings").then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setSpendings(res.data);
      } else {
        console.log(res);
      }
    });

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <StyledContainer>
      <FormContainer onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please provide a description!" }]}
        >
          <StyledInput size="large" placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="amount"
          rules={[{ required: true, message: "Please provide the amount!" }]}
        >
          <StyledInputNumber size="large" placeholder="Amount" />
        </Form.Item>
        <Form.Item
          name="currency"
          rules={[{ required: true, message: "Please provide the currency!" }]}
        >
          <Radio.Group size="large">
            <StyledRadioButton value="USD">USD</StyledRadioButton>
            <StyledRadioButton value="HUF">HUF</StyledRadioButton>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </FormContainer>

      {spendings.map((item) => (
        <SpendingCard item={item} key={item.id} />
      ))}
    </StyledContainer>
  );
};

export default SpendingsList;
