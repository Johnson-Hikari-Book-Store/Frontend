import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import BookDetail from "../pages/BookDetail";
import ProfileSettings from "../pages/ProfileSettings";
import Profile from "../pages/Profile";
import Post from "../pages/Post";
import Home from "../pages/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../assets/Theme";

// import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/:bookId" element={<BookDetail />} />
            <Route path="/:userId" element={<Profile />} />
            <Route element={<AuthLayout />}>
              <Route path="/:userId/settings" element={<ProfileSettings />} />
              <Route path="/:userId/post" element={<Post />} />
            </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
