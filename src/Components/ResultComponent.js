import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
function ResultComponent(props){
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'tehsd',
        show: true
    })
    let percentage = props.score*100/5;
    let text = "";
    if (percentage >= 80){
        text = "Well Done!!!";
    }
    else if (percentage >= 60 && percentage < 80) text = "Very Good !!!";
    else text = "Sorry you are not eligible to get best offer, please try again !!!";
    return(
        <div className="modal_result">
            <p> You have Scored {props.score}/5 
            <br/>{text}
            <br/><Button color="danger">Try Again</Button>
            </p>
        </div>
    )
}

export default ResultComponent;