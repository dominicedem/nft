import styled from "styled-components";
import TransactionStatus from "./TransactionStatus";
import { useState } from "react";

const TableStyle = styled.div`
  width: 100%;
`;
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 30vh;
  overflow-y: scroll;
`;
const HeadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 1rem 4rem;
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
  width: 25%;
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
function Table({ tableHead, transaction, header }) {
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);
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
          />
        )}
      </HeadBox>
      <Row
        style={{
          background: "var(--light_faint)",
          borderBottom: "none",
          borderRadius: ".5rem",
        }}
      >
        {header.map((val, ind) => (
          <List style={{ fontWeight: "500", fontSize: "1.8rem" }} key={ind}>
            {val}
          </List>
        ))}
      </Row>
      <TableRow />
    </TableStyle>
  );
}

function TableRow() {
  return (
    <TableBox>
      {data.map((val, ind) => (
        <Row key={ind}>
          <List>{val.Nftname}</List>
          <List>{val.amount}</List>
          <List>{val.date}</List>
          <List>{val.status}</List>
        </Row>
      ))}
    </TableBox>
  );
}

export default Table;
