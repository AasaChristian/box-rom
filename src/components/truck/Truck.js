import Load from "./Load";


function Truck() {
    // yard dummy data
    const yard = [
        {trailer: 14356,
        load:[ [242,8]]},
        {trailer: 202055,
        load:[ [593,5],[528, 10]]}
    ]
  return (

    <div>
        {/* mao thrue the yard object container all trailers and load */}
        {yard.map((x, i) => {
            console.log(x, "x")

            return(
                // key is array index
                <section key = {i} style={{display: 'flex', justifyContent: "center"}}>
                    {/* x.tralor is the trailer id */}
                    <div style={{border: "solid black 3px", width: "50%", display: 'flex', justifyContent: "center"}}><h1>Trailer {x.trailer}</h1> </div> 
                    {/* Load componenet to map and show each idividual load */}
                    {/* <Load 
                    // each load passed as props to load cmponenet
                    load = {x.load}
                    />                   */}
                </section>
            )
        })}
    </div>
  );
}

export default Truck;
