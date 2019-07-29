import React, { Component } from 'react';
import '../Posts.css';

const img1 = require('../resources/imgs/sanoj.jpg');

class Posts extends Component {
    state = {
     img: '',
     comments: [],
     currentComment: ''
    }
    handleOnChange = (e) => {
        this.setState({currentComment: e.target.value});
    }
    handlePost = () => {
        let comments = [...this.state.comments];
        comments.push(this.state.currentComment);
        this.setState({
            comments: comments,
            currentComment: ''
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="posts">
                    <img className="postImage" src={img1}/>
                    {this.state.comments.length > 0 && this.state.comments.map((comment, index) => (
                        <p>{`${index+1} ${comment}`}</p>
                    ))}
                    <input class="inputCommnet" type="text" onChange={this.handleOnChange} 
                            value={this.state.currentComment}
                            placeholder="write comment..."/>
                    <button type="submit" onClick={this.handlePost}>post</button>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Posts
