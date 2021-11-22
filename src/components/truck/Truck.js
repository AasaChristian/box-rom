

function Truck() {
    const yard = [
        {trailer: 14356,
        load:[ [242,8]]},
        {trailer: 202055,
        load:[ [593,5],[528, 10]]}
    ]
  return (

    <div>
        {yard.map((x) => {
            console.log(x, "x")

            return(
                <section>
                    <div>Trailor {x.trailer} </div>                   
                </section>
            )
        })}
    </div>
  );
}

export default Truck;
