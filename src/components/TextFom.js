import React, {useState} from 'react'
let bold ={
    fontWeight:700
}
let preView = Text;



export default function TextFom(props) {

    const handleUpClick =()=>{
       let newText=Text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase", "success")
    }

    const handleDnClick =()=>{
       let newText=Text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase", "success")
    }

        const handleClearClick =()=>{
       let newText='';
       setText(newText);
       props.showAlert("All text Cleared", "warning")
    }

   const handleTitleClick = () => {
  let newText = Text
    .toLowerCase() // make everything lowercase first
    .split(" ")    // split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
    .join(" ");    // join back into a string
  setText(newText);
  props.showAlert("Converted to TitleCase", "success")
};


    const handleOnChange = (event) => {
  setText(event.target.value);
}


    //Area for writing UseStates
const[Text, setText]=useState(""); 
  return (
    
       <>
       
       
          <div className = "container">
       
<div className="my-3 mx-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3 style={bold}>{props.formheading}</h3></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={Text} placeholder='Enter Your Text here!'></textarea>
  <button type="button" className="btn btn-primary my-1 me-1 btn-sm " onClick={handleUpClick}>Convert to UpperCase</button>
   <button type="button" className="btn btn-primary my-2 me-1 btn-sm" onClick={handleDnClick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary my-2 me-1 btn-sm" onClick={handleTitleClick}>Convert to TitleCase</button>
    <button type="button" className="btn btn-success my-2 me-1 btn-sm" onClick={handleClearClick}>Clear</button>
         
         <p>Words = {Text.trim().split(/\s+/).filter(Boolean).length} | Characters = { Text.length}</p>
          </div>
</div>


            <div className = "container" >
            <div className="my-3 mx-5">

             

            <h5 className="my-2" style={bold}>Your Text Summary is Here!</h5>
            <p> {Text} </p>
           
            </div>
              
              </div>

        
       </>


  )
}

