import React from "react";
import { Button, Form, Radio, Select } from "antd";
import styled from "styled-components";
import { variables } from "../shared/variables";
import { postAPI } from "../../common/apiCommon";
import {
  FormContainer,
  StyledInput,
  StyledInputNumber,
  StyledRadioButton,
} from "../shared/sharedLayouts";

interface Props {
  updateList: () => void;
}

const AddCostForm: React.FC<Props> = ({ updateList }) => {
  const onFinish = (values: any) => {
    // this could be updated with potential manually added date and time
    const currentTime = new Date();
    const data = {
      description: values.description,
      amount: values.amount,
      currency: values.currency,
      spent_at: currentTime.toISOString(),
    };
    postAPI("spendings", { ...data }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        updateList();
      } else {
        console.log(res);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
  );
};

export default AddCostForm;
