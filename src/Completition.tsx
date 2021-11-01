import React, {useState} from 'react'
import Brand from './Brand';

export default function Completition(props:any){

  const {slide} = props;

  const container={
    width: "100%",
    height: "54px",
    backgroundColor: "var(--color-contrast-lowest)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 16px 0px 16px"
  } as React.CSSProperties;

  const controls = {
    position: "relative",
    marginLeft: "auto",
    marginRight: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  } as React.CSSProperties;

  return(
      <div style={container}>
        <Brand minimised={false} titleFill="var(--color-contrast-medium)"/>
        <Progress slide={slide} slideBack={()=> props.slideBack()} slideForrward={()=> props.slideForrward()}/>
        <div style={controls}>
          {props.children}
        </div>
      </div>
  )
}


function ButtonProgress(props:any){

  const { isActive } = props;
  const { isAsscending } = props;
  const[isOver, setIsOver] = useState(false);

  const button = {
    minWidth: "24px",
    height: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 4px 0px 4px",
    borderRadius: "100%",
    border: "none",
    backgroundColor: isActive ? "var(--color-accent)" : "var(--color-contrast-lower)",
    cursor: isActive ? "pointer" : "not-allowed",
    color: "var(--color-contrast-lowest)",
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: "bolder"
  } as React.CSSProperties;


  const icon = {
    height: isOver ? "20px" : "24px",
    width: isOver ? "20px" : "24px",
    fill: "var(--color-contrast-lowest)",
    preserveAspectRatio: "xMidYMid meet",
  } as React.CSSProperties;

  return(
    <button type="button" style={button} onMouseEnter={()=>setIsOver(true)} onMouseLeave={()=>setIsOver(false)} onClick={()=>props.onClick()}>
      {isAsscending
        ? <svg style={icon} viewBox="0 0 24 24"><path d="M12,1.48A10.52,10.52,0,1,0,22.52,12,10.52,10.52,0,0,0,12,1.48ZM18.31,13H13v5.31H11V13H5.69V11H11V5.69h2V11h5.31Z" /></svg>
        : <svg style={icon} viewBox="0 0 24 24"><path d="M12,1.48A10.52,10.52,0,1,0,22.52,12,10.52,10.52,0,0,0,12,1.48ZM18.31,13H5.69V11H18.31Z" /></svg>
      }
    </button>
  )
}

function Bar(props:any) {

  const { number } = props;
  const { stage } = props;
  const { title } = props;

  const container = {
    height: "8px",
    width: "100%",
    backgroundColor: number <= stage ? "var(--color-accent)" : "var(--color-contrast-lower)",
    borderRadius: "4px",
  } as React.CSSProperties;

  const wrapper = {
    position: "relative",
    width: "100%",
    margin: "0px 2px 12px 2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } as React.CSSProperties;

  const text = {
    marginLeft: "4px",
    // width: "100%",
    color: number <= stage ? "var(--color-accent)" : "var(--color-contrast-lower)",
    borderRadius: "4px",
    fontSize: "10px",
    top: "0px"
  } as React.CSSProperties;

  return(
    <div style={wrapper}>
      <div style={text}>
        {title ? title : 'NULL'}
      </div>
      <div style={container}/>
    </div>
  )
}

function Progress(props:any) {

  const { slide } = props;

  const container={
    position: "relative",

    width: "800px",
    height: "100%",
    overflow: "hidden",
    marginLeft: "auto",
    padding: "0px 20px 0px 20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  } as React.CSSProperties;

  return(
    <div style={container}>
        <ButtonProgress isActive={slide > 0} isAsscending={false} onClick={()=>props.slideBack()}/>
        <Bar number={0} stage={slide} title="PARTICIPANT'S CONSENT"/>
        <Bar number={1} stage={slide} title="GENERAL"/>
        <Bar number={2} stage={slide} title="PSICHO"/>
        <Bar number={3} stage={slide} title="STYLE"/>
        {/* <Bar number={4} stage={slide} title="COMPLEXITY"/> */}
        <ButtonProgress  isActive={slide < 3} isAsscending={true} onClick={()=>props.slideForrward()}/>
    </div>
  )
}



