import { useState } from "react";
import Load from "./Load";


function Truck(props) {
const [selectedTrailer, setSelectedTrailer] = useState(0)
    // yard dummy data
    const yard = [
        {trailer: 14356,
        load:[ [242,8]]},
        {trailer: 202055,
        load:[ [593,5],[528, 10]]}
    ]

    const [showTrailerDet, setShowTrailerDet] = useState(null)
 

  return (

    <div>
        {/* mao thrue the yard object container all trailers and load */}
        {yard.map((x, i) => {
            console.log(x, "x")

            return(
                // key is array index
                <section key = {i} style={{display: 'flex', justifyContent: "center"}}>
                    {/* x.tralor is the trailer id */}
                    <div style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
                        <div style={{border: "solid black 3px", display: 'flex', justifyContent: "center", borderRadius: '15%'}} onClick={(e) => {
    e.preventDefault()
    if (showTrailerDet === null){
        setShowTrailerDet(i)
    } else {
        setShowTrailerDet(null)
    }
}}><h1>Trailer {x.trailer}</h1> </div> 
                    {/* Load componenet to map and show each idividual load */}
                    <div style={showTrailerDet === i? {display: 'initial'}: {display: 'none'}} >  
                        <Load 
                    // each load passed as props to load cmponenet
                    load = {x.load}
                    />  
                    </div>
                  
                    </div>
                                    
                </section>
            )
        })}
    </div>
  );
}

export default Truck;
