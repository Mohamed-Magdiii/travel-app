import {CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    GET_CUSTOMERS,
    GET_CUSTOMER_BYID,
    DELETE_CUSTOMER} from './types'
import axios from 'axios'


export const fetchAllCustomers = ()=>async (dispatch) =>{
    try { 
const customers = await axios.get(`${process.env.REACT_APP_API_URL}/customer`)
        dispatch({
            type:GET_CUSTOMERS,
            payload:customers.data.result
        })
} catch (error) {
        console.log(error);
    }
}


// export const createNewProduct = (form)=>async (dispatch) =>{
//     try { 
//         console.log(form);
// const products = await axios.post(`${process.env.REACT_APP_API_URL}/product`,form )
//         dispatch({
//             type:CREATE_PRODUCT,
//             payload:products.data.result
//         })
// } catch (error) {
//         console.log(error);
//     }
// }


// export const updateProduct = (form , id)=>async (dispatch) =>{
//     try { 
//         console.log(form);
// const products = await axios.patch(`${process.env.REACT_APP_API_URL}/product/${id}`,form )
//         dispatch({
//             type:UPDATE_PRODUCT,
//             payload:products.data.result
//         })
// } catch (error) {
//         console.log(error);
//     }
// }


export const getCustomerById = (id)=>async (dispatch) =>{
    try { 
const customer = await axios.get(`${process.env.REACT_APP_API_URL}/customer/find/${id}`)
console.log(customer);
        dispatch({
            type:GET_CUSTOMER_BYID,
            payload:customer.data.result
        })
} catch (error) {
        console.log(error);
    }
}


// export const deleteProductId = (id)=>async (dispatch) =>{
//     try { 
//  await axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}` )
//         dispatch({
//             type:DELETE_PRODUCT,
//             payload:id
//         })
// } catch (error) {
//         console.log(error);
//     }
// }
