import styled from "styled-components";
import Button from "./Button";
import ToggleBtn from "./ToggleBtn";
import useEditNft from "../hooks/useEditNft";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setOverlay } from "../Slices/overLaySlice";

const EditNftStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 40rem;
  padding: 3rem 4rem;
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
  width: 40%;
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
  gap: 2rem;
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 1rem 0 0;
  border: 1px solid var(--light_faint);
`;
const CloseMenu = styled.div`
  position: absolute;
  top: 3%;
  left: 3%;
  cursor: pointer;
`;
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};

function EditNft() {
  const {
    register,
    handleSubmit,
    handleError,
    handleEditNftSubmit,
    isLoading,
    on,
    setOn,
  } = useEditNft();
  const dispatch = useDispatch();

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
      <Form onSubmit={handleSubmit(handleEditNftSubmit, handleError)}>
        <Column>
          <Label htmlFor="priceInEtherium">Price</Label>
          <Input
            id="priceInEtherium"
            type="text"
            {...register("priceInEtherium")}
          />
          <Text style={{ alignSelf: "end" }}>Min: 0.02 ETH</Text>
        </Column>
        <Column style={{ marginTop: "-2.2rem" }}>
          <Label htmlFor="category">Category</Label>
          <Select {...register("category")}>
            <Option value="gaming">Gaming</Option>
            <Option value="photography">photography</Option>
            <Option value="arts">Arts</Option>
            <Option value="exhibition">Exhibition</Option>
            <Option value="membership">Membership</Option>
            <Option value="PFPS">PFPS</Option>
          </Select>
        </Column>
        <Column>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows="5"
            type="text"
            {...register("description")}
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
          onSubmit={handleSubmit(handleEditNftSubmit, handleError)}
          padding=".8rem 1.5rem"
          width="100%"
          background="true"
          font="2rem"
          color="var(--white_text)"
        >
          {isLoading ? "Loading..." : "Edit"}
        </Button>
      </Form>
      <CloseMenu onClick={() => dispatch(setOverlay(false))}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </EditNftStyle>
  );
}

export default EditNft;
