import React, {useState, useEffect} from 'react'
import Header from '../Header';
import Row from '../Row';
import Input from '../Input';
import Action from '../Action';
// import Helper from './Helper';

export default function Psychometric(props:any) {

  const data = props.data;
  const[isComplete, setIsComplete] = useState(data.psichology.isComplete);

  function sendUp(){
    if(!data.psichology.statements.map((value:any)=> value.rating === null).includes(true)){
      data.psichology.isComplete = true;
      setIsComplete(true);
    }
    else{
      data.psichology.isComplete = false;
      setIsComplete(false);
    }

    props.update(data);
  }

  const container = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  } as React.CSSProperties;

  const header = {
    width: "100%",
    height: "42px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "2px solid var(--color-contrast-low)"
  } as React.CSSProperties;

  const content = {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    borderBottom: "1px solid var(--color-contrast-low)"
  } as React.CSSProperties;


  function updateValues(event:any){

    const key = data.psichology.statements[event.identifier].key;
    const rating = event.rating;

    const symbol = key.slice(0,1);
    const trait = key.slice(1,2);
    const place = key.slice(2,3);



    let result;

    if(symbol === "-"){
      result = 6 - rating;
    }
    else {
      result = rating;
    }



    // switch (trait) {
    //   case "O":

    //       data.psichology.score.openess.average += result;

    //       if(place === "1"){data.psichology.score.openess.O1 += result;}
    //       else if (place === "2"){data.psichology.score.openess.O2 += result;}
    //       else if (place === "3"){data.psichology.score.openess.O3 += result;}
    //       else if (place === "4"){data.psichology.score.openess.O4 += result;}
    //       else if (place === "5"){data.psichology.score.openess.O5 += result;}
    //       else if (place === "6"){data.psichology.score.openess.O6 += result;}
    //     break;

    //   case "C":

    //     data.psichology.score.concienciousness.average += result;

    //     if(place === "1"){data.psichology.score.concienciousness.C1 += result;}
    //     else if (place === "2"){data.psichology.score.concienciousness.C2 += result;}
    //     else if (place === "3"){data.psichology.score.concienciousness.C3 += result;}
    //     else if (place === "4"){data.psichology.score.concienciousness.C4 += result;}
    //     else if (place === "5"){data.psichology.score.concienciousness.C5 += result;}
    //     else if (place === "6"){data.psichology.score.concienciousness.C6 += result;}
    //   break;




    //   default:
    //     break;
    // }

    console.log("for key: " + key + "; rating: " + rating + "; result: " + result);

    // console.log(data.psichology.statements)

    data.psichology.statements[event.identifier].result = result;
    data.psichology.statements[event.identifier].rating = rating;

    sendUp();
  }


  return (
    <div style={container}>
      <Header
      isClosed={true}
      text="Trait Personality"

      collapsable={true}
      >

      The following pages contain phrases describing people's behaviors.
      Please use the rating scale next to each phrase to describe how accurately each statement describes you.
      <br/>
      <br/>

      Describe yourself as you generally are now, not as you wish to be in the future.
      Describe yourself as you honestly see yourself, in relation to other people you know of the same sex as you are, and roughly your same age.
      So that you can describe yourself in an honest manner, your responses will be kept in absolute confidence.
      Please read each statement carefully, and then click the circle that corresponds to the accuracy of the statement. After you finished please click 'Next' to advance.
      This part of the questionnaire usually takes about 15 minutes to complete.


      </Header>


      <div style={header}>
        <Divider width="5%" borderRight={true}> NO. </Divider>
        <Divider width="40%" borderRight={true}> STATEMENT </Divider>
        <Divider width="11%" borderRight={true}> VERY ACCURATE </Divider>
        <Divider width="11%" borderRight={true}> ACCURATE </Divider>
        <Divider width="11%" borderRight={true}> NEUTRAL </Divider>
        <Divider width="11%" borderRight={true}> INACCURATE </Divider>
        <Divider width="11%"> VERY INACCURATE </Divider>
        <Divider width="18px"/>
      </div>
      <div style={content}>
        {data.psichology.statements.map((item:any, index:any)=> <Item key={index} item={item} onUpdate={(event:any)=> updateValues(event)}/>)}
      </div>

      <Row margin="10px 0px 10px 0px">
        <Action
          isActive={isComplete}
          label="Next"
          margin="0px 0px 0px auto"
          onClick={()=> props.slideForrward()}
        />
      </Row>
    </div>
  )
}

function Item(props:any){

  const[isOver, setIsOver] = useState(false);
  const[global, setGlobal] = useState(props.item.rating);


  const container = {
    width: "100%",
    height: "42px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid var(--color-contrast-lower)",
    backgroundColor: isOver ? "var(--color-hilight)" : "var(--color-contrast-lowest)"
  } as React.CSSProperties;

  const statement = {
    fontSize: "12px"
  } as React.CSSProperties;

  return(
    <div style={container} onMouseEnter={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)}>
      <Divider width="5%" borderRight={true}> {props.item.index + 1} </Divider>
      <Divider width="40%" borderRight={true}> <b style={statement}>{props.item.statement}</b> </Divider>
      <Divider width="11%" borderRight={true}> <Input size="28px" identifier={props.item.index} value={1} isActive={global===1} onUpdate={(event:any)=> {setGlobal(event.rating); props.onUpdate(event)}} type="radio"/> </Divider>
      <Divider width="11%" borderRight={true}> <Input size="28px" identifier={props.item.index} value={2} isActive={global===2} onUpdate={(event:any)=> {setGlobal(event.rating); props.onUpdate(event)}} type="radio"/> </Divider>
      <Divider width="11%" borderRight={true}> <Input size="28px" identifier={props.item.index} value={3} isActive={global===3} onUpdate={(event:any)=> {setGlobal(event.rating); props.onUpdate(event)}} type="radio"/> </Divider>
      <Divider width="11%" borderRight={true}> <Input size="28px" identifier={props.item.index} value={4} isActive={global===4} onUpdate={(event:any)=> {setGlobal(event.rating); props.onUpdate(event)}} type="radio"/> </Divider>
      <Divider width="11%">                    <Input size="28px" identifier={props.item.index} value={5} isActive={global===5} onUpdate={(event:any)=> {setGlobal(event.rating); props.onUpdate(event)}} type="radio"/> </Divider>
    </div>
  )
}

function Divider(props:any) {

  const divider = {
    width: props.width,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--color-contrast-higher)",
    fontSize: "11px",
    borderRight: props.borderRight ? "1px solid var(--color-contrast-lower)" : "none",
    borderLeft: props.borderLeft ? "1px solid var(--color-contrast-lower)" : "none"

  } as React.CSSProperties;

  return(
    <div style={divider}>
      {props.children}
    </div>
  )
}
