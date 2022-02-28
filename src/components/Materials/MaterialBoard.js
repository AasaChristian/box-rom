import React, { useEffect, useState } from 'react'

function MaterialBoard(props){
const {materials} = props
    return(
        <div style={{display: 'flex',flexDirection: 'column ', alignItems: 'center', width: '100%', height: '500px'}}>
            <section>
                <h1>Materials</h1>
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