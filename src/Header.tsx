import React, {useState} from 'react';

export default function Header(props:any) {

  const[showInfo, setShowInfo] = useState(!props.isClosed);
  const {text} = props;
  const {subtext} = props;

  const container = {
    width: "100%",
    color: "var(--color-contrast-higher)",
    padding: "24px 24px 10px 24px",
    borderBottom: "1px solid var(--color-contrast-lower)",
  } as React.CSSProperties;

  const title = {
    color: "var(--color-contrast-higher)",
    fontSize: "18px",
    paddingBottom: "12px",
    textTransform: "uppercase",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
    // textAlign: "center"
  } as React.CSSProperties;

  const subtitle = {
    color: "var(--color-contrast-higher)",
    fontSize: "14px",
    paddingBottom: "12px"
    // textAlign: "center"
  } as React.CSSProperties;



  return (
    <div style={container}>
      <div style={title}>
        {text}
        {props.collapsable ? <ButtonInfo onClick={()=>setShowInfo(!showInfo)}/> : null}
      </div>
      {showInfo
        ? <div style={subtitle}>{subtext}{props.children}</div>
        : null
      }
    </div>
  )
}


function ButtonInfo(props:any){

  const[isOver, setIsOver] = useState(false);

  const button = {
    width: "18px",
    height: "18px",
    margin: "0px 0px 0px 8px",
    backgroundColor: isOver ? "var(--color-contrast-high)" : "var(--color-contrast-medium)",
    display: "flex",
    color: "var(--color-contrast-lowest)",
    fontSize: "12px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } as React.CSSProperties;

  return(
    <div
      style={button}
      onClick={()=> props.onClick()}
      onMouseEnter={()=> setIsOver(true)}
      onMouseLeave={()=> setIsOver(false)}
    >
      ?
    </div>
  )
}
