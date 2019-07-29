import React from 'react';

class Like extends React.Component {
    getLikeClass = () => {
        return this.props.isLiked ? "fa fa-heart" : "fa fa-heart-o";
    }
   
    render() { 
        return ( 
            <React.Fragment>
                <i onClick={() => {
                    this.props.handleToggleLike();
                }}className={this.getLikeClass()} aria-hidden="true"/>
            </React.Fragment>
         );
    }
}


 
export default Like;