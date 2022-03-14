import { useState, useEffect } from "react";
import Load from "./Load";
import { connect } from "react-redux";
import {fetchTrailer, createTrailer, deleteTrailer} from "../../actions/trailerActions"
import UpdateBoard from "../MultiUse/updateBoard";
import CreateNew from "../MultiUse/createNew";


function TrailerBoard(props) {
  const {trailers, loading, createNewTrailer, fetchTrailer, deleteTrailer} = props

  useEffect(() => {
    fetchTrailer()
}, [])

  const [selectedTrailer, setSelectedTrailer] = useState(0);

    const [newTrailer, setNewTrailer] = useState({
        tagNumber: "",
        name: "",
      }); 


      const handleChange = (e) => {
        setNewTrailer({ ...newTrailer, [e.target.name]: e.target.value });
      };
    
      const sendTrailer = (e) => {
        e.preventDefault();
        const newTrailerObj = {
          tagNumber: newTrailer.tagNumber,
          name: newTrailer.name,
        };
        createNewTrailer(newTrailerObj);
        setNewTrailer({
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
createNewTrailer={createNewTrailer}
send={sendTrailer}
title='Trailers'
newTable={newTrailer}
/>
  </section>

  <section style={{display: 'flex', justifyContent: 'center'}}>
  <UpdateBoard
table={trailers}
deleteTable={deleteTrailer}
selected={selectedTrailer}
setSelected={setSelectedTrailer}
/> 
</section>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    trailers: state.trailers,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  fetchTrailer,
  createTrailer,
  deleteTrailer,
})(TrailerBoard);



