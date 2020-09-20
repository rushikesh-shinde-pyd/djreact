import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
// import ArticleListView from './containers/ArticleListView'
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";



function App(props) {
  useEffect(() => {
    props.onTryAutoSignup()
  }, [])

  return (
    <div className="App">
      <Router>
        <CustomLayout {...props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    isAuthenticated: state.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckstate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
