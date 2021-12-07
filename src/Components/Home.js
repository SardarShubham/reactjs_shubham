import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


function Home(){
    return(
        <div className="container">
            <h1> Welcome !</h1>
            <form className='name_form'>
                <label>Enter your Name:</label>
                <input type='text' placeholder='Enter your name here'></input>
            </form>
            <Button color="danger" className="start_button"><Link to = "/questions" className="link_start" > Start Quiz!</Link></Button>
        </div>
    );
}


export default Home;