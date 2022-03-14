
import { useState, useEffect } from "react";
import Pulse from "react-reveal/Pulse";


function CreateNew(props) {
const {title, newTable, loading, handleChange, send} = props

  return (

<div><section>
<h1>{title}</h1>
</section>
<div style={{ display: "flex", justifyContent: "center" }}>
{loading && (
  <Pulse delay={500} forever={true}>
    <h1 style={{ color: "black", fontSize: "500%", position: "fixed" }}>
      LOADING
    </h1>
  </Pulse>
)}
</div>
<section>
<div>
  <h3>Create New {title}</h3>
</div>
<div style={{ display: "flex", position: "fixed" }}>
  <h3>{newTable.tagNumber}</h3> <h3>{newTable.name}</h3>{" "}
</div>

<div>
  <form onSubmit={send}>
    <input
      type="text"
      name="tagNumber"
      placeholder="TagNumber"
      value={newTable.tagNumber}
      onChange={handleChange}
    />
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={newTable.name}
      onChange={handleChange}
    />
    <button>ADD</button>
  </form>
</div>
</section></div>

  );

};



export default CreateNew









