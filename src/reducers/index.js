
import {Fetch_Material_Loading, Fetch_Material_Success, Fetch_Material_Failed, Create_Material, Delete_Material} from '../actions/index'


// This is the initial state prior to fetching
const initialState = {
trailers :[],
loads : [],
materials: []   
      };


      export const reducer = (state = initialState, action) => {
        console.log(action.payload, "reducer payload")

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
          return {
            ...state,
            materials: [...state.materials, action.payload[0]]
          };
          case Delete_Material:
            return {
              ...state,
              materials: [...state.materials.filter(material => material.id !== action.payload)]
            };
            default:
                return state;
        }

      }