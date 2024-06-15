import styled from "styled-components";
import AccountBalance from "../ui/AccountBalance";
import DashCards from "../ui/DashCards";

const DashboardStyle = styled.div`
  height: 100%;
  padding: 2.5rem 1.5rem;
  overflow-y: scroll;
`;
const DashCardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
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
        <DashCards />
      </DashCardBox>
    </DashboardStyle>
  );
}

export default Dashboard;
