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
                {% csrf_token %}
                {{form.name}}
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));