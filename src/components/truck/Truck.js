import Load from "./Load";


function Truck() {
    const yard = [
        {trailer: 14356,
        load:[ [242,8]]},
        {trailer: 202055,
        load:[ [593,5],[528, 10]]}
    ]
  return (

    <div>
        {yard.map((x, i) => {
            console.log(x, "x")

            return(
                <section key = {i}>
                    <div><h1>Trailor {x.trailer}</h1> </div> 
                    <Load 
                    load = {x.load}
                    />                  
                </section>
            )
        })}
    </div>
  );
}

export default Truck;
