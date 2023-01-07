import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log("App rendering")
    return (
        <>
            <PageTitle title={"This is app component!"}/>
            <PageTitle title={"My friend!"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"--Menu--"}/>
            <Accordion titleValue={"--Users--"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
    );
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    debugger;
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}


export default App;
