import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchMaterial, createMaterial, deleteMaterial } from '../../actions/materialActions';
import Pulse from 'react-reveal/Pulse';


function MaterialBoard(props){
const {materials, createNewMaterial, fetchMaterial, deleteMaterial, loading} = props

useEffect(() => {
    fetchMaterial()
}, [])

console.log(materials, "is it materials?")

const [newMaterial, setNewMaterial] = useState({
    tagNumber: " ",
    materialname: " "
})
const [selectedMaterial, setSelectedMaterial] = useState(0)

const handleChange = e => {
    setNewMaterial({...newMaterial, [e.target.name]: e.target.value})
}





const sendMaterial = (e) => {
    e.preventDefault()
    const newMaterialObj = {
        tagNumber: newMaterial.tagNumber,
        materialname: newMaterial.materialname
    }
    createNewMaterial(newMaterialObj)
    setNewMaterial({
        tagNumber: " ",
        materialname: " "
    })
}
    return(
        <div style={{display: 'flex',flexDirection: 'column ', alignItems: 'center', width: '100%'}}>
            <section>
                <h1>Materials</h1>
            </section>
            <div style={{display: 'flex', justifyContent: 'center'}}>   
                    {loading &&  <Pulse  delay={500}  forever={true} >
                    <h1 style={{color: 'black', fontSize: '500%', position: "fixed"}}>LOADING</h1>
                </Pulse >}</div>
            <section>
                <div><h3>Create New Material</h3></div>
                <div><h3>{newMaterial.tagNumber}</h3> <h3>{newMaterial.materialname}</h3> </div>

                <div>
                    <form onSubmit={sendMaterial}>
                    <input type="text" name="tagNumber" placeholder="TagNumber" value={newMaterial.tagNumber} onChange={handleChange} />
                    <input type="text" name="materialname" placeholder="MaterialName" value={newMaterial.materialname} onChange={handleChange} />
                    <button>ADD</button>

                    </form>
                </div>

            </section>
            <section style={{display: 'flex', flexDirection: 'column ', justifyContent: 'space-around', width: '70%', height: "100%"}}>
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row',  width: "100%"}}> 
                       <h4 style={{borderBottom: "2px solid black"}}>Tag #</h4>
                       <h4 style={{borderBottom: "2px solid black"}}>Name</h4>
                   </div>
                {materials.map((material) => {
                    const {materialname, tagNumber, id} = material

                    const selectMaterial = e => {
                        e.preventDefault()
                        if (selectedMaterial === null){
                            setSelectedMaterial(id)
                        } else{
                            setSelectedMaterial(null)
                        } 
                    
                    }
                    const removeMaterial = (e) => {
                        e.preventDefault()
                        deleteMaterial(id)
                        }
                    return(
                <section key={id} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row',  width: "100%"} | selectedMaterial === id? {backgroundColor: '#07fcff1a' , borderRadius: "10%"}: {display: 'inherit'}} onClick={selectMaterial} >
                   <section style={{display:'flex', justifyContent: 'space-between', width: "100%"}}>                    
                    <div><h5>{tagNumber}</h5></div>
                    <div><h5>{materialname}</h5></div>
                    </section>
                   <section style={ selectedMaterial === id?  {display:'flex', justifyContent: 'center'}: {display: 'none'}}>
                       <form>
                           <button  onClick={removeMaterial}>Delete</button>
                       </form>
                       </section> 

                </section>                    )
                })}
            </section>

        </div>
    )
};

const mapStateToProps = state => {
    return {
          materials: state.materials,
          loading: state.loading
    };
  };

export default connect(mapStateToProps, {fetchMaterial, createMaterial, deleteMaterial})(MaterialBoard);
