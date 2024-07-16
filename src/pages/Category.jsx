import styled from "styled-components";
import Navigation from "../ui/Navigation";
import SubNav from "../ui/SubNav";
import ViewAllDetails from "../ui/ViewAllDetails";
import Cards from "../ui/Cards";
import Pagination from "../ui/Pagination";
import useFetchCategory from "../hooks/useFetchCategory";
import usePagination from "../hooks/usePagination";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useFetchExhibition from "../hooks/useFetchExhibition";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import SearchBar from "../ui/SearchBar";
import Footer from "../ui/Footer";

const ViewallStyle = styled.div`
  width: 99.5vw;
  /* padding-bottom: 5rem; */
`;
const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  z-index: 100;
`;
const Header = styled.div`
  width: 100%;
  background-size: cover;
  background-position: 50% 30%;
  height: 25rem;
  padding: 8.7rem 1.3rem;
  position: relative;
  @media (max-width: 500px) {
    height: 23rem;
  }
`;
const NftProImg = styled.div`
  position: absolute;
  bottom: -20%;
  left: 0.7%;
  width: 12.5rem;
  height: 12.6rem;
  border-radius: 1rem;
  padding: 0.4rem;
  background: var(--appbackgroundcolor);
  @media (max-width: 725px) {
    width: 10.5rem;
    height: 10.6rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.7rem;
`;
const DetailsBox = styled.div`
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;
const AllCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 4rem;
  padding: 0 1rem;
  width: 100%;
  @media (max-width: 1290px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 975px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 465px) {
    column-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`;
const PagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  padding-right: 1rem;
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
  z-index: 100;
  width: 100%;
  height: 100%;
`;
function Category() {
  const params = useParams();
  const reftop = useRef();
  const dispatch = useDispatch();

  const { searchModal } = useSelector((state) => state.searchData);

  const { data: categoryData, isLoading } = useFetchCategory();
  const { data: exhibitionData, isLoading: exhibitionIsLoading } =
    useFetchExhibition();
  const { paginatedData } = usePagination(
    params.type !== "exhibition" ? categoryData?.data : exhibitionData?.data
  );

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }
  return (
    <ViewallStyle id="Category_top">
      <NavStyle className="adapt">
        <Navigation />
      </NavStyle>
      <Header
        style={{
          backgroundImage: `url(${
            params.type === "arts"
              ? "/hero.jpg"
              : params.type === "gaming"
              ? "/pirate.jpeg"
              : params.type === "photography"
              ? "/suit.jpeg"
              : params.type === "pfps"
              ? "/pics3.jpeg"
              : params.type === "exhibition"
              ? "/elephant.jpeg"
              : params.type === "membership"
              ? "/sword.png"
              : ""
          })`,
        }}
      >
        <SubNav />
        <NftProImg>
          {params.type === "arts" && <Img src="/pirate.jpeg" />}
          {params.type === "gaming" && <Img src="/hero.jpg" />}
          {params.type === "photography" && <Img src="/elephant.jpeg" />}
          {params.type === "pfps" && <Img src="/suit.jpeg" />}
          {params.type === "membership" && <Img src="/old.jpeg" />}
          {params.type === "exhibition" && <Img src="/bat.png" />}
        </NftProImg>
      </Header>
      <DetailsBox>
        <ViewAllDetails category={params?.type} />
      </DetailsBox>
      <AllCards className={`${params.type}`} ref={reftop}>
        {paginatedData
          ? paginatedData?.map((val, _) => (
              <Cards
                defaultCard={params.type !== "exhibition" ? "true" : ""}
                key={val?.id}
                all="true"
                data={val}
                Exhibition={params.type === "exhibition" && "true"}
              />
            ))
          : Array.from({ length: 16 }).map((val, ind) => (
              <Cards
                defaultCard={params.type !== "exhibition" ? "true" : ""}
                key={ind}
                all="true"
                Exhibition={params.type === "exhibition" && "true"}
              />
            ))}
      </AllCards>
      <PagBox>
        <Pagination
          key={`${params.type}`}
          reftop={reftop}
          dataLenght={categoryData?.data?.length}
        />
      </PagBox>
      <Footer />
      {searchModal && (
        <Overlay
          tabIndex="-1"
          className="overlay"
          onClick={(e) => handleOverlay(e)}
        >
          <SearchBar />
        </Overlay>
      )}
    </ViewallStyle>
  );
}

export default Category;
