import React from "react";
import ReactDOM from "react-dom/client";

// Create the structure using React.createElement
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement(
//         "div", 
//         { id: "child", key: "child1" }, // Add a unique key
//         [
//             React.createElement("h1", { key: "h1-1" }, "This is Namaste React"), 
//             React.createElement("h2", { key: "h2-1" }, "Kya haal hai guys")
//         ]
//     ),
//     React.createElement(
//         "div", 
//         { id: "child2", key: "child2" }, // Add a unique key
//         [
//             React.createElement("h1", { key: "h1-2" }, "I am a h1 tag"), 
//             React.createElement("h2", { key: "h2-2" }, "I am a h2 tag")
//         ]
//     ),
// ]);
// // Render the structure to the root element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React.createElement => ReactElement-JS OBJECT => HTMLElement(render)

// const heading=React.createElement("h1",{id:"heading"},"Namaste React");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// JSX-- javascript --htnl like syntax to make react simple
// JSX(transpiled before it reaches the JS)-PARCEL-Babel
// Babel convert JSX to => React.createElement => ReactElement-JS OBJECT => HTNLElement(render)

//React element
const jsxHeading= (
    <h1 className="head" tabIndex="1">
        Namaste react using JSX
    </h1>);
// wrap the code inside () if u write in multiple lines for babel to understand

// React component
// Class based components-OLD and functional component-NEW

// React functional component
const HeadingComponent=()=>{
    return <h1>Namaste react wale bhiaya</h1>;
}

// or

const HeadingComponent1=()=>(
    <h1 className="heading">Namaste react wale bhaiji Functinal comonent</h1>
)


const root=ReactDOM.createRoot(document.getElementById("root"));
//rendering react element
// root.render(jsxHeading);

//rendering react component
//root.render(<HeadingComponent1 />);

//playing with functional component-> putting a functional component inside another component
const Title=()=>(
    <h1 className="head" tabIndex="5">
        Namaste react Title
    </h1>
);

const HeadingComp=()=>(
    <div id="container">
        <Title />
        <h1 className="heading">Namaste react with functional</h1>
    </div>
);

//root.render(<HeadingComp />);

//putting an elemnt inside component

const number=1000;
const title1="hello guys";
const HeadingComp1=()=>(
    <div id="container">
        {number}
        <h2>{number}</h2>
        <h2>{100+200}</h2>
        <h2>{console.log("abcdefghi")}</h2>
        {title1}
        <Title /> 
        <Title></Title>
         {/* another way */}
        {Title()}
        <h1 className="heading">Namaste react with functional</h1>
    </div>
);

// root.render(<HeadingComp1 />);


