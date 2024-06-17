import styled from "styled-components";
import AccountBalance from "../ui/AccountBalance";
import DashCards from "../ui/DashCards";
import Table from "../ui/Table";
import Button from "../ui/Button";

const DashboardStyle = styled.div`
  height: 100%;
  padding: 0 4.5rem 8rem 4.5rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
const DashCardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableBox = styled.div`
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  width: 100%;
  margin-top: -5rem;
`;
const data = [
  {
    types: "Nft",
  },
];
function Dashboard() {
  return (
    <DashboardStyle>
      <AccountBalance />
      <Column style={{ alignItems: "center", gap: "1.5rem" }}>
        <Button
          padding="1.2rem 1.5rem"
          width="90%"
          background="true"
          font="1.6rem"
          color="var(--white_text)"
        >
          Deposit
        </Button>
        <Button
          border="1px solid var(--inputField_border)"
          padding="1.2rem 1.5rem"
          width="90%"
          font="1.6rem"
          color="var(--black_text)"
        >
          Mint
        </Button>
        <Button
          border="1px solid var(--inputField_border)"
          padding="1.2rem 1.5rem"
          width="90%"
          font="1.6rem"
          color="var(--black_text)"
        >
          Withdraw
        </Button>
      </Column>
      <DashCardBox style={{ marginTop: "" }}>
        <DashCards header="NFT" Edit="true" profile="true" defaultCard="true" />
      </DashCardBox>
      <TableBox>
        <Table
          tableHead="Transaction"
          header={["Type", "Amount", "Date", "Status"]}
        />
      </TableBox>
      <DashCardBox>
        <DashCards header="Exhibition" profile="true" Exhibition="true" />
      </DashCardBox>
      <TableBox>
        <Table
          tableHead="NFT Transactions"
          transaction="true"
          header={["Type", "Amount", "Date", "Status"]}
        />
      </TableBox>
    </DashboardStyle>
  );
}

export default Dashboard;
