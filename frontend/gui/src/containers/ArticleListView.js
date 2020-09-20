import React from 'react';
import Articles from '../componets/Articles';
import axios from 'axios';
import CustomForm from "../componets/Form"
    

class ArticleList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: []
        }
    }
    

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then((res) => {
                this.setState({
                    aricles: res.data
                })
                console.log(res.data);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Articles data={ this.state.aricles }/>
                <h1>Article Form</h1>
                <CustomForm 
                    requestType="post"
                    articleID={null}
                    btnText="Create"
                />
            </React.Fragment>
        )
    }
}


export default ArticleList;