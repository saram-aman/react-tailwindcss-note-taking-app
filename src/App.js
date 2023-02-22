import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./main"

export default class App extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <Routes>
                        <Route path={"/"} element={ <Main /> } ></Route>
                    </Routes>
                </Router>
            </>
        )
    }
}
