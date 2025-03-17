import { Navbar } from "./components/Navbar";
import { Redirect, Route, Switch, Router } from "wouter";

import { React, useEffect} from "react";
import { useAuthStore } from "./store/authStore";
import { Login } from "./pages/Login";
import { Balance } from "./pages/Balance";
import { Operations } from "./pages/Operations";
import { Register } from "./pages/Register";

function App() {
  const { isAuthenticated, validateToken} = useAuthStore();
  

  useEffect(()=>{
    //validateToken();
  },[]);

  return (
    <main style={{ backgroundColor: "#4cbcbf" }}>
       <Router base="/demo-challenge-fs-alkemy" >
      <Switch>
        <Route path="/">        
          {isAuthenticated
            ? <Redirect to="/balance" />
            : <Login />
          }
        </Route>

        <Route path="/register">        
          <Register/>
        </Route>

        <Route path="/balance">
          <Navbar />
          {isAuthenticated
            ? <Balance/>
            : <Redirect to="/" />
          }
        </Route>

        <Route path="/operations">
          <Navbar />
          {isAuthenticated
            ? <Operations/>
            : <Redirect to="/" />
          }
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      </Router>
    </main>
  );
}

export default App;
