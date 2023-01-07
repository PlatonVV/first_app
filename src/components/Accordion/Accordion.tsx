import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <>
            <AccordionTitle title={props.titleValue} />
            <AccordionBody/>
        </>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <div>{props.title}</div>
}

export default Accordion;