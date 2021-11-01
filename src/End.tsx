import React from 'react'
import Button from './Button';
import Header from './Header';
import Row from './Row';

export default function End() {

  const container = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } as React.CSSProperties;

  const text = {
    color: "var(--color-text-medium)",
    fontSize: "14px"
  }

  return (
    <div style={container}>
      <Header
      text="Share"
      subtext="This is the last step of the questionnare. Please read the instructions below to finish share the data with th examiner."
      />
      <Share>
        {/* <Row> */}
          <div style={text}>
            ss
          </div>
          <Button
            icon="package"
            onClick={()=> null}
          />
        {/* </Row> */}
      </Share>



    </div>
  )
}


function Share(props:any){

  const wrapper = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  } as React.CSSProperties;

  const container = {
    width: "calc(100% - 280px)",
    height: "120px",
    border: "1px solid var(--color-contrast-low)",
    padding: "18px",
    display: "flex",
    alignItems: "center"
  } as React.CSSProperties;

  return(
    <div style={wrapper}>
      <div style={container}>
        {props.children}
      </div>
    </div>
  )
}
