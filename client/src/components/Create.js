import React, {Component} from 'react';
import './Create.css';
import axios from 'axios';
class Create extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber  = this.onChangeNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            number:'',
        }
    }

    

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.number)

        const newContact ={
            name: this.state.name,
            number: this.state.number
        }

        axios.post('http://localhost:5000/contacts/add', newContact)
        .then(response => console.log(response.data))


        this.setState({
            name:'',
            number:''   
        })
    }

    render(){
        return(
            <div className='create'>
                <h2>Create Contact</h2>
                <form className='create-contact' onSubmit={this.onSubmit}>
                    <div className='contact-name'>
                        <label>Name</label>
                        <input
                            placeholder='Enter Name Here'
                            type='text'
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className='contact-number'>
                        <label>Number</label>
                        <input
                            maxLength='10'
                            placeholder='Enter Number here'
                            type='text'
                            value={this.state.number}
                            onChange={this.onChangeNumber}
                        />
                    </div>
                    <div className='create-submit'>
                        <input
                            disabled={!this.state.number || !this.state.name}
                            type='submit'
                            value = 'Create Contact'
                        />
                    </div>
                </form  >
            </div>
        );
    }
}

export default Create;