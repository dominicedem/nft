import styled from "styled-components";
import { CiFileOn } from "react-icons/ci";
import Button from "../ui/Button";
import { useState } from "react";
import MintStatus from "../ui/MintStatus";

const MintBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
  background: var(--subtle_background);
`;
const MintModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  position: relative;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background: var(--balance_background);
  padding: 3rem 4.5rem;
  border: 1px solid var(--border);
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
  width: 25%;
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
const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay_background);
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  width: 18rem;
  height: 20rem;
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 1rem;
`;

const iconStyle = {
  width: "5rem",
  height: "5rem",
  color: "var(--sideBar_text)",
  cursor: "pointer",
};
function Mint() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [overlay, setOverlay] = useState(true);
  const [file, setFile] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
    console.log(e.target.className.split(" ").includes("overlay"));
  }
  return (
    <MintBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Mint</Text>
      <MintModalStyle>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Column style={{ alignItems: "center" }}>
            <Label htmlFor="file">
              {file?.name ? (
                <Img src={`/${file.name}`} />
              ) : (
                <ImageBox>
                  <Text>Upload file</Text>
                  <CiFileOn style={iconStyle} />
                </ImageBox>
              )}
              <Input
                id="file"
                // style={{ width: "inherit" }}
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className="hideFileUpload"
              />
            </Label>
          </Column>
          <Column>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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
            <Label>Category</Label>
            <Select onChange={(e) => setCategory(e.target.value)}>
              <Option value="gaming">Gaming</Option>
              <Option value="all">All</Option>
              <Option value="art">Art</Option>
              <Option value="exhibition">Exhibition</Option>
            </Select>
          </Column>
          <Column>
            <Label htmlFor="price">Floor Price</Label>
            <Row>
              <Input
                style={{ fontWeight: "700" }}
                id="price"
                value={price}
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Text style={{ fontWeight: "700", fontSize: "1.6rem" }}>ETH</Text>
            </Row>
          </Column>
          <Text style={{ margin: "-2rem 0 2rem 0" }}>min 0.02 ETH</Text>
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
        <Text>Minting fee of 0.2 ETH is required to mint an Nft</Text>
        {overlay && (
          <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
            <MintStatus status="true" />
          </Overlay>
        )}
      </MintModalStyle>
    </MintBox>
  );
}

export default Mint;
