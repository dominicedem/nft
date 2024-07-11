import styled from "styled-components";
import TransactionStatus from "./TransactionStatus";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const TableStyle = styled.div`
  width: 100%;
`;
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 30vh;
  overflow-y: scroll;
  background: var(--balance_background);
  border-radius: 0.5rem;
`;
const HeadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 3rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0 1.5rem 4rem;
  border-bottom: 0.1rem solid var(--tertiary_text_faint);
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--black_text);
  font-weight: 600;
`;
const List = styled.span`
  font-size: 1.55rem;
  color: var(--black_text);
  font-weight: 300;
  width: ${(props) => (props.type === "sold" ? "25%" : "30%")};
`;

const data = [
  {
    Nftname: "Deposit",
    amount: "2 ETH",
    date: "02/21/24",
    status: "completed",
  },
  {
    Nftname: "Withdrawal",
    amount: "4 ETH",
    date: "02/21/24",
    status: "notCompleted",
  },
  {
    Nftname: "Withdrawal",
    amount: "6 ETH",
    date: "02/21/24",
    status: "completed",
  },
  {
    Nftname: "Deposit",
    amount: "5 ETH",
    date: "02/21/24",
    status: "notCompleted",
  },
  {
    Nftname: "withdrawal",
    amount: "1 ETH",
    date: "02/21/24",
    status: "completed",
  },
  {
    Nftname: "Deposit",
    amount: "9 ETH",
    date: "02/21/24",
    status: "completed",
  },
  {
    Nftname: "withdrawal",
    amount: "8 ETH",
    date: "02/21/24",
    status: "notCompleted",
  },
];
const datass = [
  {
    Nftname: "Deposit",
    amount: "2 ETH",
    seller: "D Dom 😎",
  },
  {
    Nftname: "Withdrawal",
    amount: "4 ETH",
    seller: "Agbara",
  },
  {
    Nftname: "Withdrawal",
    amount: "6 ETH",
    seller: "Augustin",
  },
  {
    Nftname: "Deposit",
    amount: "5 ETH",
    seller: "Izundu",
  },
  {
    Nftname: "withdrawal",
    amount: "1 ETH",
    seller: "Okomodu",
  },
  {
    Nftname: "Deposit",
    amount: "9 ETH",
    seller: "Chukwueze",
  },
  {
    Nftname: "withdrawal",
    amount: "8 ETH",
    seller: "Anything",
  },
];
function Table({ tableHead, transaction, data, tableData }) {
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);
  const header = sold
    ? ["Nft Name", "Amount", "Buyer", "Sales Commission"]
    : ["Nft Name", "Amount", "Seller"];
  return (
    <TableStyle>
      <HeadBox>
        <Text>{tableHead}</Text>
        {transaction && (
          <TransactionStatus
            sold={sold}
            setSold={setSold}
            bought={bought}
            setBought={setBought}
            width="20%"
            text={{ first: "Sold", second: "Bought" }}
          />
        )}
      </HeadBox>
      {tableData ? (
        <>
          <Row
            style={{
              background: "var(--bios_background)",
              borderBottom: "none",
              borderRadius: ".5rem",
            }}
          >
            {header.map((val, ind) => (
              <List
                style={{
                  fontWeight: "500",
                  fontSize: "1.8rem",
                  width: `${ind === 3 && "40%"}`,
                }}
                key={ind}
              >
                {val}
              </List>
            ))}
          </Row>
          <TableRow datas={tableData} sold={sold} bought={bought} />
        </>
      ) : (
        <Skeleton height={260} />
      )}
    </TableStyle>
  );
}

function TableRow({ sold, bought, datas }) {
  return (
    <TableBox>
      {sold &&
        datas?.soldNft?.map((val, ind) => (
          <Row key={ind}>
            <List type="sold">{val?.nft?.name}</List>
            <List type="sold">{val?.amount}</List>
            <List type="sold">{val?.buyer?.username}</List>
            <List
              type="sold"
              style={{
                width: "32%",
                color: `${
                  val.salesCommision === "paid"
                    ? "var(--paid_text)"
                    : "var(--error_text)"
                }`,
              }}
            >
              {val.salesCommision}
            </List>
          </Row>
        ))}
      {bought &&
        datas?.boughtNft?.map((val, ind) => (
          <Row key={ind}>
            <List type="bought">{val?.nft?.name}</List>
            <List type="bought">{val?.amount}</List>
            <List type="bought">{val?.seller?.username}</List>
          </Row>
        ))}
    </TableBox>
  );
}

export default Table;
