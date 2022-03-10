import './App.css';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Trailer from './components/trailer/Trailer';
import MaterialBoard from './components/Materials/MaterialBoard'
import ImgInput from './components/ImgInput'
import { fetchMaterial, createMaterial } from './actions/materialActions';

function App(props) {

  const {materials, fetchMaterial, createMaterial} = props

  const createNewMaterial = ((newMaterial) => {
    createMaterial(newMaterial)
  })

//   useEffect(() => {
//     fetchMaterial()
// }, [])

console.log(materials, "materials")


  return (
    <div className="App">
      <section>
        <h1>Box Room Assist Tool</h1>
        </section>
{/* <Trailer
/> */}

<MaterialBoard
createNewMaterial = {createNewMaterial}
/>
{/* <ImgInput/> */}


    </div>
  );

};

const mapStateToProps = state => {
  return {
        materials: state.materials,
        loading: state.loading
  };
};

export default connect(mapStateToProps, {fetchMaterial, createMaterial})(App);
