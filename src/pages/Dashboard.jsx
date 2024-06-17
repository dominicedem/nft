import styled from "styled-components";
import AccountBalance from "../ui/AccountBalance";
import DashCards from "../ui/DashCards";
import Table from "../ui/Table";

const DashboardStyle = styled.div`
  height: 100%;
  padding: 0 1.5rem 8rem 1.5rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const DashCardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableBox = styled.div`
  width: 100%;
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
      <DashCardBox>
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
