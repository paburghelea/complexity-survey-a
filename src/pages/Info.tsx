import React, { useState } from 'react';
import Action from '../Action';
import Header from '../Header';
import Input from '../Input';
import Row from '../Row';
import Terms from '../Terms';

export default function Info(props:any) {

  const data = props.data;
  const[isComplete, setIsComplete] = useState(data.info.isComplete);

  function sendUp(){
    if(data.info.consent){
      data.info.isComplete = true;
      setIsComplete(true);
    }
    else{
      data.info.isComplete = false;
      setIsComplete(false);
    }

    props.update(data);
  }

  const container = {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "hidden"
  } as React.CSSProperties;

  return (
    <div style={container}>
      <Header
      text="PARTICIPANT'S CONSENT"
      subtext="Please read carefully the terms & conditions below and tick/ initiate 'I Agree' to consent. After click 'Next' to proceed."
      collapsable={false}
      />
      <Divider>

      <Item title="Title of Study:" text="Personality and Architectural Aesthetics(Part of MArch Student Thesis)" />
      <Item title="Department:" text="The Bartlett School of Architecture" />
      <Item title="Examiner:" text="Paul-Andrei Burghelea" />
      <br/>


        <Terms
          height="286px"
        />

        <Row margin="14px 0px 0px 0px">
          <Input
            margin="0px 0px 0px auto"
            value={data.info.consent}
            label="I Agree"
            type="checkbox"
            onUpdate={(event:any)=> {data.info.consent = event; sendUp()}}
          />
        </Row>
      </Divider>
      <Row margin="10px 0px 10px 0px">
        <Action
          isActive={isComplete}
          label="Next"
          margin="0px 20px 0px auto"
          onClick={()=> props.slideForrward()}
        />
      </Row>
    </div>
  )
}

function Divider(props:any){

  const {subtext} = props;

  const container = {
    color: "var(--color-contrast-higher)",
    fontSize: "16px",
    padding: "18px 38px 18px 38px",
    borderBottom: "1px solid var(--color-contrast-low)",
    textAlign: "center",
    lineHeight: "22px"
  } as React.CSSProperties;

  return(
    <div style={container}>
      {subtext}
      {/* <br/> */}
      {props.children}
    </div>
  )
}

function Item(props:any){
  const container = {
    color: "var(--color-contrast-higher)",
    fontSize: "14px",
    textAlign: "left",
    lineHeight: "22px",
    display: "flex",

  } as React.CSSProperties;

  const title = {
    fontWeight: "bold",
    width: "100px"

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
