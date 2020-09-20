import axios from 'axios';
import React from 'react';


const CustomForm = (props) => {    
    
    const handleSubmit = (e, requestType, articleID) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res.data))
                .catch(err => console.error(err))
        
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res.data))
                .catch(err => console.error(err))
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={ (e) => handleSubmit(e, props.requestType, props.articleID) }>
                <input placeholder="Title" name="title" />
                <input placeholder="Content" name="content" />
                <button type="primary" htmlType="submit">{ props.btnText }</button>
            </form>
        </React.Fragment>
    );
};

export default CustomForm;