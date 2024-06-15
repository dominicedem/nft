import styled from "styled-components";

const TableStyle = styled.div`
  width: 100%;
`;
const TableBox = styled.div`
  display: flex;
`;
function Table() {
  return (
    <TableStyle>
      <TableBox></TableBox>
    </TableStyle>
  );
}

export default Table;
