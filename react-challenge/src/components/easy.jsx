class Info extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    person: {}
    };
    };
    
    render() {
    return (
        <div>
        <h1>Basic Information</h1>
        <p>Name: John Doe</p>
        <p>Number: 123-456-7890</p>
        <p>Date of Birth: January 1, 1990</p>
        </div>
        );
    };
    };

    export default Info;