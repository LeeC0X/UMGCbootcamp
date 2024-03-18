import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";


const Routes=({dogs})=>{
    return (
        <Switch>
       
            <Route exact path="/dogs" element={<DogList />}></Route>
            <Route path="/dogs/:name" element={<DogDetails dog={dogs}/>}>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes;