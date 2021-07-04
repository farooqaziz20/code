import {FETCH_DATA,filter,all,filter_with_input} from '../.././constant/types' ;
import {db} from '../.././config/firebase';






export const fetchProducts = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let products = await db.collection("noman").get();
      let data = [];
      products.forEach((doc) => {
        data.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: FETCH_DATA,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };




  export const filterProduct=(categ)=>{
      return{
          type:filter,
          payload:categ
      }
  }




  export const allProducts = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let products = await db.collection("noman").get();
      let data = [];
      products.forEach((doc) => {
        data.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: all,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };




  export const filterByInput=(categ)=>{
    return{
      type:filter_with_input,
      payload:categ
    }

}









 