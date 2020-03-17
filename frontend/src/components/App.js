import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

export class App extends Component {
    render() {
        return (
            <Fragment>
                <form action="test" method="post">
                    <input type="text" name='name'></input>
                    <input type="submit"></input>
                </form>

                <form action="test2" method="post">
                    <input type="text" name='number'></input>
                    <input type="submit"></input>
                </form>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));