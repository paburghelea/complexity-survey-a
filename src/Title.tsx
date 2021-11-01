/* eslint-disable prettier/prettier */
import React from 'react';


export default function Title(props:any){

  const {text} = props;
  const {subtext} = props;

  const container = {
    color: "var(--color-contrast-higher)",
    padding: "44px 24px 44px 24px",
    borderBottom: "1px solid var(--color-contrast-lower)",
    textAlign: "center"
  } as React.CSSProperties;

  const title = {
    color: "var(--color-contrast-higher)",
    fontSize: "28px",
    textAlign: "center"
  } as React.CSSProperties;

  const subtitle = {
    color: "var(--color-contrast-higher)",
    fontSize: "16px",
    paddingTop: "22px",
    textAlign: "center"
  } as React.CSSProperties;


  return(
    <div style={container}>
      <div style={title}>
        {text}
      </div>
      <div style={subtitle}>
        {subtext}
      </div>
    </div>

  )
}
