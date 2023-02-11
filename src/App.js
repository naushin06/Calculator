import './App.css';
import { useState } from 'react';

function App() {
let [val,setval]=useState("0")

const all=(e)=>{
  if(val==0){
    console.log("huguS");
    val="";
    console.log(val)
  }
  setval(val.concat(e.target.name));
 

}

const clear=()=>{
setval("0")
}

const cl=()=>{
  setval(val.slice(0,val.length-1));
}

const submit=()=>{
try{

setval(eval(val).toString())
}
catch(err){
console.error("ERROR");
setval("ERROR");
}
}


  return (
    <div className="App">
   
<div className='input'>
<input classname='in' type="text" name="cal" value={val} />
</div>

<div className='button'>


<button className='btn' id="clear" onClick={clear}>clear</button>
<button className='btn' id="c" onClick={cl} name="c">C</button>
<button className='btn' id="sign" onClick={all} name="+">+</button>


<button className='btn' id="num" onClick={all} name="1">1</button>
<button className='btn' id="num" onClick={all} name="2">2</button>
<button className='btn' id="num" onClick={all} name="3">3</button>
<button className='btn' id="sign" onClick={all} name="-">-</button>



<button className='btn' id="num" onClick={all} name="4">4</button>
<button className='btn' id="num" onClick={all} name="5">5</button>
<button className='btn' id="num" onClick={all} name="6">6</button>
<button className='btn' id="sign" onClick={all} name="*">*</button>


<button className='btn' id="num" onClick={all} name="7">7</button>
<button className='btn' id="num" onClick={all} name="8">8</button>
<button className='btn' id="num" onClick={all} name="9">9</button>
<button className='btn'id="sign" onClick={all} name="/">/</button>


<button className='btn' id="zero" onClick={all} name="0">0</button>
<button className='btn' id="dot" onClick={all} name=".">.</button>
<button className='btn' id="equal" onClick={submit} name="submit">=</button>



</div>

    </div>
  );
}

export default App;
