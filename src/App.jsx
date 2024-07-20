import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/Styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import authReducer from "./Slices/AuthUserSlice";
import menuReducer from "./Slices/MenuBar";
import overlayReducer from "./Slices/overLaySlice";
import navigationReducer from "./Slices/navSlice";
import searchReducer from "./Slices/SearchSlice";
import AllEmailNameReducer from "./Slices/AllEmailNameSlice";
import { Toaster } from "react-hot-toast";

import Deposit from "./ui/Deposit";
import AllUserNfts from "./ui/AllUserNfts";
import Mint from "./ui/Mint";
import Withdrawal from "./ui/Withdrawal";
import AllUserExhibition from "./ui/AllUserExhibition";
import EditProfile from "./ui/EditProfile";
import VerifyEmail from "./pages/VerifyEmail";
import SignIn from "./pages/SignIn";
import Loading from "./ui/Loading";
import Validation from "./ui/Validation";
import CreateExhibition from "./ui/CreateExhibition";
import ChangePassword from "./ui/ChangePassword";
import RecoverPassword from "./pages/RecoverPassword";
import TermsAndCon from "./pages/TermsAndCon";

const ProtectRoute = lazy(() => import("./ui/ProtectRoute"));
const Exhibtion = lazy(() => import("./pages/Exhibition"));
const UserNftProfile = lazy(() => import("./pages/UserNftProfile"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardLayout = lazy(() => import("./ui/DashboardLayout"));
const ErrorRoute = lazy(() => import("./pages/ErrorRoute"));
const BuyNft = lazy(() => import("./pages/BuyNft"));
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));

const store = configureStore({
  reducer: {
    authData: authReducer,
    overlayData: overlayReducer,
    navData: navigationReducer,
    searchData: searchReducer,
    AllEmailNameData: AllEmailNameReducer,
    menuData: menuReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#dcdcdc" highlightColor="#c1c1c1c5">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <GlobalStyle />
            <BrowserRouter>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectRoute>
                        <DashboardLayout />
                      </ProtectRoute>
                    }
                  >
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard/mint" element={<Mint />} />
                    <Route
                      path="/dashboard/editProfile"
                      element={<EditProfile />}
                    />
                    <Route path="/dashboard/Deposit" element={<Deposit />} />
                    <Route
                      path="/dashboard/withdraw"
                      element={<Withdrawal />}
                    />
                    <Route
                      path="/dashboard/validation"
                      element={<Validation />}
                    />
                    <Route
                      path="/dashboard/allUserNft"
                      element={<AllUserNfts />}
                    />
                    <Route
                      path="/dashboard/allUserExhibition"
                      element={<AllUserExhibition />}
                    />
                    <Route
                      path="/dashboard/createExhibition"
                      element={<CreateExhibition />}
                    />
                    <Route
                      path="/dashboard/resetpassword"
                      element={<ChangePassword />}
                    />
                  </Route>
                  <Route index element={<Home />} />
                  <Route path="/category/:type" element={<Category />} />
                  <Route path="/buynft" element={<BuyNft />} />
                  <Route
                    path="/ownNftProfile/:userId"
                    element={<UserNftProfile />}
                  />
                  <Route
                    path="/recoverpassword"
                    element={<RecoverPassword />}
                  />
                  <Route path="/termsandcondition" element={<TermsAndCon />} />
                  <Route path="/exhibition" element={<Exhibtion />} />
                  <Route path="/verifyemail" element={<VerifyEmail />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="*" element={<ErrorRoute />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: "var(--blue_btn)",
                    secondary: "var(--white_text)",
                  },
                },
                error: {
                  duration: 4000,
                },
                style: {
                  fontSize: "17px",
                  color: "var(--sideBar_text)",
                  padding: "16px 24px",
                  background: "var(--bios_background)",
                  maxWidth: "500px",
                },
              }}
            />
          </Provider>
        </QueryClientProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
