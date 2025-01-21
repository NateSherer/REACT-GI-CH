import React from 'react';

class BasicInfo extends React.Component {
    render() {
        const { name, number, dateOfBirth } = this.props.person;
        return (
            <div>
                <h2>Name: {name}</h2>
                <p>Number: {number}</p>
                <p>Date of Birth: {dateOfBirth}</p>
            </div>
        );
    }
}

export default BasicInfo;