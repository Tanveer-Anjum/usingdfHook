import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const[length,setLength]= useState(3);
  const[numberAllowed, setNumberAllowed]=useState(false);
  const[characterAllowed, setCharacterAllowed] =useState(false);

  const[password,setpassword]=useState("") 
 const passwordRef = useRef(null);

  const GeneratePassword =useCallback(()=>{
    let pass='';

    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) 
         str +='123456789'; 

    if (characterAllowed) 
      str +='~!@#$%^&*?';
      
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char);
      
    }
    setpassword(pass);



  },[length,numberAllowed,characterAllowed])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
},
[password]);

useEffect(()=>{
  GeneratePassword();

},[length,numberAllowed,characterAllowed,GeneratePassword])

  return (
    <>
    
    <div   className="box">
    <h2 className='heading'>Password Generator:</h2>
    
     <div className='copy1'> 
     <button  onClick={copyPasswordToClipboard} className='copy'>Copy</button> 
       <input className='input' type='text' placeholder='password' value={password} readOnly ref={passwordRef} >
       </input>

       
     </div>
     <div className='range1'>

        <input type='range' min={5} max={20} value={length} onChange={(e)=>setLength(e.target.value)} ></input>
        <label className='length'>length: {length}</label>

        <input type='checkbox' id="numberInput" 
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        ></input>
        <label className="num">Number</label>

        <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>{
          setCharacterAllowed((prev)=>!prev)
        }}></input>
        <label className="num">character</label>
     </div>
     
   
   
    </div>
    
    </>
  )
}

export default App
