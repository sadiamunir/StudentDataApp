import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ViewStudent from './studentDataPopup';

function StudentCard({el,populateData}){

    function onUserClick(user) {
        populateData(user)
    }
    return(
        <div className="student-container">
        <div>
            <h3>{el.name}</h3>
            <p className="col-12"><i className="fa fa-envelope" aria-hidden="true"></i>{el.email}</p>
            <p className="col-12"><i className="fa fa-phone" aria-hidden="true"></i>{el.phone}</p>
            <p className="col-6 edit-btn"><i className="fa fa-flag" aria-hidden="true" title="Delete"></i>
            <i className="fa fa-pencil" aria-hidden="true" title="Edit" onClick={() => onUserClick(el)}></i>
            <i className="fa fa-trash" aria-hidden="true" title="Delete"></i></p>
        </div>
    </div>
    )
}

export default StudentCard;