import React from 'react'

export default function Terms(props:any) {

  const container = {
    width: "100%",
    height: props.height ? props.height : "600px",
    overflowY: "scroll",
    overflowX: "hidden",
    border: "1px solid var(--color-contrast-lower)",
  } as React.CSSProperties;

  return (
    <div style={container}>

    <Condition
      label="0"
    >
      This consent form is separate from the 'CONSENT FORM FOR ALL GROUPS' and is only used to protect the intelctual propeprty of the current software.
      By initiating 'I Agree' you consent to the terms and conditions in the current form. [conditions 0-5]
    </Condition>

    <Condition
      label="1"
    >
      I understand that this software is part of the study above and I have been previously explained it's use and user interaction process at a satisfactory level.
    </Condition>

    <Condition
      label="2"
    >
      I confirm that I will not redistribute, modify or release any of the materials included in this study.
      This includes any software, applications, images, logos, code or texts that were provided to you in the current software package.
      If I decide to withdraw I confirm that I will still respect this rule.
    </Condition>

    <Condition
      label="3"
    >
      I confirm that I will delete the software and any remenets present on my computer after the study is finished(if applicable).
    </Condition>

    <Condition
      label="4"
    >
      I confirm that I will not keep any copies of the software or any remenets after my participation in the active experiment is finsihed.
    </Condition>

    <Condition
      label="5"
    >
      I am aware that the data resulted in this study will be used / included in the curent student thesis.
    </Condition>


    <Condition
      label="6"
    >
      I am aware that the thesis is not a publicly accessible document, but elements of it might become public or be published in future.
    </Condition>


    </div>
  )
}



function Condition(props:any){

  const container = {
    textAlign: "left",
    display:"flex",
    fontSize:"14px",
    border: "1px solid var(--color-contrast-low)"
  } as React.CSSProperties;

  const label = {
    width: "32px",
    minWidth: "32px",
    borderRight: "1px solid var(--color-contrast-low)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } as React.CSSProperties;

  const text = {
    padding: "8px 8px 8px 12px"
  } as React.CSSProperties;


  return(
    <div style={container}>
      <div style={label}>
        {props.label}
      </div>
      <div style={text}>
        {props.children}
      </div>
    </div>
  )
}
