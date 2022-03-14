
import { useState, useEffect } from "react";



function UpdateBoard(props) {

  const {deleteTable, table, selected, setSelected} = props


  return (


    <section
style={{
  display: "flex",
  flexDirection: "column ",
  justifyContent: "space-around",
  width: "70%",
  height: "100%",
}}
>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  }}
>
  <h4 style={{ borderBottom: "2px solid black" }}>Tag #</h4>
  <h4 style={{ borderBottom: "2px solid black" }}>Name</h4>
</div>
{table.map((x) => {
  const { name, tagNumber, id } = x;

  const select = (e) => {
    e.preventDefault();
    if (selected === null) {
        setSelected(id);
    } else {
        setSelected(null);
    }
  };
  const remove = (e) => {
    e.preventDefault();
    deleteTable(id);
  };
  return (
    <section
      key={id}
      style={
        {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        } |
        (selected === id)
          ? { backgroundColor: "#07fcff1a", borderRadius: "10%", border: "2px solid #00000038" }
          : { display: "inherit" }
      }
      onClick={select}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <h5>{tagNumber}</h5>
        </div>
        <div>
          <h5>{name}</h5>
        </div>
      </section>
      <section
        style={
          selected === id
            ? { display: "flex", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <form
          style={{width: "100%"}}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            {" "}
            <button onClick={remove}>Delete</button>
            <button >Update</button>
          </div>
        </form>
      </section>
    </section>
  );
})}
</section>

  );

};



export default UpdateBoard




