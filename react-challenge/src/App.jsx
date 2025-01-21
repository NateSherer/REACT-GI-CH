import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



// This is the hard solution. //
import React from 'react';
 import BasicInfo from './Basicinfo'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                { name: 'Nate Sherer', number: '980-621-5495', dateOfBirth: '2004-11-28' },
                { name: 'Joshua Smith', number: '543-123-7980', dateOfBirth: '1996-06-19' },
                { name: 'Blamah Kotay', number: '234-453-5125', dateOfBirth: '1999-11-26' }
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









// this is the medium solution //


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             person: {
//                 name: 'John Doe',
//                 number: '123-456-7890',
//                 dateOfBirth: '1990-01-01'
//             }
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <BasicInfo person={this.state.person} />
//             </div>
//         );
//     }
// }








// This is the easy solution //
// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           person: {}
//       };
//   }

//   render() {
//       return (
//           <div>
//               <h2>Name: John Doe</h2>
//               <p>Number: 123-456-7890</p>
//               <p>Date of Birth: 1990-01-01</p>
//           </div>
//       );
//   }
// }





// This is the very easy solution //

// import React from 'react';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Name: John Doe</h2>
//                 <p>Number: 123-456-7890</p>
//                 <p>Date of Birth: 1990-01-01</p>
//             </div>
//         );
//     }
// }

export default App;

