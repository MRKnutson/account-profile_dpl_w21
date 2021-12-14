import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import Home from "./components/Home";
import { Container, } from "semantic-ui-react";
import { Routes, Route, } from "react-router-dom";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
         path="/account/profile"
         element={<AccountProfile/>}
        />
      </Routes>
    </Container>
  </Fragment>
)

export default App;