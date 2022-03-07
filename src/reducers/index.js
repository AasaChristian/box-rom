
import {Fetch_Material_Loading, Fetch_Material_Success, Fetch_Material_Failed, Create_Material} from '../actions/index'


// This is the initial state prior to fetching
const initialState = {
trailers :[],
loads : [],
materials: []   
      };


      export const reducer = (state = initialState, action) => {
        switch (action.type){
          case Fetch_Material_Loading:
        return{
          ...state,
          loading: true
        };
      case Fetch_Material_Success:
        return {
          ...state,
          materials: action.payload,
          loading: false
        };
        // case Fetch_Material_Failed:
        //   return {
        //     ...state,
        //     loading: false,
        //     error: action.payload
        //   };
      case Create_Material:
          // return {
          //   ...state,
          //   exercises: [...state.exercises, action.payload[0]]
          // };
          console.log('create material reducer')
          return state;

            default:
                return state;
        }

      }