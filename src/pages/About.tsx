import React from 'react'
import Action from '../Action';
import Row from '../Row';

export default function About(props:any) {


  const container = {
    padding: "0px 88px 0px 88px"
  }

  return (
    <div style={container}>
      <Title text="QUESTIONNARE : PERSONALITY & ARCHITECTURAL AESTHETICS"
      subtext="Correaltions between personality sub-traits and the visual complexity of architectural scenes."/>

      <Divider subtext="
      The current app-questionnare is created as part of a student thesis(Paul-Andrei Burghelea), Univeristy College Londons's MArch course. The app
      will collect data about you personality NEO sub-traits and your aesthetics preferences of percieved visual complexity in architectural scenes.
      You will be asked to complete the following four part questionnaire under no time limit. You will have to provide relevant general data,
      compete a psychometric personality test and rate a series of 2d / 3d images. At the beginning of each section you will recieve a series of instructions.
      Please let the examiner know if you have any questions. You can close this message or click 'Continue' to proceed.">

        <br/>
        <Item
          title="Examiner:"
          text="Paul-Andrei Burghelea"
        />
        <Item
          title="Tutor:"
          text="Dr. Abel Pinheiro Cavalcante Maciel Jr"
        />


      <br/>
      Please do not redistribute this software.
      'P&C' was created by Paul-Andrei Burghelea to fulfill the requirements of the current testing conditions and it is not published or released to the public.
      Any unauthorised distribution is strictly prohibited.

      </Divider>

      <Row>
        <Action
          label="Continue"
          margin="16px 0px 0px auto"
          onClick={()=> props.onClick()}
          isActive={true}
        />
      </Row>
    </div>
  )
}



function Item(props:any){
  const container = {
    color: "var(--color-contrast-higher)",
    fontSize: "14px",
    // padding: "4px 0px 4px 0px",
    // borderBottom: "1px solid var(--color-contrast-low)",
    textAlign: "left",
    lineHeight: "22px",
    display: "flex",

  } as React.CSSProperties;

  const title = {
    fontWeight: "bold",
    width: "88px"

  } as React.CSSProperties;

  const text = {

  } as React.CSSProperties;

  return(
    <div style={container}>
      <div style={title}>
        {props.title}
      </div>
      <div style={text}>
        {props.text}
      </div>
    </div>
  )
}

function Divider(props:any){

  const container = {
    color: "var(--color-contrast-higher)",
    fontSize: "14px",
    padding: "32px 38px 38px 38px",
    borderBottom: "1px solid var(--color-contrast-low)",
    textAlign: "left",
    lineHeight: "22px"
  } as React.CSSProperties;


  return(
    <div style={container}>
      {props.subtext}
      <br/>
      {props.children}
    </div>
  )
}


function Title(props:any){

  const container = {
    color: "var(--color-contrast-higher)",
    padding: "44px 24px 38px 24px",
    borderBottom: "1px solid var(--color-contrast-lower)",
    textAlign: "center"
  } as React.CSSProperties;

  const title = {
    color: "var(--color-contrast-higher)",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center"
  } as React.CSSProperties;

  const subtitle = {
    color: "var(--color-contrast-higher)",
    fontSize: "18px",
    paddingTop: "18px",
    textAlign: "center"
  } as React.CSSProperties;


  return(
    <div style={container}>
      <div style={title}>
        {props.text}
      </div>
      <div style={subtitle}>
        {props.subtext}
      </div>
    </div>

  )
}
