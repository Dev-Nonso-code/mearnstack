import axios from "axios";
import './App.css';
// import axios from "axios";
import { useState, useEffect } from "react"


function App() {
  useEffect(() => {
    setdata()
    console.log("Hello World")
  
  },  [])
  const [server, setserver] = useState(false)

const [data, setdata] = useState([])   

  let endpoint = "http://localhost:9000/users"
  const getData = ()=>{
    axios.get(endpoint).then((Response)=>{
      console.log(Response)
      setserver(true)
      setdata(Response.data)
      alert(Response.data)
      
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <>

       <button onClick={getData} className='btn btn-info'>Get Data</button>
       {!server  ?
         
            <p className="text-center">LOADING PLS WAIT...</p>
            : data.map((Response, index) => (

            <div id="body" className="text-dark text-center" key={index}>

              <span>{Response.data}</span>
               {/* <h1>{index.data + 1}</h1> */}
              {/* <img src={item.avatar_url} alt="" /> */} 
              {/* <img src={item.subscriptions_url} alt="" /> */}
              {/* <h1>{item.subscriptions_url}</h1> */}

            </div>
          ))}
    </>
  );
}

export default App;
