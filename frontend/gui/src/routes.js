import React from "react";
import { Route } from 'react-router-dom';
import ArticleListView from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";

const BaseRouter = () => {
    return (
        <div>
            <Route exact path="/" component={ ArticleListView }/>
            <Route exact path="/article-detail/:articleID" component={ ArticleDetail }/>
        </div>
    )  
}

export default BaseRouter;