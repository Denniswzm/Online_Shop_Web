import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./Main";
import SignUp from "./SignUp";
import Login from "./Login";
import Cart from "./Cart"

const MyRouter = withRouter(({location})=>(
    <div>
    <TransitionGroup className={'router-wrapper'}>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
            <Switch location ={location}>
                <Route path="/" exact component={Main} />
                <Route path="/Cart" exact component={Cart} />
                <Route path="/Login" exact component={Login} />
                <Route path="/SignUp" exact component={SignUp} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
  </div>

))
   
  
export default MyRouter;