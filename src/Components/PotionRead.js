import PropTypes from "prop-types";
import React from "react";
import { v4 } from 'uuid'

function PotionRead(props) {
    const { ticket, onClickingDelete, onClickingEdit } = props; //new code

    return (
        <React.Fragment>
            <h1>Ticket Detail for ticket {v4()}</h1>
            <h3>{ticket.location} - {ticket.names}</h3>
            <p><em>{ticket.issue}</em></p>
            <button onClick={props.onClickingEdit}>Update Ticket</button> { /* new code */}
            <button onClick={() => props.onClickingDelete(ticket.id)}>Close Ticket</button>
            <hr />
        </React.Fragment>
    );
}

PotionRead.propTypes = {
    ticket: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func // new code
};

export default PotionRead;