
import React, { useState, useEffect } from 'react'

export default function Input(props:any) {


  function Return(key:string){
    switch (key) {
      case "dropdown":
        return(<DropDown value={props.value} options={props.options} onUpdate={(value:any)=> props.onUpdate(value)} labelWidth={props.labelWidth} label={props.label} fieldWidth={props.fieldWidth}/>)

      case "field":
        return(<Field value={props.value} disabled={props.disabled} options={props.options} onUpdate={(value:any)=> props.onUpdate(value)} placeholder={props.placeholder} labelWidth={props.labelWidth} label={props.label} fieldWidth={props.fieldWidth}/>)

      case "checkbox":
        return(<CheckBox value={props.value} onUpdate={(value:any)=> props.onUpdate(value)} labelWidth={props.labelWidth} margin={props.margin} label={props.label} fieldWidth={props.fieldWidth}/>)

      case "radio":
        return(<Radio size={props.size} isActive={props.isActive} identifier={props.identifier} value={props.value} onUpdate={(value:any)=> props.onUpdate(value)} labelWidth={props.labelWidth} margin={props.margin} label={props.label} fieldWidth={props.fieldWidth}/>)


      default:
        return(null)
    }
  }

  return (
    Return(props.type)
  )
}



function DropDown(props:any){

  const container = {
    width:"auto",
    height: "32px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid var(--color-contrast-medium)"
  } as React.CSSProperties;

  const label = {
    color: "var(--color-text-medium)",
    fontSize: "14px",
    marginRight: "12px",
    padding: "0px 0px 0px 8px",
    width: props.labelWidth
  } as React.CSSProperties;

  const input = {
    width: props.fieldWidth ? props.fieldWidth : "100px",
    border: "none",
    borderLeft: props.label ? "1px solid var(--color-contrast-medium)" : "none",
    height: "100%",
    borderRadius: "0px"
  } as React.CSSProperties;

  return(
    <div style={container}>
      {props.label
        ? <div style={label}>{props.label}</div>
        : null
      }
      <select
        name=""
        style={input}
        onChange={(event:any)=> {props.onUpdate(event.target.value)}}
        defaultValue={props.value === null ? "" : props.value}
      >
        {props.options ? props.options.map((option:any, index:number)=> <option value={option} key={index}>{option}</option>) : null}
      </select>
    </div>
  )
}

function Field(props:any){

  const[value, setValue] = useState(props.value)

  const container = {
    width:"auto",
    height: "32px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid var(--color-contrast-medium)"
  } as React.CSSProperties;

  const label = {
    color: "var(--color-text-medium)",
    fontSize: "14px",
    marginRight: "12px",
    padding: "0px 0px 0px 8px",
    width: props.labelWidth
  } as React.CSSProperties;

  const input = {
    width: props.fieldWidth ? props.fieldWidth : "200px",
    height: "32px",
    borderRadius: "0px",
    padding: "0px 8px 0px 8px",
    border:"none",
    borderLeft: props.label ? "1px solid var(--color-contrast-medium)" : "none",
    color: "var(--color-text-medium)",
    background: "none"
  } as React.CSSProperties;


  useEffect(() => {
    props.onUpdate ? props.onUpdate(value) : null
  }, [value])


  return(
    <div style={container}>
      {props.label
        ? <div style={label}>{props.label}</div>
        : null
      }

      <input
      type="text"
      placeholder={props.placeholder}
      style={input}
      defaultValue={value}
      onChange={(event:any)=> setValue(event.target.value)}
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      disabled={props.disabled}
      />
    </div>
  )

}

function Slider(props:any){


  const container = {

  } as React.CSSProperties;

  return(
    <div style={container}>

    </div>
  )

}

function Radio(props:any){

   const[isOver, setIsOver] = useState(false);

   const container = {
     height: "100%",
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     margin: props.margin
   } as React.CSSProperties;

   const label = {
     color: "var(--color-text-medium)",
     fontSize: "16px",
     marginRight: "12px",
     width: props.labelWidth
   } as React.CSSProperties;


  function sendUp(){
    const state = {
      identifier: props.identifier,
      rating: props.value
    }

    props.onUpdate(state);
  }


   const element = {
     width: props.size ? props.size : "32px",
     height: props.size ? props.size : "32px",
     border: props.isActive ? "2px solid var(--color-accent)" : "2px solid var(--color-contrast-medium)",
     borderRadius: "50%",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     cursor: "pointer",
     opacity: isOver ? "0.8" : "1.0",

   } as React.CSSProperties;

   const check = {
     width: "50%",
     height: "50%",
     borderRadius: "50%",
     backgroundColor: props.isActive ? "var(--color-accent)" : "var(--color-contrast-low)",
     border: props.isActive ? "1px solid var(--color-accent)" : "1px solid var(--color-contrast-low)",

   } as React.CSSProperties;

   return(
     <div style={container}>
       {props.label
         ? <div style={label}>{props.label}</div>
         : null
       }
       <div style={element} onClick={()=> sendUp()} onMouseEnter={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)}>
         <div style={check}/>
       </div>
     </div>
   )

}

function CheckBox(props:any){

  const[isOver, setIsOver] = useState(false);
  const[value, setValue] = useState(props.value)

  const container = {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: props.margin


  } as React.CSSProperties;

  const label = {
    color: "var(--color-text-medium)",
    fontSize: "14px",
    marginRight: "12px",
    width: props.labelWidth
  } as React.CSSProperties;

  useEffect(() => {
    props.onUpdate(value);
  }, [value])


  const element = {
    width: props.size ? props.size : "28px",
    height: props.size ? props.size : "28px",
    border: value ? "2px solid var(--color-accent)" : "2px solid var(--color-contrast-medium)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: isOver ? "0.8" : "1.0",

  } as React.CSSProperties;

  const check = {
    width: "64%",
    height: "64%",
    borderRadius: "50%",
    backgroundColor: value ? "var(--color-accent)" : "var(--color-contrast-low)",
    border: value ? "1px solid var(--color-accent)" : "1px solid var(--color-contrast-low)",

  } as React.CSSProperties;

  return(
    <div style={container}>
      {props.label
        ? <div style={label}>{props.label}</div>
        : null
      }
      <div style={element} onClick={()=> setValue(!value)} onMouseEnter={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)}>
        <div style={check}/>
      </div>
    </div>
  )

}
