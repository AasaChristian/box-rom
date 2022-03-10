import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchMaterial, createMaterial, deleteMaterial } from '../../actions/materialActions';


function MaterialBoard(props){
const {materials, createNewMaterial, fetchMaterial, deleteMaterial} = props

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
        <div style={{display: 'flex',flexDirection: 'column ', alignItems: 'center', width: '100%', height: '500px'}}>
            <section>
                <h1>Materials</h1>
            </section>
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
                <section key={id} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row',  width: "100%"} | selectedMaterial === id? {backgroundColor: 'red'}: {display: 'inherit'}} onClick={selectMaterial} >
                   <section style={{display:'flex', justifyContent: 'space-between', width: "100%"}}>                    
                    <div>{tagNumber}</div>
                    <div>{materialname}</div>
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
