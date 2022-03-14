
import {Fetch_Material_Loading, Fetch_Material_Success, Fetch_Material_Failed, Create_Material, Delete_Material, Fetch_Trailer_Loading, Fetch_Trailer_Success, Create_Trailer, Delete_Trailer} from '../actions/index'


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

            case Fetch_Trailer_Loading:
              return{
                ...state,
                loading: true
              };
            case Fetch_Trailer_Success:
              return {
                ...state,
                trailers: action.payload,
                loading: false
              };
        case Create_Trailer:
                return {
                  ...state,
                  trailers: [...state.trailers, action.payload[0]]
                };
        case Delete_Trailer:
            return {
              ...state,
              trailers: [...state.trailers.filter(trailer => trailer.id !== action.payload)]
            };
            default:
                return state;
        }

      }