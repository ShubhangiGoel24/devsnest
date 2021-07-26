import React,{useState} from 'react';

const Home=()=>{

    const [num,setNum]=useState();

    const load=()=>{
        setNum("Loading....")
    }
    return(
        <>
        <div className="home_page">
        <h1>Home</h1>
        <p>If not logged in can't access,Profile & Dashboard</p>
        <button onClick={load}>Login</button>
        <p>{num}</p>
        </div>
        </>
    );
};
export default Home;