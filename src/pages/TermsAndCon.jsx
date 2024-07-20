import styled from "styled-components";
import Navigation from "../ui/Navigation";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenMenu } from "../Slices/MenuBar";
import MenuBar from "../ui/MenuBar";
const TermsAndConStyle = styled.div`
  width: 99.5vw;
  background: var(--subtle_background);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#0007, #0007), url("/hero.jpg");
  background-size: cover;
  background-position: 50% 30%;
  width: 100%;
  height: 30rem;
  padding-top: 5rem;
  @media (max-width: 1100px) {
    background-position: 50% 42%;
  }
`;

const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  z-index: 100;
  background: var(--appbackgroundcolor);
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;
  width: 70%;
  margin: 0 auto;
  padding: 6rem 0;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
`;
const MenuBtn = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 2%;
    right: 4%;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border-radius: 0.5rem;
    z-index: 100;
    cursor: pointer;
    background: var(--light_faint);
  }
`;
const List = styled.span`
  line-height: 1.38;
  font-size: ${(props) =>
    props.type === "subhead"
      ? "2.8rem"
      : props.type === "head"
      ? "4.5rem"
      : "1.8rem"};
  color: ${(props) =>
    props.type === "head"
      ? "var(--appbackgroundcolor)"
      : "var(--sideBar_text)"};
  letter-spacing: 0.07rem;
  @media (max-width: 525px) {
    font-size: ${(props) =>
      props.type === "subhead"
        ? "2.6rem"
        : props.type === "head"
        ? "4rem"
        : "1.6rem"};
  }
  @media (max-width: 400px) {
    font-size: ${(props) =>
      props.type === "subhead"
        ? "2.4rem"
        : props.type === "head"
        ? "3.5rem"
        : "1.4rem"};
  }
`;
const MenuBarStyle = styled.div`
  z-index: 10;
  transition: all 0.5s;
  height: 100vh;
  width: 99.5vw;
`;
const menuStyle = {
  width: "2.4rem",
  height: "2.4rem",
  color: "var(--sideBar_text)",
};
function TermsAndCon() {
  const { isOpenMenu } = useSelector((state) => state.menuData);
  const dispatch = useDispatch();
  return (
    <TermsAndConStyle id="top">
      <NavStyle>
        <Navigation className={"adapt"} />
      </NavStyle>
      <MenuBarStyle
        className={isOpenMenu ? "activeMobileMenu" : "inActiveMobileMenu"}
      >
        <MenuBar />
      </MenuBarStyle>
      <Header>
        <List type="head">Terms and Conditions</List>
        <List style={{ fontSize: "2.5rem" }} type="head">
          Please read carefully
        </List>
      </Header>
      <Content>
        <List>
          Welcome to Artmetavault. These Terms and Conditions govern your use of
          the Website, including the purchase, sale, and trading of NFTs. By
          using the website, you agree to these terms. Please read them
          carefully.
        </List>
        <Column>
          <List type="subhead">1. Account Creation</List>
          <List>
            To use certain features of the website, you may need to create an
            account. You agree to provide accurate, complete, and current
            information when registering and to update such information as
            needed.
          </List>
          <List>
            1.2. You are responsible for maintaining the confidentiality of your
            account information, including your password. You are responsible
            for all activities that occur under your account.
          </List>
        </Column>
        <Column>
          <List type="subhead">2. Buying and Selling NFTs</List>
          <List>2.1. Users may buy, sell, and trade NFTs on the Website.</List>
          <List>2.2. The Website charges the following fees:</List>
          <List style={{ marginTop: "-1rem" }}>
            a. Fees and Payments: Artmetavault imposes a minting fee of 0.1ETH
            per new art piece or item listed. Additionally, a 5% commission in
            ETH is levied on all NFT sales. It's the seller's responsibility to
            comprehend the fees linked to each transaction. Secure payment
            processing for NFT purchases is facilitated through our designated
            payment processor
          </List>
          <List>
            b. Tax Fee: Depending on your jurisdiction, you may be subject to
            tax on your NFT transactions. It is your responsibility to
            understand and comply with tax regulations applicable to your
            jurisdiction.
          </List>
          <List>
            C. If it is determined that you have stolen artwork and attempted to
            sell it on this platform, your assets will be temporarily suspended
            until you can provide proof of ownership.
          </List>
        </Column>
        <Column>
          <List type="subhead">3. Ownership and Licensing</List>
          <List>
            3.1. Ownership of NFTs is recorded on the blockchain. The website
            does not take ownership of NFTs listed on the platform.
          </List>
          <List>
            3.2. When you purchase an NFT, you are granted a non-exclusive,
            non-transferable license to use, display, and transfer the NFT for
            personal, non-commercial purposes, subject to these Terms.
          </List>
        </Column>
        <Column>
          <List type="subhead">4. Prohibited Activities</List>
          <List>
            4.1. You agree not to engage in any of the following activities on
            the website:
          </List>
          <List style={{ marginTop: "-1rem" }}>
            a. Violate any applicable laws or regulations.
          </List>
          <List>
            b. Infringe upon the intellectual property rights of others.
          </List>
          <List>
            c. Attempt to manipulate or defraud the website or its users.
          </List>
        </Column>
        <Column>
          <List type="subhead">5. Termination</List>
          <List>
            5.1. The Website reserves the right to suspend or terminate your
            account if you violate these Terms or engage in any fraudulent or
            illegal activities.
          </List>
        </Column>
        <Column>
          <List type="subhead">6. Disclaimer of Warranties</List>
          <List>
            6.1. The website is provided "as is" and "as available." We make no
            warranties regarding the accuracy, reliability, or availability of
            the Website.
          </List>
        </Column>
        <Column>
          <List type="subhead">7. Limitation of Liability</List>
          <List>
            7.1. To the fullest extent permitted by law, we shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to your use of the Website.
          </List>
        </Column>
        <Column>
          <List type="subhead">8. Changes to Terms</List>
          <List>
            8.1. We may update these terms from time to time. Any changes will
            be posted on the website, and your continued use of the website
            after such changes constitutes acceptance of the revised terms.
          </List>
        </Column>
        <List>
          For any questions or concerns, please contact our support team.
        </List>
      </Content>
      <MenuBtn onClick={() => dispatch(setIsOpenMenu())}>
        {isOpenMenu ? (
          <AiOutlineClose style={menuStyle} />
        ) : (
          <SlMenu style={menuStyle} />
        )}
      </MenuBtn>
    </TermsAndConStyle>
  );
}

export default TermsAndCon;
