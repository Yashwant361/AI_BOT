

import { Component, conmponent } from 'react'

export class Student extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h1>{this.props.name} {this.props.age}</h1>
                {/* <h1>{this.props.age}</h1> */}
            </div>
        )
    }
}