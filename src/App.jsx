import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/Styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import homeReducer from "./Slices/homeSlice";
import overlayReducer from "./Slices/overLaySlice";
import Deposit from "./pages/Deposit";
// import filterReducer from "./Slices/FilterSlice";
// import searchReducer from "./Slices/SearchSlice";
// import ErrorRoute from "./pages/ErrorRoute";
// import Loading from "./ui/Loading";

// const MoreLodgeDetails = lazy(() => import("./pages/MoreLodgeDetails"));
// const LodgeDetails = lazy(() => import("./pages/LodgeDetails"));
// const Profile = lazy(() => import("./pages/Profile"));
// const VerifyEmail = lazy(() => import("./features/Authentication/VerifyEmail"));
// const SignIn = lazy(() => import("./features/Authentication/SignIn"));
// const SignUp = lazy(() => import("./features/Authentication/SignUpForm"));
// const Applayout = lazy(() => import("./ui/Applayout"));
const Withdrawal = lazy(() => import("./pages/Withdrawal"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Mint = lazy(() => import("./pages/Mint"));
const Exhibtion = lazy(() => import("./pages/Exhibition"));
const UserNftProfile = lazy(() => import("./pages/UserProfile"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardLayout = lazy(() => import("./ui/DashboardLayout"));
const ErrorRoute = lazy(() => import("./pages/ErrorRoute"));
const BuyNft = lazy(() => import("./pages/BuyNft"));
const Home = lazy(() => import("./pages/Home"));
const ViewAll = lazy(() => import("./pages/ViewAll"));
const Loading = lazy(() => import("./ui/Loading"));
// const ProtecteRoute = lazy(() => import("./ui/ProtectRoute"));

const store = configureStore({
  reducer: {
    homeData: homeReducer,
    overlayData: overlayReducer,
    // filterData: filterReducer,
    // searchData: searchReducer,
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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Suspense>
                <Routes>
                  <Route element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="mint" element={<Mint />} />
                    <Route path="editProfile" element={<EditProfile />} />
                    <Route path="Deposit" element={<Deposit />} />
                    <Route path="withdraw" element={<Withdrawal />} />
                  </Route>
                  <Route path="/all" element={<Home />} />
                  <Route path="/viewall" element={<ViewAll />} />
                  <Route path="/buynft" element={<BuyNft />} />
                  <Route path="/ownNftProfile" element={<UserNftProfile />} />
                  <Route path="/exhibition" element={<Exhibtion />} />
                  {/* <Route path="/signin" element={<SignIn />} /> */}
                  {/* <Route path="/signup" element={<SignUp />} /> */}
                  {/* <Route path="/profile" element={<Profile />} /> */}
                  {/* <Route path="/verifyemail" element={<VerifyEmail />} /> */}
                  <Route path="*" element={<ErrorRoute />} />
                </Routes>
              </Suspense>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
