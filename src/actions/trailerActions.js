import axios from 'axios'
import {axiosAddress} from '../AxiosAddress'

import {Fetch_Trailer_Success, Fetch_Trailer_Failed, Fetch_Trailer_Loading, Create_Trailer, Delete_Trailer} from './index'

export const fetchTrailer = () => dispatch => {
    dispatch({type: Fetch_Trailer_Loading})
    axios.get(`${axiosAddress}/api/trailers/all`)
    .then(res => dispatch({type: Fetch_Trailer_Success, payload: res.data}))
    .catch(error =>{
        dispatch({type: Fetch_Trailer_Failed, payload: 'error'})
        console.log(error, "fetchTrailer action error")
    })
            
    };

export const createTrailer = (Trailer) => dispatch => {
    console.log(Trailer, "Trailer; action")
        axios.post(`${axiosAddress}/api/trailers/add`, Trailer)
        .then(res =>  dispatch({type: Create_Trailer, payload: res.data}))
        .catch(error => console.log(error, "createTrailer action error"))
    }

export const deleteTrailer = (id) => dispatch => {
    axios.delete(`${axiosAddress}/api/trailers/remove/${id}`)
    .then(res => {
        console.log("delete action")
        dispatch({type: Delete_Trailer, payload: id})
    }).catch(error => console.log(error, "deleteTrailer action error"))
}