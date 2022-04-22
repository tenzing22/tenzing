import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUpClick = () => {
        // console.log("Upper Case was clicked" +text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLowClick = () => {
        // console.log("Upper Case was clicked" +text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick = () => {
        // console.log("Upper Case was clicked" +text)
        let newText = ""
        setText(newText)
        props.showAlert("Cleared the text","success")
    }
  
  
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
      
    }
    const [text, setText] = useState('Enter text here');
    // setText("new text");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
           
           
        </div>
        <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743',color:props.mode==='dark'?'white':'#042743' 
    }}>
          <h1>Your text summary</h1>
          <p> {text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
        </div>
        </>
    )
}

export default TextForm