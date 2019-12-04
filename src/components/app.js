import React from 'react';
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state= {
            posts: [{
                'id': 1,
                'description': 'AirPlane',
                'imgurl':'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
            },
                {
                    'id': 2,
                    'description': 'Cat',
                    'imgurl':'https://homepages.cae.wisc.edu/~ece533/images/cat.png'
                }, 
                {
                    'id': 3,
                    'description': 'Fruits',
                    'imgurl':'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'
                }],


        }
        this.removePhoto = this.removePhoto.bind(this);

        //     this.navigate = this.navigate.bind(this);

}

componentDidUpdate(prevProps, prevState){
        console.log(prevState.posts);
        console.log(this.state);
}


removePhoto(postRemoved){

        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
}

addPhoto(postSubmitted){
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }))
}


    render(){
        return( <div>
            <Route exact path="/" render={() => (
               <div>
                <h1>PhotoWall</h1>
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
               </div>
                )}/>
                <Route path="/AddPhoto" render={({history}) => (<AddPhoto onAddPhoto={(addedPost) => {
                    console.log(addedPost);
                    this.addPhoto(addedPost);
                    history.push('/')


                }} /> )}/>
        </div>
        )

    }
}

export default App;