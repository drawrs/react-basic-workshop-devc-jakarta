import React from 'react'
//import React, { Component } from 'react' //cara_2 bisa langsung ke Child class
import SearchBar from '../components/SearchBar'
class App extends React.Component { // cara_2, disini tinggal extends Component
    constructor(){
        super()

        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 1000)
    }

    render() {
        return (
            //<h1>Loading : {JSON.stringify(this.state.loading)}</h1>
            <SearchBar search="Rizal Hilman"/>
        )
    }
}

export default App