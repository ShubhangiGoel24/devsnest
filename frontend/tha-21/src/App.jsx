import React,{useState} from'react';

const App=()=>{
  const [name,setName]=useState();
  const [item,setItem]=useState();

  const [calories,setCalories]=useState();
  const [cal,setCal]=useState();


  const inCal=(event)=>{
    setCalories(event.target.value);
  }
  let iniDis="none";
  const [dis,setDis]=useState(iniDis);

  const onSubmit=()=>{
    setItem(name);
    setCal(calories);
     let newDis="block";
    setDis(newDis);
  };

  const inputEvent=(event)=>{
    setName(event.target.value);
  };


  return(
    <>
    <div className="container">
    <input type="text"placeholder="Item name" className="input" onChange={inputEvent} value={name}/>
    <input type="number"placeholder="Calorie amount" className="input" onChange={inCal} value={calories}/>
    <br/>
    <button className="add" onClick={onSubmit}>Add Item</button>
    <h1>Start Adding Items</h1>
    <div className="addItem" style={{display:dis}}>
      <h2>{item}
      </h2>
      <p>You have consumed {cal} calories</p>
      <button className="delete">Delete</button>
      <button className="edit">Edit</button>

    </div>
    </div>

    </>
  );
};
export default App;