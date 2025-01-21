import Info from "./easy";

const BasicInfo = ({ person }) => {
    return (
    <div style={{ marginBottom: '15px' }}>
        <h1>Basic Information</h1>
        <p>Name: {person.name}</p>
        <p>Number: {person.number}</p>
        <p>Date of Birth: {person.dob}</p>
    </div>
    );
};

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        people: [
        {
            name: 'Toby Jones',
            number: '123-456-7890',
            dob: 'January 1, 1994'
        },
        {
            name: 'Bob Smith',
            number: '987-654-3210',
            dob: 'February 5, 1997'
        },
        {
            name: 'Kevin Johnson',
            number: '212-345-2345',
            dob: 'March 29, 1999'
        }
        ]
    };
    }

    render() {
    return (
        <div>
        {this.state.people.map((person, index) => (
            <BasicInfo key={index} person={person} />
        ))}
        </div>
    );
    }
}





export default Info;