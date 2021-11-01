import React, {useState, useEffect} from 'react'

export default function Popup(props:any) {
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
    width: props.width ? props.width : "calc(100% - 44px)",
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


  function useKeyPress(targetKey:any) {

    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []);

    return keyPressed;
  }

  const exitPress = useKeyPress("Escape");

  useEffect(() => {
    if(exitPress){
      props.onClick()
    }
  }, [exitPress])


  return(
    props.isOpen  ?
      <div style={wrapper}>
        <div style={container}>
          <div style={bar}>
            <button type="button" style={button} onClick={()=> props.onClick()}>
              <svg style={icon} viewBox="0 0 24 24"><path d="M14.73,12.61l6.47,6.47a1.11,1.11,0,0,1,0,1.58l-.54.54a1.11,1.11,0,0,1-1.58,0l-6.47-6.47a.86.86,0,0,0-1.22,0L4.92,21.2a1.11,1.11,0,0,1-1.58,0l-.54-.54a1.11,1.11,0,0,1,0-1.58l6.47-6.47a.86.86,0,0,0,0-1.22L2.8,4.92a1.11,1.11,0,0,1,0-1.58l.54-.54a1.11,1.11,0,0,1,1.58,0l6.47,6.47a.86.86,0,0,0,1.22,0L19.08,2.8a1.11,1.11,0,0,1,1.58,0l.54.54a1.11,1.11,0,0,1,0,1.58l-6.47,6.47A.86.86,0,0,0,14.73,12.61Z"/></svg>
            </button>
          </div>
          {props.children}
        </div>
      </div>
    : null
  )
}



