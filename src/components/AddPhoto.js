import React from 'react';


class AddPhoto extends React.Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imagelink =event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post ={
            id: Number(new Date()),
            description: description,
            imgurl: imagelink
        }
        if (imagelink && description){
            this.props.onAddPhoto(post)
        }
}
    render(){
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="link"  name="link"/>
                        <input type="text" placeholder="description"  name="description"/>
                        <button>Post</button>
                    </form>
                </div>

            </div>
        );
    }

}

export default AddPhoto;