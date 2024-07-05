import { useState } from "react";
import styled from "styled-components";
import WithdrawStatus from "../ui/WithdrawStatus";
import TransactionStatus from "../ui/TransactionStatus";
import Button from "../ui/Button";
import Internal from "../ui/Internal";
import PasteToClip from "../ui/PasteToClip";
import { useSelector } from "react-redux";
import useSignUp from "../hooks/useSignUp";
import Loading from "./Loading";
import useFetchCommission from "../hooks/useFetchCommission";
import FetchCommission from "../services/FetchCommission";

const WithdrawalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
`;
const WithdrawalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 3rem 5rem 3rem;
  border-radius: 1rem;
  background: var(--subtle_background);
  border: 1px solid var(--inputField_border);
  position: relative;
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

const Text = styled.span`
  display: flex;
  align-items: end;
  gap: 0.2rem;
  font-size: 1.4rem;
  color: var(--sideBar_text);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--light_faint);
  padding: 0.3rem 1rem 0.3rem 1rem;
  border-radius: 0.8rem;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;
const Input = styled.input`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const TransactionStatusBox = styled.div`
  width: 100%;
`;
const Select = styled.select`
  width: 100%;
  padding: 1.1rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: var(--sideBar_text);
  background: inherit;
  border: none;
`;
const Option = styled.option`
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  border-radius: 1rem;
`;
const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  background: var(--overlay_background);
  z-index: 10000;
`;
const ErrorText = styled.span`
  font-size: 1.4rem;
  color: var(--error_text);
  width: 100%;
  height: 1.5rem;
`;
function Withdrawal() {
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);

  const {
    register,
    getValues,
    errors,
    isBlur,
    successOverlay,
    setSuccessOverlay,
    handleWithdrawSubmit,
    handleError,
    handleSubmit,
    overlay,
    setOverlay,
    commissionOverlay,
    category,
    setCategory,
    setCommissionOverlay,
    validateOverlay,
    setValidateOverlay,
    handleInternalWithdrawSubmit,
  } = useSignUp();
  const { userData } = useSelector((state) => state.authData);
  let isPayCommision = "";

  // console.log(errors);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
    e.target.className.split(" ").includes("commissionOverlay") &&
      setCommissionOverlay(false);
    e.target.className.split(" ").includes("validateOverlay") &&
      setValidateOverlay(false);
    e.target.className.split(" ").includes("successOverlay") &&
      setSuccessOverlay(false);
  }

  function setPaymentFailState() {
    setCommissionOverlay(false);
    setValidateOverlay(false);
    setSuccessOverlay(false);
    setOverlay(true);
  }

  function setPaymentSuccessState() {
    setCommissionOverlay(false);
    setValidateOverlay(false);
    setOverlay(false);
    setSuccessOverlay(true);
  }

  async function handlePayCommission() {
    const result = await FetchCommission();
    result.status === "error"
      ? setPaymentFailState()
      : setPaymentSuccessState();
    console.log(result);
  }

  console.log(isPayCommision);
  return (
    <WithdrawalStyle>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Withdrawal</Text>
      <WithdrawalBox>
        <TransactionStatusBox>
          <TransactionStatus
            sold={sold}
            setSold={setSold}
            bought={bought}
            setBought={setBought}
            padding=".9rem"
            font="600"
            text={{ first: "On chain", second: "Internal" }}
          />
        </TransactionStatusBox>
        <Column>
          {sold && (
            <>
              <Text style={{ fontSize: "1.8rem" }}>
                What is on chain transaction ?
              </Text>
              <Text style={{ fontSize: "1.4rem", marginTop: "-1rem" }}>
                on chain transaction is the type of that makes use of the block
                chain ti transfer coins from one wallet to the other , learn
                more
              </Text>
            </>
          )}
          {bought && (
            <>
              <Text style={{ fontSize: "1.8rem" }}>
                What is internal transaction ?
              </Text>
              <Text style={{ fontSize: "1.4rem", marginTop: "-1rem" }}>
                internal transactions are transaction between users withing the
                app ,it would not be processed through the blockchain and
                requires no gass fee
              </Text>
            </>
          )}
        </Column>
        <Form
          onSubmit={handleSubmit(
            sold ? handleWithdrawSubmit : handleInternalWithdrawSubmit,
            handleError
          )}
        >
          <Column
            style={{
              marginTop: "2rem",
              border: `${bought ? "1px solid var(--border)" : "none"}`,
              padding: `${bought && "1.5rem 1rem"}`,
              borderRadius: `${bought && "1rem"}`,
              width: `${bought && "105%"}`,
              marginLeft: `${bought && "-1rem"}`,
            }}
          >
            {sold ? (
              <>
                <Label htmlFor="address">Withdrawal Address</Label>
                <Row style={{ marginTop: "-1rem", padding: "0" }}>
                  <Input
                    id="addrees"
                    type="text"
                    {...register("address", {
                      required: "This field is required",
                    })}
                  />
                  <PasteToClip />
                </Row>
              </>
            ) : (
              <Internal register={register} />
            )}
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem", alignSelf: "start" }}>
            {errors?.address?.message && errors?.address.message}
          </ErrorText>
          <Column>
            <Label>Network</Label>
            {sold ? (
              <Row style={{ padding: "1.3rem", marginTop: "-1rem" }}>
                <Text style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  WETH
                </Text>
              </Row>
            ) : (
              <Row style={{ marginTop: "-1rem" }}>
                <Select
                  onChange={(e) => setCategory(e.target.value.toLowerCase())}
                >
                  <Option value="WETH">WETH</Option>
                  <Option value="ETH">ETH</Option>
                </Select>
              </Row>
            )}
          </Column>
          <Column style={{ marginBottom: "2rem" }}>
            {sold ? (
              <>
                <Label htmlFor="amount">Withdrawal Amount</Label>
                <Row style={{ marginTop: "-1rem" }}>
                  <Input
                    style={{ fontWeight: "700" }}
                    id="amount"
                    type="number"
                    // min={0.02}
                    // max={userData?.wallet?.weth}
                    // defaultValue={userData?.wallet?.weth}
                    {...register("amount", {
                      required: "This field is required",
                      min: {
                        value: 0.02,
                        message: "Amount should be more than 0.02",
                      },
                    })}
                  />
                  {/* <Text style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                {getValues().category}
                </Text> */}
                </Row>
              </>
            ) : (
              <>
                <Label htmlFor={category}>Withdrawal Amount</Label>
                <Row style={{ marginTop: "-1rem" }}>
                  <Input
                    style={{ fontWeight: "700" }}
                    id={category}
                    type="number"
                    step={0.01}
                    // defaultValue={userData?.wallet?.weth}
                    {...register(`${category}`, {
                      required: "This field is required",
                      min: {
                        value: 0.02,
                        message: "Amount should be more than 0.02",
                      },
                    })}
                  />
                </Row>
              </>
            )}
            {sold && (
              <ErrorText style={{ marginTop: "-1.5rem", textAlign: "start" }}>
                {errors?.amount?.message && errors?.amount.message}
              </ErrorText>
            )}
            {bought && (
              <ErrorText style={{ marginTop: "-1.5rem", textAlign: "start" }}>
                {errors && errors[category]?.message}
              </ErrorText>
            )}
            <Row
              style={{
                justifyContent: "space-between",
                background: "inherit",
                marginTop: "-2rem",
                padding: "1rem 0",
              }}
            >
              <Text>Min 0.02</Text>
              {/* <Text>{userData?.wallet?.weth?.toFixed(2)} WETH</Text> */}
            </Row>
          </Column>
          <Button
            onSubmit={handleSubmit(
              sold ? handleWithdrawSubmit : handleInternalWithdrawSubmit,
              handleError
            )}
            padding=".8rem 1.5rem"
            width="100%"
            background="true"
            font="2rem"
            color="var(--white_text)"
          >
            Withdraw
          </Button>
        </Form>
        <Text>
          withdrawal might take up to 30 minutes to be completely processed{" "}
        </Text>
      </WithdrawalBox>
      {overlay && (
        <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
          <WithdrawStatus status="true" />
        </Overlay>
      )}
      {successOverlay && (
        <Overlay className="successOverlay" onClick={(e) => handleOverlay(e)}>
          <WithdrawStatus status="false" />
        </Overlay>
      )}
      {commissionOverlay && (
        <Overlay
          className="commissionOverlay"
          onClick={(e) => handleOverlay(e)}
        >
          <WithdrawStatus
            handlePayCommission={handlePayCommission}
            status="pay"
          />
        </Overlay>
      )}
      {validateOverlay && (
        <Overlay className="validateOverlay" onClick={(e) => handleOverlay(e)}>
          <WithdrawStatus status="validate" />
        </Overlay>
      )}
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </WithdrawalStyle>
  );
}

export default Withdrawal;
