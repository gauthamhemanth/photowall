import React from 'react';

class Photo extends  React.Component{
    render(){
        return (
            <figure className='figure'>
                <img className='photo' src={this.props.post.imgurl} alt={this.props.post.description} />
                <p>{this.props.post.description}</p>
                <div className='button-container'>
                <button className='remove-button' onClick={() =>{
                    this.props.onRemovePhoto(this.props.post)
                }}>Remove</button>
                </div>
            </figure>

        );
    }
}

export default Photo;