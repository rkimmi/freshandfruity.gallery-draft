import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component { // I am a class based component
    constructor(props) {
        super(props) 
        this.state = { 
            string: 'hi',
            number: 5,
            isTrue: true
        }
        this.myFunction = this.myFunction.bind(this) // bind all functions, is silly
    }
    
    myFunction () {
        // normal function goes here. can also change state using setState({}) below
        this.setState({
            string: 'bye',
            number: 6,
            isTrue: false
        })
    }

    render () {
        return (
            <div> 
                {/* html goes here */}
                <div onClick={this.myFunction}>{this.state.string}</div> 
                <Link to='/gallery'>another route</Link>
                {/* onclick runs myFunction and changes state */}
            </div>
        )
    }
}

export default Home 
