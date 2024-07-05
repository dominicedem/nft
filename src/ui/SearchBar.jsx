import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import useSearchNft from "../hooks/useSearchNft";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

const SearchBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  right: 2%;
  top: 10%;
  gap: 1.5rem;
  width: 40%;
  height: 54%;
  padding: 2rem 2rem 1rem 2rem;
  background: var(--appbackgroundcolor);
  border-radius: 1rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  font-size: 1.8rem;
  color: var(--black_bacground);
  &::placeholder {
    color: var(--profile_text);
    font-size: 1.8rem;
  }
`;
const Text = styled.h2`
  font-size: 1.6rem;
  color: var(--black_text);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${(props) =>
    props.type === "hover" ? "var(--search_background)" : ""};
  &:hover {
    background: ${(props) =>
      props.type === "hover" ? "var(--search_background_hover)" : ""};
  }
`;
const Column = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 4.4rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  object-fit: cover;
  aspect-ratio: 1/2;
`;
const iconStyle = {
  width: "3rem",
  height: "3rem",
  color: "var(--black_text)",
  cursor: "pointer",
};
const iconStyles = {
  width: "1.4rem",
  height: "1.4rem",
  color: "#333",
};
const linkStyle = {
  textDecoration: "none",
  padding: 0,
  margin: 0,
  width: "100%",
};

function SearchBar() {
  const { searchedNft, handleSearch } = useSearchNft();
  const dispatch = useDispatch();
  const { filteredNft, filteredExhibition } = useSelector(
    (state) => state.searchData
  );
  const { ref: exhibitionRef, inView: exhibitionInVeiw } = useInView();
  function test(val) {
    dispatch(setSearchModal(false));
    console.log(val);
  }
  return (
    <SearchBarStyle role="dialog" aria-modal="true" tabIndex="-1">
      <Row>
        <Text style={{ fontSize: "2rem" }}>Search</Text>
        <RxCross2
          style={iconStyle}
          onClick={() => dispatch(setSearchModal(false))}
        />
      </Row>
      <Input
        value={searchedNft}
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="search for nfts"
      />
      {!filteredNft && (
        <Text
          style={{
            alignSelf: "center",
            fontStyle: "italic",
            fontSize: "2rem",
            fontWeight: "100",
          }}
        >
          No result...
        </Text>
      )}
      {filteredNft && (
        <Text
          style={{
            fontSize: "1.8rem",
            fontWeight: "500",
          }}
        >
          {!exhibitionInVeiw ? "NFTs" : "Exhibition"}
        </Text>
      )}
      {filteredNft && (
        <Column
          style={{
            height: "30rem",
            width: "100%",
            justifyContent: "start",
            overflow: "scroll",
            gap: ".5rem",
            marginTop: "-.5rem",
          }}
        >
          {filteredNft.map((val) => (
            <HashLink
              smooth
              style={linkStyle}
              to={`/buynft/?productId=${val?.id}&category=${val?.category}#top`}
            >
              <Row
                onClick={() => test(val)}
                type="hover"
                tabIndex="-1"
                style={{
                  borderRadius: "1rem",
                  padding: ".5rem",
                  gap: "1rem",
                  justifyContent: "start",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <Img
                  crossOrigin="anonymous"
                  src={`https://artcity.site/${val.photo}`}
                  alt="serachedNfts"
                />
                <Column
                  style={{
                    justifyContent: "space-between",
                    height: "100%",
                    padding: ".25rem 0",
                  }}
                >
                  <Text
                    style={{ fontSize: "1.6rem", color: "var(--sideBar_text)" }}
                  >
                    {val.name}
                  </Text>
                  <Text
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "1.4rem",
                      color: "var(--profile_text)",
                      fontWeight: "200",
                    }}
                  >
                    {val.nftOwner.username}{" "}
                    {val.nftOwner.userVerified && (
                      <RiVerifiedBadgeFill style={iconStyles} />
                    )}
                  </Text>
                </Column>
              </Row>
            </HashLink>
          ))}
          {filteredExhibition && (
            <Column
              ref={exhibitionRef}
              style={{ width: "100%", margin: "3rem 0", gap: ".5rem" }}
            >
              <Text
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                }}
              >
                Exhibition
              </Text>

              {filteredExhibition.map((val) => (
                <HashLink
                  smooth
                  style={linkStyle}
                  to={`/exhibition?productId=${val?.id}`}
                >
                  <Row
                    onClick={() => dispatch(setSearchModal(false))}
                    type="hover"
                    tabIndex="-1"
                    style={{
                      borderRadius: "1rem",
                      padding: ".5rem",
                      gap: "1rem",
                      justifyContent: "start",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <Img
                      crossOrigin="anonymous"
                      src={`https://artcity.site/${val.photo}`}
                      alt="serachedNfts"
                    />
                    <Column
                      style={{
                        justifyContent: "space-between",
                        height: "100%",
                        padding: ".25rem 0",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "1.6rem",
                          color: "var(--sideBar_text)",
                        }}
                      >
                        {val.name}
                      </Text>
                      <Text
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          fontSize: "1.4rem",
                          color: "var(--profile_text)",
                          fontWeight: "200",
                        }}
                      >
                        Total Nfts: {val.totalNft}
                      </Text>
                    </Column>
                  </Row>
                </HashLink>
              ))}
            </Column>
          )}
        </Column>
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
