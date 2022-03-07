import React, { useEffect, useState } from 'react'

function MaterialBoard(props){
const {materials, createNewMaterial} = props

const [newMaterial, setNewMaterial] = useState({
    tagNumber: " ",
    materialname: " "
})

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
                    const {materialname, tagNumber} = material
                    return(
                <section style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>{tagNumber}</div>
                    <div>{materialname}</div>
                </section>                    )
                })}
            </section>

        </div>
    )
};

export default MaterialBoard