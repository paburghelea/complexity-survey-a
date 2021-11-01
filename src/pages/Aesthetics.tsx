/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree, DepthTextureProps } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from "three";
import Button from '../Button';
import Header from '../Header';
import { PerspectiveCamera, PositionalAudio, PointerLockControls, Sky, Plane } from '@react-three/drei'
import Input from '../Input';
import Row from '../Row';
import Action from '../Action';
import Helper from '../Helper';
import Popup from '../Popup';
import Status from '../Status';
import Label from '../Label';
// import 'react-dropdown/style.css';

// import { Plane, OrbitControls, Sky } from "drei";

extend({ OrbitControls });

export default function Aesthetics(props:any) {

  const[isComplete, setIsComplete] = useState(props.data.aesthetics.isComplete);
  // const data = props.data;

  const base = {
    parameters:{imageBitmap:""}
  }

  const[currentCanvas, setCurrentCanvas] = useState(base);
  const[isCanvasActive, setIsCanvasActive] = useState(false);
  const[isImageActive, setIsImageActive] = useState(false);


  let data = props.data;

  function validateCompletition(){

    let validity = 0;

    for(let i = 0; i < 18; i++){
      if(!(data.aesthetics.exteriors[i].isValid)){
        validity += 1;
      }
      if(!(data.aesthetics.interiors[i].isValid)){
        validity += 1;
      }
      if(!(data.aesthetics.surfaces[i].isValid)){
        validity += 1;
      }
    }

    if(validity === 0){
      props.data.aesthetics.isComplete = true;
      setIsComplete(true);
    }


  }

  const container = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  } as React.CSSProperties;

  const content = {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    borderBottom:"1px solid var(--color-contrast-low)"
  } as React.CSSProperties;

  const header = {
    width: "100%",
    height: "42px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "2px solid var(--color-contrast-low)"
    // backgroundColor: "var(--color-contrast-lowest)"
  } as React.CSSProperties;

  return (
    <div style={container}>
      <Header
        isClosed={true}
        text="Aesthetic Preferences"
        subtext="The current section collects your preferences in architectural aesthetics. You are asked to.
        Please complete the table below and press next to continue when all items are marked as 'VALID'."
        collapsable={true}
      />
      <div style={header}>
        <Divider width="48px" borderRight={true}> NO. </Divider>
        <Divider width="84px" borderRight={true}> IMAGE </Divider>
        <Divider width="84px" borderRight={true}> 2D VIEW </Divider>
        <Divider width="84px" borderRight={true}> 3D VIEW </Divider>
        <Divider width="148px" borderRight={true}> FAMILIARITY </Divider>
        <Divider width="148px" borderRight={true}> COMPLEXITY </Divider>
        <Divider width="148px" borderRight={true}> BEAUTY </Divider>
        <Divider width="292px"> VALID </Divider>
      </div>
      <div style={content}>
        <Label label="Exteriors"/>
        {data.aesthetics.exteriors.map((item:any, index:any)=> <Item key={index} item={item} update={(event:any)=> [data.aesthetics.exteriors[event.index] = event, console.log(data.aesthetics), validateCompletition()]} openCanvas={(slide:any)=> [setIsCanvasActive(true), setCurrentCanvas(slide)]} openImage={(slide:any)=> [setIsImageActive(true), setCurrentCanvas(slide)]}/>)}
        <Label label="Interiors"/>
        {data.aesthetics.interiors.map((item:any, index:any)=> <Item key={index} item={item} update={(event:any)=> [data.aesthetics.interiors[event.index] = event, validateCompletition()]} openCanvas={(slide:any)=> [setIsCanvasActive(true), setCurrentCanvas(slide)]} openImage={(slide:any)=> [setIsImageActive(true), setCurrentCanvas(slide)]}/>)}
        <Label label="Surfaces"/>
        {data.aesthetics.surfaces.map((item:any, index:any)=> <Item key={index} item={item} update={(event:any)=> [data.aesthetics.surfaces[event.index] = event, validateCompletition()]} openCanvas={(slide:any)=> [setIsCanvasActive(true), setCurrentCanvas(slide)]} openImage={(slide:any)=> [setIsImageActive(true), setCurrentCanvas(slide)]}/>)}
      </div>

      <Row margin="10px 0px 10px 0px">
        <Action
          isActive={isComplete}
          label="Share"
          margin="0px 0px 0px auto"
          onClick={()=> props.slideForrward()}
        />
      </Row>

      <Popup onClick={()=> setIsCanvasActive(false)}  isOpen={isCanvasActive}>
        <Environment current={currentCanvas}/>
      </Popup>
      <Popup width="auto" isOpen={isImageActive} onClick={()=> setIsImageActive(false)}>
        <img style={{height: "calc(100% - 24px)", objectFit: "contain"}} src={currentCanvas.parameters.imageBitmap === null ? "" : currentCanvas.parameters.imageBitmap} alt=""/>
      </Popup>
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

function Item(props:any){


  let data = props.item;

  const[isOver, setIsOver] = useState(false);
  const[isValid, setIsValid] = useState(data.isValid);

  const container = {
    backgroundColor: isOver ? "var(--color-hilight)" : "var(--color-contrast-lowest)",
    width: "100%",
    height: "84px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid var(--color-contrast-lower)"
    // backgroundColor: "var(--color-contrast-lowest)"
  } as React.CSSProperties;

  const image = {
    width: "80px",
    height: "80px",
    overflow: "hidden",
    backgroundColor: "var(--color-contrast-lower)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } as React.CSSProperties;

  const content = {
    objectFit: "contain",
    width: data.parameters.width < data.parameters.height ? "80px" : "unset",
    height: data.parameters.height <= data.parameters.width ?  "80px" : "unset"
  } as React.CSSProperties;

  const options = {
    "complexity": ["","1","2","3","4","5","6","7","8","9","10"],
    "beauty": ["","1","2","3","4","5","6","7","8","9","10"],
    "familiarity": ["","1","2","3","4","5","6","7","8","9","10"]
  };


  function sendUp(){
    if(!(data.beauty === null || data.beauty === "" || data.familiarity === null || data.familiarity === "" || data.complexity === null || data.complexity === "")){
      data.isValid = true;
      setIsValid(true);


    }

    else{
      data.isValid = false;
      setIsValid(false);
    }

    props.update(data);
  }


  return(
    <div style={container} onMouseEnter={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)}>
      <Divider width="48px" borderRight={true}>
        {data.index + 1}
      </Divider>
      <Divider width="84px" borderRight={true}>
        <div style={image}>
          <img src={data.parameters.imageBitmap} alt="" style={content}/>
        </div>
      </Divider>

      <Divider width="84px" borderRight={true}>
        <Button
          onClick={()=> props.openImage(data)}
          icon="2d"
          size="38px"
          borderRadius="0px"
        />
      </Divider>

      <Divider width="84px" borderRight={true}>
        <Button
          onClick={()=> props.openCanvas(data)}
          icon="3d"
          size="38px"
          borderRadius="0px"
        />
      </Divider>

      <Divider width="148px" borderRight={true}>
        <Input options={options.familiarity} type="dropdown" value={data.familiarity} fieldWidth="44px" onUpdate={(event:any)=> {data.familiarity = event; sendUp()}}/>
        <Helper
          text="Consider: 'How familiar does this scene looks?'"
          size="32px"
          borderRadius= "0px 3px 3px 0px"
        />
      </Divider>

      <Divider width="148px" borderRight={true}>
        <Input options={options.complexity} type="dropdown" value={data.complexity} fieldWidth="44px" onUpdate={(event:any)=> {data.complexity = event; sendUp()}}/>
        <Helper
          text="Consider: 'How difficult is this scene to explain?'"
          size="32px"
          borderRadius= "0px 3px 3px 0px"
        />
      </Divider>

      <Divider width="148px" borderRight={true}>
        <Input options={options.beauty} type="dropdown" value={data.beauty} fieldWidth="44px" onUpdate={(event:any)=> {data.beauty = event; sendUp()}}/>
        <Helper
          text="Consider: 'How appealing is this scene?'"
          size="32px"
          borderRadius= "0px 3px 3px 0px"
        />
      </Divider>

      <Divider width="292px" borderRight={false}>
        <Input type="field" fieldWidth="80px" label={false} value={data.reference} disabled={true} onUpdate={()=>null}/>
        <Status
        height="32px"
        width="64px"
        isValid={isValid}
        />
      </Divider>

    </div>
  )
}

function Environment(props:any){

  const canvas = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor:"var(--color-contrast-lowest)",
  } as React.CSSProperties;

  return(
    <Canvas
      style={canvas}
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 0], fov: 60 }}
    >
      <ambientLight/>
      {/* <Sky/> */}
      <pointLight intensity={1} position={[0, props.current.parameters.height, 0]} />
      <Suspense fallback={null}>
        <Geometry item={props.current}></Geometry>
      </Suspense>
      <PointerLockControls />
    </Canvas>
  )
}

function Geometry(props:any){

  console.log(props.item)
  const normalMap = useLoader(THREE.TextureLoader, props.item.parameters.imageNormal);
  const displacementMap = useLoader(THREE.TextureLoader, props.item.parameters.imageDisplacement);
  const colorMap = useLoader(THREE.TextureLoader, props.item.parameters.imageBitmap);


  return (
    <group>
      <Plane
        position={[0, props.item.parameters.height / 2 - props.item.parameters.offset, -props.item.parameters.depth]}
        args={[props.item.parameters.width, props.item.parameters.height, props.item.parameters.width, props.item.parameters.height]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colorMap}
          metalness={0.2}
          normalMap={normalMap}
          displacementMap={displacementMap}
          displacementScale={props.item.parameters.displacementScale}
          displacementBias={props.item.parameters.displacementBias}
        />
      </Plane>
    </group>
  );
};
