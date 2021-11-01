import React from 'react'
import Action from '../Action';
import Header from '../Header';

export default function Complexity(props:any) {

  const container = {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  } as React.CSSProperties;

  console.log(props.data)

  return (
    <div style={container}>
      <Header
      text="Complexity"
      subtext="Below is a series of sliders that modify the caractheristics of 3D tree, rendered in the container below.
      You are asked to customise your own tree. Please take 2 minutes to ensure get accustomed with the sliders and parameters and 3 minutes for the creation.
      Evaluate your choices at the end by describing the degree of satisfaction with the result."
      />


      <Action
        text="Next"
        isActive={false}
        onClick={()=> props.slideForrward()}
      />


    </div>
  )
}
