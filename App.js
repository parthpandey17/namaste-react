import React from "react";
import ReactDOM from "react-dom/client";


//const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 

//create this structure using react

// <div id="parent">
//     <div id="child">
//         <h1>This is Namaste React</h1>
//         <h2>Kya haal hai guys</h2>
//     </div>
//     <div id="child2">
//         <h1>I am a h1 tag</h1>
//         <h2>I am a h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement(
        "div", { id: "child" },
        //sibling
        [React.createElement("h1", {}, "This is Namaste React"), React.createElement("h2", {}, "Kya haal hai guys")]
    ),
    React.createElement(
        "div", { id: "child2" },
       //sibling
        [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
    ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// React.createElement => ReactElement-JS OBJECT => HTMLElement(render)

// const heading=React.createElement("h1",{id:"heading"},"Namaste React");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// JSX-- javascript --htnl like syntax to make react simple
// JSX(transpiled before it reaches the JS)-PARCEL-Babel
// Babel convert JSX to => React.createElement => ReactElement-JS OBJECT => HTNLElement(render)

//React element
const jsxHeading= <h1 className="head" tabIndex="1">Namaste react using JSX</h1>;

// React component
// Class based components-OLD and functional component-NEW

// React functiona component


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);





