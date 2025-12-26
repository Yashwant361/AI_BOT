import { Component } from "react";

export class Empolyee extends Component {


    constructor(props) {
        super(props);
        this.state = {
            emp: { name: 'Anil', age: 23 }
        }

    }

    render() {
        let { name, age } = this.state.emp ; // destructing here
        return (
            <>
                <div>
                   <h1>{name} {age}</h1>
                </div>

            </>
        )
    }
}
