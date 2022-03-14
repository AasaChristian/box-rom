import './App.css';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import TrailerBoard from './components/trailer/TrailerBoard';
import MaterialBoard from './components/Materials/MaterialBoard'
import ImgInput from './components/ImgInput'
import { fetchMaterial, createMaterial } from './actions/materialActions';
import {  fetchTrailer, createTrailer } from './actions/trailerActions';


function App(props) {

  const {createMaterial, createTrailer} = props

  const createNewMaterial = ((newMaterial) => {
    createMaterial(newMaterial)
  })

  const createNewTrailer = ((newTrailer) => {
    createTrailer(newTrailer)
  })

  return (
    <div className="App">
      <section>
        <h1>Box Room Assist Tool</h1>
        </section>

        
<TrailerBoard
createNewTrailer={createNewTrailer}
/>

<MaterialBoard
createNewMaterial = {createNewMaterial}
/>
{/* <ImgInput/> */}


    </div>
  );

};

const mapStateToProps = state => {
  return {
        loading: state.loading
  };
};

export default connect(mapStateToProps, { createMaterial, createTrailer})(App);
