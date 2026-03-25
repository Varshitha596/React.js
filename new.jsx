//to create elememt 
const newy=React.createElement("h1");

//function 
function App() {
  const name="me";
  const task="learning react";
  return(
<div>
  <h1>
    hello {name}
  </h1>
  <p>and my task is {task}</p>
</div>
  );
}

export default App;

//component 
function App() {
  const name="me";
  const task="learning react";
  return(
<div>
    const good=() => {
return (
    <div>
         <h1>
    hello {name}
  </h1>
  <p>and my task is {task}</p>
</div>
    </div>
);
    
 

} 
