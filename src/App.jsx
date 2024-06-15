import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/Styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import homeReducer from "./Slices/homeSlice";
// import mapReducer from "./Slices/MapSlice";
// import filterReducer from "./Slices/FilterSlice";
// import searchReducer from "./Slices/SearchSlice";
// import ErrorRoute from "./pages/ErrorRoute";
// import Loading from "./ui/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const MoreLodgeDetails = lazy(() => import("./pages/MoreLodgeDetails"));
// const LodgeDetails = lazy(() => import("./pages/LodgeDetails"));
// const Profile = lazy(() => import("./pages/Profile"));
// const VerifyEmail = lazy(() => import("./features/Authentication/VerifyEmail"));
// const SignIn = lazy(() => import("./features/Authentication/SignIn"));
// const SignUp = lazy(() => import("./features/Authentication/SignUpForm"));
// const Applayout = lazy(() => import("./ui/Applayout"));
const ErrorRoute = lazy(() => import("./pages/ErrorRoute"));
const BuyNft = lazy(() => import("./pages/BuyNft"));
const Home = lazy(() => import("./pages/Home"));
const ViewAll = lazy(() => import("./pages/ViewAll"));
const Loading = lazy(() => import("./ui/Loading"));
// const ProtecteRoute = lazy(() => import("./ui/ProtectRoute"));

const store = configureStore({
  reducer: {
    homeData: homeReducer,
    // mapData: mapReducer,
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
                  {/* <Route element={<DashboardLayout />}>

                  </Route> */}
                  <Route index element={<Home />} />
                  <Route path="/viewall" element={<ViewAll />} />
                  <Route path="/buynft" element={<BuyNft />} />
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
