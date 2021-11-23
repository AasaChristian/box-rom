

function Load(props) {
const {load} = props
console.log(load, "load load")
  return (

<section>
    {load.map((x, i) => {
        console.log(x, "x load")

        return(
            <div key = {i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <h1> Id {x[0]}</h1>
                <h1> Count {x[1]}</h1>
            </div>
        )
    })}
</section>
  );
}

export default Load;
