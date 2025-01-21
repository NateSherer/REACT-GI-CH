import Info from "./easy";

constructor(props); {
        super(props);
        this.state = {
        person: {
            name: 'Nate Sherer',
            number: '123-456-7890',
            dob: 'November 28, 2000'
        }
        };
    };

    render()
    {
        return (
        <div>
        <BasicInfo person={this.state.person} />
        </div>
        );
    };

    export default Info;