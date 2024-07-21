import styled from "styled-components";
import Navigation from "../ui/Navigation";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenMenu } from "../Slices/MenuBar";
import MenuBar from "../ui/MenuBar";
import useReloadPage from "../hooks/useReloadPage";
import useAuthenticate from "../hooks/useAuthenticate";
const AboutUsStyle = styled.div`
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
  height: 27rem;
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
  width: 90%;
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
function Privacy() {
  const { isOpenMenu } = useSelector((state) => state.menuData);
  const dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.authData);
  // const { isLoading } = useReloadPage();
  // const { storage } = useAuthenticate();
  const companyName = "Companyname";
  return (
    <AboutUsStyle id="top">
      <NavStyle>
        <Navigation className={"adapt"} />
      </NavStyle>
      <MenuBarStyle
        className={isOpenMenu ? "activeMobileMenu" : "inActiveMobileMenu"}
      >
        <MenuBar />
      </MenuBarStyle>
      <Header>
        <List type="head">Privacy Policy</List>
        <List style={{ fontSize: "2.5rem" }} type="head">
          Please read carefully
        </List>
      </Header>
      <Content>
        <List>
          This Privacy Policy explains how companyName ("we," "us," or "our")
          collects, uses, shares, and safeguards your personal information when
          you use our NFT marketplace platform, companyName (the "Platform"). We
          are dedicated to protecting your privacy and ensuring the security of
          your personal information. By using the Platform, you agree to the
          collection, use, and disclosure of your personal information as
          described in this Privacy Policy.
        </List>
        <Column>
          <List type="subhead">1. Information We Collect</List>
          <List>1.1 Personal Information</List>
          <List>
            We may collect personal information that you provide while using the
            Platform, including but not limited to your name, email address,
            contact details, and payment information. Additionally, we may
            collect data regarding your transactions and interactions on the
            Platform, such as the NFTs you create, buy, or sell, your browsing
            activities, and communications with other users.
          </List>
          <List>1.2 Non-Personal Information</List>
          <List>
            We may automatically gather non-personal information when you access
            and use the Platform, such as your IP address, device information,
            browser type, and operating system. This data helps us analyze
            trends, manage the Platform, and track users’ movements on the
            Platform.
          </List>
        </Column>
        <Column>
          <List type="subhead">2. Use of Information</List>
          <List>2.1 Personal Information</List>
          <List>We may use your personal information to:</List>
          <List>
            Provide and enhance the Platform's functionality, features, and user
            experience. Process and complete your transactions, including buying
            and selling NFTs. Communicate with you about your account,
            transactions, updates, and security notices. Send you promotional
            and marketing materials (only if you have opted to receive such
            communications). Address your inquiries, comments, or feedback.
          </List>
          <List>2.2 Prohibited Content</List>
          <List style={{ marginTop: "-1rem" }}>
            companyName strictly prohibits the listing or trading of NFTs that
            are illegal, fraudulent, offensive, infringe on intellectual
            property rights, or violate these Terms and Conditions. You may not
            list NFTs that contain explicit or adult content, promote hate
            speech, or engage in any form of illegal activity. companyName
            reserves the right to remove any content that violates these
            guidelines and may take appropriate action, including suspending or
            terminating the accounts of users who repeatedly violate these
            rules.
          </List>
        </Column>
        <Column>
          <List type="subhead">3. Sharing of Information</List>
          <List>3.1 Service Providers</List>
          <List>
            We may share your personal information with trusted third-party
            service providers who assist us in operating, maintaining, and
            improving the Platform. These service providers are contractually
            obligated to handle your personal information securely and use it
            only for the purposes specified by us.
          </List>
          <List>3.2 Compliance with Laws</List>
          <List>
            We may disclose your personal information if required by law or in
            response to valid legal requests, such as court orders or subpoenas.
          </List>
          <List>3.3 Business Transfers</List>
          <List>
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your personal information may be transferred to the
            acquiring entity or successor.
          </List>
          <List>3.4 Consent</List>
          <List>
            We may share your personal information with third parties if you
            have provided your explicit consent for such disclosure.
          </List>
        </Column>
        <Column>
          <List type="subhead">4. Data Security</List>
          <List>
            We take reasonable measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
            However, please note that no method of internet transmission or
            electronic storage is entirely secure. We cannot guarantee the
            absolute security of your information.
          </List>
        </Column>
        <Column>
          <List type="subhead">5. Third-Party Links</List>
          <List>
            The Platform may include links to third-party websites or services.
            We are not responsible for the privacy practices or the content of
            these third-party sites or services. We recommend that you review
            the privacy policies of those third parties when accessing their
            websites or using their services.
          </List>
        </Column>
        <Column>
          <List type="subhead">6. Changes to the Privacy Policy</List>
          <List>
            We may update this Privacy Policy periodically. We will inform you
            of any significant changes by posting the updated Privacy Policy on
            the Platform or through other means. Please review this Privacy
            Policy regularly for any updates.
          </List>
        </Column>
        <Column>
          <List type="subhead">7. Contact Us</List>
          <List>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us. We will
            make every effort to address your inquiries promptly.
          </List>
        </Column>
        <List style={{ marginTop: "5rem" }}>
          By using the companyName platform, you acknowledge that you have read,
          understood, and agree to the terms and conditions of
          this Privacy Policy.
        </List>
      </Content>
      <MenuBtn onClick={() => dispatch(setIsOpenMenu())}>
        {isOpenMenu ? (
          <AiOutlineClose style={menuStyle} />
        ) : (
          <SlMenu style={menuStyle} />
        )}
      </MenuBtn>
    </AboutUsStyle>
  );
}

export default Privacy;
