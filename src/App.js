import React, { useState, useEffect } from 'react'
import Note from "./components/Note"
import Marked from "./components/Marked"

function App() {
  const [switcher, setSwitcher] = useState(true)
  const [text, setText] = useState("")
  const [btnText, setBtnText] = useState("Switch to Marked Mode")

  useEffect(() => {
    if(localStorage.getItem("text")){
      setText(localStorage.getItem("text"))
    }
  },[])

  const toggleBtnText = () => {
    if(switcher){
      setBtnText("Switch to Writing Mode")
    } else {
      setBtnText("Switch to Marked Mode")
    }
  }

  const handleSwitch = () =>{
    toggleBtnText()
    setSwitcher(!switcher)
  }

  return (
    <div className="App">
      <div className="app_el">
        { switcher ? <Note text={text} setText={setText}/> : <Marked text={text}/> }
      </div>
      <div className="app_el btn_container">
        <button className="btn" onClick={handleSwitch}>{btnText}</button>
      </div>
    </div>
  )
}

export default App;
