import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
    const style = {
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  };

    const [stylee, setStyle]=useState(
        {
            backgroundColor:'white',
            color:'black'
        }
    );

    const [btnText, setBtnText]=useState("Dark Mode");
    const handleDark =()=>{
        if(style.backgroundColor==='white'){
            setStyle({

                 backgroundColor:'black',
            color:'white',

            });
            setBtnText("Light Mode")
           
        }else{
            setStyle({
                backgroundColor:'white',
                color:'black'
            });
            setBtnText("Dark Mode")
        }
    }
    
  return (
   
    <div className="container mx-5 my-5" style={style}>
 <h1>About us</h1>

            <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={style}>
        <strong >This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={style}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={style}>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        <button type="button" className='btn btn-primary my-2' onClick={handleDark} >{btnText}</button>
    </div>
  )
}
