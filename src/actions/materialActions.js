import axios from 'axios'
import {axiosAddress} from '../AxiosAddress'

import {Fetch_Material_Success, Fetch_Material_Failed, Fetch_Material_Loading, Create_Material, Delete_Material} from './index'

export const fetchMaterial = () => dispatch => {
    dispatch({type: Fetch_Material_Loading})
    axios.get(`${axiosAddress}/api/materials/all`)
    .then(res => dispatch({type: Fetch_Material_Success, payload: res.data}))
    .catch(error =>{
        dispatch({type: Fetch_Material_Failed, payload: 'error'})
        console.log(error, "fetchMaterial action error")
    })
            
    };

export const createMaterial = (material) => dispatch => {
    console.log(material, "material; action")
        axios.post(`${axiosAddress}/api/materials/add`, material)
        .then(res =>  dispatch({type: Create_Material, payload: res.data}))
        .catch(error => console.log(error, "createMaterial action error"))
    }

export const deleteMaterial = (id) => dispatch => {
    axios.delete(`${axiosAddress}/api/materials/remove/${id}`)
    .then(res => {
        console.log("delete action")
        dispatch({type: Delete_Material, payload: id})
    }).catch(error => console.log(error, "deleteMaterial action error"))
}