import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  // const boxRef = useRef()

  // useGSAP(()=>{
  //   gsap.to(boxRef.current,{
  //     x:600,
  //   })
  // })

  useGSAP(()=>{
    gsap.to(".box",{
      x:1000,
      delay:1,
      duration:2,
      rotate:360,
      backgroundColor:"blue"
    })
  })
  return <div>
    {/* <div ref={boxRef} className="box"></div> */}
    <div className="box"></div>
  </div>;
};

export default App;
