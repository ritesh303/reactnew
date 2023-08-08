// const heading=React.createElement("h1",{id:"hello"},"hello world from react");
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[
    React.createElement("h1",{id:"hello"},"hello world from javascript"),
    React.createElement("h2",{id:"hello1"},"hello world from react")
])
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)