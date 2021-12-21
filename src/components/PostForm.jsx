import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props){
     super(props)

     this.state = {name: "", job: "",}
    }

    changeHandler = (e)=>{
      this.setState({
          [e.target.name]: [e.target.value]
      })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post("https://reqres.in/api/users", this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const {name, job} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler} >
                    <input value={name} type="" name="name" onChange={this.changeHandler } />
                    <input value={job} type="text" name="job" onChange={this.changeHandler} />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;