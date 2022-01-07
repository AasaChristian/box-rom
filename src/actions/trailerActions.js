import axios from 'axios'


export const fetchTrucks = () => {
    dispatch({type: Fetch_Trucks_Loading})
}


// export const fetchExercise = () => dispatch => {
//     dispatch({type: Fetch_Exercise_Loading})
//     axios.get(`${axiosAddress}/api/exercises/all`)
//     .then(res => dispatch({type: Fetch_Exercise_Success, payload: res.data}))
//     .catch(error =>{
//         dispatch({type: Fetch_Exercise_Failed, payload: 'error'})
//         console.log(error, "fetchExercie action error")
//     })
            
//     };
