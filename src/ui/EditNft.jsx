import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import TransactionStatus from "./TransactionStatus";
import ToggleBtn from "./ToggleBtn";

const EditNftStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 40rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  position: relative;
  background: var(--appbackgroundcolor);
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--sideBar_text);
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;
const Label = styled.label`
  font-size: 1.8rem;
  color: var(--sideBar_text);
`;
const Input = styled.input`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const Textarea = styled.textarea`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const Select = styled.select`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;
const Option = styled.option`
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;
const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 1rem 0 0;
  border: 1px solid var(--light_faint);
`;

function EditNft() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [on, setOn] = useState(true);
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <EditNftStyle>
      <Text
        style={{
          fontSize: "1.8rem",
          fontWeight: "600",
          alignSelf: "center",
          color: "var(--profile_text)",
        }}
      >
        Edit NFT
      </Text>
      <Text
        style={{ fontSize: "2rem", fontWeight: "700", alignSelf: "center" }}
      >
        Exhibition King
      </Text>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Column>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={price}
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Text style={{ alignSelf: "end" }}>Min: 0.02 ETH</Text>
        </Column>
        <Column>
          <Label>Category</Label>
          <Select onChange={(e) => setCategory(e.target.value)}>
            <Option value="gaming">Gaming</Option>
            <Option value="all">All</Option>
            <Option value="art">Art</Option>
            <Option value="exhibition">Exhibition</Option>
          </Select>
        </Column>
        <Column>
          <Label htmlFor="des">Description</Label>
          <Textarea
            id="des"
            rows="5"
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Column>
        <Column>
          <Row style={{ background: "none", border: "none" }}>
            <Text
              style={{ margin: "0", fontSize: "1.8rem", fontWeight: "700" }}
            >
              Push to market
            </Text>
            <ToggleBtn on={on} setOn={setOn} />
          </Row>
          <Text style={{ marginTop: "0.5rem" }}>
            this makes your Nft visible to buyers in the platform
          </Text>
        </Column>
        <Button
          onSubmit={(e) => handleSubmit(e)}
          padding=".8rem 1.5rem"
          width="100%"
          background="true"
          font="2rem"
          color="var(--white_text)"
        >
          Mint
        </Button>
      </Form>
    </EditNftStyle>
  );
}

export default EditNft;
