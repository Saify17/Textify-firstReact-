import React from 'react'

export default function Alert(props) {
  const captilize =(word)=>{
     const lower =word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <i>{props.alert.msg}</i> <strong>{captilize(props.alert.type)}</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
