import React, {useState} from 'react';
import './App.global.css';
import Container from './Container';
import Completition from './Completition'
import Content from './Content';
import Aesthetics from './pages/Aesthetics';
import Bar from './Bar';
import Button from './Button';
import Info from './pages/Info';
import Psychometric from './pages/Psychometric';
import General from './pages/General';
import start_data from './Data.json'
import Popup from './Popup';
import fs from 'fs'
import About from './pages/About'

export default function App() {

  const data = start_data;


  //  0 -> Info
  //  1 -> General
  //  2 -> Personality
  //  3 -> Style
  //  4 -> Complexity
  const[slide, setSlide] = useState(0);
  const[isAboutOpen, setIsAboutOpen] = useState(true);
  // const[isShareOpen, setIsAboutOpen] = useState(true);

  function setSlideValue(value:any){
    if(slide === 0 && value === -1){
      setSlide(slide);
    }
    else if(slide === 3 && value === 1){
      setSlide(slide);
    }
    else{
      setSlide(slide + value);
    }
  }

  function updateData(initial_data:any, updated_data:any){
    initial_data.questionnaire = updated_data;
  }


  function packageData(data:any, name:any){
    let data_package = JSON.stringify(data);

    if (name === null){
      name = "package_data"
    }

    fs.writeFileSync(name + '.json', data_package);
  }


  return (
    <Container>
      <Completition
        // data={completition}
        slide={slide}
        slideBack={()=> setSlideValue(-1)}
        slideForrward={()=> setSlideValue(1)}
        >
        <Button icon="about" size="32px" onClick={()=> setIsAboutOpen(true)} isDisabled={false}/>
        <Button icon="save" size="32px" onClick={()=> null} isDisabled={true}/>
        <Button icon="package" size="32px" onClick={()=> packageData(data, data.questionnaire.general.id)} isDisabled={false}/>
      </Completition>

      <Content>
        {
            slide === 0 ? <Info data={data.questionnaire} slideForrward={()=> setSlideValue(1)} update={(updated_data:any)=> updateData(data, updated_data)}/>
          : slide === 1 ? <General data={data.questionnaire} slideBack={()=> setSlideValue(-1)} slideForrward={()=> setSlideValue(1)} update={(updated_data:any)=> updateData(data, updated_data)}/>
          : slide === 2 ? <Psychometric data={data.questionnaire} slideBack={()=> setSlideValue(-1)} slideForrward={()=> setSlideValue(1)} update={(updated_data:any)=> updateData(data, updated_data)}/>
          : slide === 3 ? <Aesthetics data={data.questionnaire} slideBack={()=> setSlideValue(-1)} slideForrward={()=> packageData(data, data.questionnaire.general.id)} update={(updated_data:any)=> updateData(data, updated_data)}/>
          // : slide === 4 ? <Complexity data={data.questionnaire} slideBack={()=> setSlideValue(-1)} update={(updated_data:any)=> updateData(data, updated_data)}/>
          // : slide === 5 ? <End slideBack={()=> setSlideValue(-1)} data={data.questionnaire} update={(updated_data:any)=> updateData(data, updated_data)}/>
          : null
        }


        <Popup isOpen={isAboutOpen} onClick={()=> setIsAboutOpen(false)}>
          <About
            onClick={()=> setIsAboutOpen(false)}
            isOpen={isAboutOpen}
          />
        </Popup>
        <Popup isOpen={false} onClick={()=> null}>


        </Popup>
      </Content>

      <Bar stage={slide}/>
    </Container>
  );
}


function About2(props:any){

  const canvas = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor:"var(--color-contrast-lowest)",
  } as React.CSSProperties;

  const wrapper = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    top: "0px",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(200,200,200,0.4)"
  } as React.CSSProperties;

  const container = {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "calc(100% - 44px)",
    height: "calc(100% - 38px)",
    borderRadius: "8px",
    border: "4px solid var(--color-contrast-medium)",
    backgroundColor: "var(--color-contrast-lowest)"
  } as React.CSSProperties;

  const bar = {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    width: "100%",
    height: "24px",
    backgroundColor: "var(--color-contrast-medium)"
  } as React.CSSProperties;

  const icon = {
    height: "18px",
    width: "18px",
    fill: "var(--color-contrast-lowest)",
    preserveAspectRatio: "xMidYMid meet",
  } as React.CSSProperties;

  const button = {
    width:"22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border:"none",
    cursor: "pointer",
    marginLeft: "auto"
  } as React.CSSProperties;

  return(
    props.isOpen ?
    <div style={wrapper}>
      <div style={container}>
        <div style={bar}>
          <button type="button" style={button} onClick={()=> props.onClick()}>
            <svg style={icon} viewBox="0 0 24 24"><path d="M14.73,12.61l6.47,6.47a1.11,1.11,0,0,1,0,1.58l-.54.54a1.11,1.11,0,0,1-1.58,0l-6.47-6.47a.86.86,0,0,0-1.22,0L4.92,21.2a1.11,1.11,0,0,1-1.58,0l-.54-.54a1.11,1.11,0,0,1,0-1.58l6.47-6.47a.86.86,0,0,0,0-1.22L2.8,4.92a1.11,1.11,0,0,1,0-1.58l.54-.54a1.11,1.11,0,0,1,1.58,0l6.47,6.47a.86.86,0,0,0,1.22,0L19.08,2.8a1.11,1.11,0,0,1,1.58,0l.54.54a1.11,1.11,0,0,1,0,1.58l-6.47,6.47A.86.86,0,0,0,14.73,12.61Z"/></svg>
          </button>
        </div>


      </div>
    </div>


    : null
  )
}
