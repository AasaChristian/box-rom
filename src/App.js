import './App.css';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Trailer from './components/trailer/Trailer';
import MaterialBoard from './components/Materials/MaterialBoard'
import { fetchMaterial, createMaterial } from './actions/materialActions';

function App(props) {

  const {materials, fetchMaterial, createMaterial} = props
  useEffect(() => {
    fetchMaterial()
}, [createMaterial])

console.log(materials, "materials")


  return (
    <div className="App">
      <section>
        <h1>Box Room Assist Tool</h1>
        </section>
{/* <Trailer
/> */}

<MaterialBoard
materials = {materials}
/>


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
