import React from 'react';
import axios from 'axios';
import { Card } from "antd";    
import CustomForm from "../componets/Form"


class ArticleDetail extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             article: {}
        }
    }
    
    handleDelete = (e) => {
        e.preventDefault();
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    }

    componentDidMount = () => {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then((res) => {
                this.setState({
                    article: res.data
                })
                console.log(res.data);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Card title={ this.state.article.title}>
                    <p> {this.state.article.content} </p>
                </Card>
                <h1>Article Form</h1>
                <CustomForm
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update"
                />
                <form onSubmit={ e => this.handleDelete(e) }>
                    <button type="danger" htmlType="submit">Delete</button>
                </form>
            </React.Fragment>
        )
    }
}


export default ArticleDetail;