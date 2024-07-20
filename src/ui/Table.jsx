import styled from "styled-components";
import TransactionStatus from "./TransactionStatus";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const TableStyle = styled.div`
  width: 100%;
  overflow-x: scroll;
`;
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 30vh;
  overflow-y: scroll;
  background: var(--balance_background);
  border-radius: 0.5rem;
  @media (max-width: 660px) {
    width: 70rem;
  }
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
  @media (max-width: 660px) {
    width: ${(props) => props.type === "headRow" && "70rem"};
  }
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--black_text);
  font-weight: 600;
  @media (max-width: 941px) {
    font-size: ${(props) => props.type === "dash" && "1.8rem"};
  }
`;
const List = styled.span`
  font-size: 1.55rem;
  color: var(--black_text);
  font-weight: 300;
  width: ${(props) => (props.type === "sold" ? "25%" : "30%")};
`;

function Table({ tableHead, transaction, headers, tableData }) {
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);

  const header1 = ["Type", "Amount", "Date", "Status"];
  const header = sold
    ? ["Nft Name", "Amount", "Buyer", "Sales Commission"]
    : ["Nft Name", "Amount", "Seller"];
  return (
    <>
      <HeadBox>
        <Text type="dash">{tableHead}</Text>
        {transaction && (
          <TransactionStatus
            sold={sold}
            setSold={setSold}
            bought={bought}
            setBought={setBought}
            width="30%"
            transDetails="trans"
            text={{ first: "Sold", second: "Bought" }}
          />
        )}
      </HeadBox>
      <TableStyle>
        {tableData ? (
          <>
            <Row
              type="headRow"
              style={{
                background: "var(--bios_background)",
                borderBottom: "none",
                borderRadius: ".5rem",
              }}
            >
              {!headers
                ? header.map((val, ind) => (
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
                  ))
                : header1.map((val, ind) => (
                    <List
                      style={{
                        fontWeight: "500",
                        fontSize: "1.8rem",
                      }}
                      key={ind}
                    >
                      {val}
                    </List>
                  ))}
            </Row>
            <TableRow
              datas={tableData}
              Transaction={tableHead}
              sold={sold}
              bought={bought}
            />
          </>
        ) : (
          <Skeleton height={260} />
        )}
      </TableStyle>
    </>
  );
}

function TableRow({ sold, bought, datas, Transaction }) {
  return (
    <>
      {Transaction !== "Transaction" ? (
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
                <List style={{}} type="bought">
                  {val?.nft?.name}
                </List>
                <List type="bought">{val?.amount}</List>
                <List type="bought">{val?.seller?.username}</List>
              </Row>
            ))}
        </TableBox>
      ) : (
        <TableBox>
          {datas?.wallet?.transactions?.map((val, ind) => (
            <Row key={ind}>
              <List
                style={{
                  color: `${
                    val?.transaction === "deposite"
                      ? "var(--paid_text)"
                      : val?.transaction === "withdraw"
                      ? "var(--error_text)"
                      : val?.transaction === "mint"
                      ? "var(--error_text)"
                      : val?.transaction === "sales-bonus"
                      ? "var(--paid_text)"
                      : "var(--error_text)"
                  }`,
                }}
                type="sold"
              >
                {val?.transaction === "deposite" ? "deposit" : val?.transaction}
              </List>
              <List type="sold">{val?.amount}</List>
              <List type="sold">
                {val?.date?.split("").splice(0, 10).join("")}
              </List>
              <List
                style={{
                  color: `${
                    val?.status === "completed"
                      ? "var(--paid_text)"
                      : val?.status === "pending"
                      ? "#e69d00"
                      : val?.status === "failed"
                      ? "var(--error_text)"
                      : "var(--error_text)"
                  }`,
                }}
                type="sold"
              >
                {val?.status}
              </List>
            </Row>
          ))}
        </TableBox>
      )}
    </>
  );
}

export default Table;
