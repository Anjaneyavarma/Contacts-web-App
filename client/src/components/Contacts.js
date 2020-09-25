import Axios from 'axios';
import React, {Component} from 'react';


const Contact = props => (
    <tr>
        <td>{props.contact.name}</td>
        <td>{props.contact.number}</td>
    </tr>
)

class Contacts extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            contacts:[]
        }
    }

    

    componentDidMount(){
        Axios.get('http://localhost:5000/contacts/')
        .then(response => {
            this.setState({contacts: response.data})
        })
        
    }
    contactList() {
        return this.state.contacts.map((contactdedails, id)=>{
             return <Contact contact={contactdedails} key={id} />
         })
     }


    render(){
        
        return (
            <div>
                <h3>Contact List</h3>
                <table style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th> 
                        </tr>
                    </thead>
                    <tbody>
                        { this.contactList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Contacts;