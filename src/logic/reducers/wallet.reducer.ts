import {
    GET_BALANCE,
    LOGIN_CHECK,
    SIGNUP_CHECK,
    CREATE_COLLECTION
  } from "../actions/constants";
  
  type State = {
    amount:number,
    loginData:string[],
   signUpData:string[],
   createCollectionData:object
};
 const initialState:State = {
   amount: 0,
   signUpData:[],
   loginData:[],
   createCollectionData:[]
 };

  const walletReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_BALANCE:
        return {
          ...state,
          amount: action.amount,
        };
        case LOGIN_CHECK:{
          console.log("inside of login check ",action)
           return {
          /*email:action.payload.email,
          password:action.payload.password*/
          loginData:action.payload
         }
        }

        case SIGNUP_CHECK:{
          
          return{
             /*email:action.payload.email,
             password:action.payload.password,
             confirmpassword:action.payload.confirmpassword,
             name:action.payload.name,
             mobilenumber:action.payload.mobilenumber
          */
         signUpData:action.payload

          }
        }
          case CREATE_COLLECTION:{
        console.log("data inside collection reducer",action.payload)
            return{
               /*email:action.payload.email,
               password:action.payload.password,
               confirmpassword:action.payload.confirmpassword,
               name:action.payload.name,
               mobilenumber:action.payload.mobilenumber
            */
            createCollectionData:action.payload

            }
          }

      default:
        return state;
    }
  };
  
  export default walletReducer;
  