import styled from "styled-components";
import AccountBalance from "../ui/AccountBalance";
import DashCards from "../ui/DashCards";
import Table from "../ui/Table";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import EditNft from "../ui/EditNft";
import { useDispatch, useSelector } from "react-redux";
import { setOverlay } from "../Slices/overLaySlice";
import useReloadPage from "../hooks/useReloadPage";

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
const linkStyle = {
  color: " var(--sideBar_text)",
  textDecoration: "none",
  width: "90%",
};
function Dashboard() {
  const dispatch = useDispatch();
  const { overlay } = useSelector((state) => state.overlayData);
  const { userData } = useSelector((state) => state.authData);
  const { isLoading } = useReloadPage();

  console.log(userData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setOverlay(false));
  }

  return (
    <DashboardStyle>
      <AccountBalance />
      <Column style={{ alignItems: "center", gap: "1.5rem" }}>
        <Link style={linkStyle} to="Deposit">
          <Button
            padding="1.2rem 1.5rem"
            width="90%"
            background="true"
            font="1.6rem"
            color="var(--white_text)"
          >
            Deposit
          </Button>
        </Link>
        <Link style={linkStyle} to="mint">
          <Button
            border="1px solid var(--inputField_border)"
            padding="1.2rem 1.5rem"
            width="90%"
            font="1.6rem"
            color="var(--black_text)"
          >
            Mint
          </Button>
        </Link>
        <Link style={linkStyle} to="withdraw">
          <Button
            border="1px solid var(--inputField_border)"
            padding="1.2rem 1.5rem"
            width="90%"
            font="1.6rem"
            color="var(--black_text)"
          >
            Withdraw
          </Button>
        </Link>
      </Column>
      <DashCardBox style={{ marginTop: "" }}>
        <DashCards
          data={userData?.myNft?.slice(0, 4)}
          header="NFT"
          Edit="true"
          profile="true"
          defaultCard="true"
          move="translateX(-230%)"
          textdata={
            userData?.myNft?.slice(0, 4).length < 1 && "No nft available"
          }
        />
      </DashCardBox>
      <TableBox id="transaction">
        <Table
          tableHead="Transaction"
          header={["Type", "Amount", "Date", "Status"]}
        />
      </TableBox>
      <DashCardBox>
        <DashCards
          data={userData?.myExhibition?.slice(0, 4)}
          header="Exhibition"
          profile="true"
          Exhibition="true"
          move="translateX(120%)"
          textdata={
            userData?.myExhibition?.slice(0, 4).length < 1 &&
            "No Exhibition available"
          }
        />
      </DashCardBox>
      <TableBox id="nftTransaction">
        <Table
          tableHead="NFT Transactions"
          transaction="true"
          tableData={userData}
        />
      </TableBox>
      {overlay && (
        <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
          <EditNft />
        </Overlay>
      )}
    </DashboardStyle>
  );
}

export default Dashboard;
