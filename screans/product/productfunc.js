import BASE_URL from "../../api";
import axios from "axios";
export const getAllproducts = (dispatch) => {
    axios
        .get(`${BASE_URL}/product/api/getallproducts`)
        .then((res) => {
            const { products } = res.data;
            console.log(products);
            dispatch({ type: "ADD_PRODUCTS", payload: products })
        })
        .catch((err) => console.log(err));
};