import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchMaterial,
  createMaterial,
  deleteMaterial,
} from "../../actions/materialActions";
import UpdateBoard from "../MultiUse/updateBoard";
import CreateNew from "../MultiUse/createNew";

function MaterialBoard(props) {
  const {
    materials,
    createNewMaterial,
    fetchMaterial,
    deleteMaterial,
    loading,
  } = props;

  useEffect(() => {
    fetchMaterial();
  }, []);

  console.log(materials, "is it materials?");

  const [newMaterial, setNewMaterial] = useState({
    tagNumber: "",
    name: "",
  });
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const handleChange = (e) => {
    setNewMaterial({ ...newMaterial, [e.target.name]: e.target.value });
  };

  const sendMaterial = (e) => {
    e.preventDefault();
    const newMaterialObj = {
      tagNumber: newMaterial.tagNumber,
      materialname: newMaterial.name,
    };
    createNewMaterial(newMaterialObj);
    setNewMaterial({
      tagNumber: "",
      name: "",
    });
  };
  return (
    
    <div > 
<section>
<CreateNew
loading={loading}
handleChange={handleChange}
createNewTrailer={createNewMaterial}
send={sendMaterial}
title='Materials'
newTable={newMaterial}
/>
  </section>

  <section style={{display: 'flex', justifyContent: 'center'}}>
  <UpdateBoard
table={materials}
deleteTable={deleteMaterial}
selected={selectedMaterial}
setSelected={setSelectedMaterial}
/> 
</section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    materials: state.materials,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  fetchMaterial,
  createMaterial,
  deleteMaterial,
})(MaterialBoard);
