import React from 'react';
import Photo from "./Photo";
import {Link} from 'react-router-dom';


class PhotoWall extends React.Component{
    render(){
        return(
            <div>

                <Link className="add-icon" to="/AddPhoto" > CLickME </Link>
                {/*<a onClick={this.props.onNavigate} href="#AddPhotos" className="add-icon"> + </a>*/}
              {/*  <button onClick={this.props.onNavigate} className="add-icon"> + </button>*/}
            <div className='photoGrid'>
                {this.props.posts.sort(function(x,y) {
                    return y.id -x.id
                }).map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
            </div>

            </div>
        );
    }
}
export default PhotoWall;








