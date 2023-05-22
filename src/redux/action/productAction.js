import axios from "axios";
import swal from "sweetalert2";

// Read ( GET )
export const getProduct = () => async (dispatch) => {
  try {
    const result = await axios.get(process.env.REACT_APP_BACKEND + "/products");
    dispatch({ type: "GET_ALL_PRODUCT", payload: result.data.data });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
  }
};

// Get Detail
export const getDetail = (id) => async (dispatch) => {
  try {
    const result = await axios.get(
      process.env.REACT_APP_BACKEND + "/products/" + id
    );
    console.log(result.data.data[0]);
    dispatch({
      type: "GET_DETAIL_PRODUCT",
      payload: result.data.data[0],
    });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
  }
};

// Create
export const createProduct =
  (insertProduct, imageProduct) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let inputForm = new FormData();
      inputForm.append("name", insertProduct.name);
      inputForm.append("stock", insertProduct.stock);
      inputForm.append("price", insertProduct.price);
      inputForm.append("condition", insertProduct.condition);
      inputForm.append("description", insertProduct.description);
      inputForm.append("image", imageProduct);
      axios
        .post(`https://balanjo-api.cyclic.app/product`, inputForm, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          swal.fire({
            title: "Product Added",
            text: `New product have been added`,
            icon: "success",
          });
        });
      dispatch({ type: "CREATE_PRODUCT", payload: "success" });
    } catch (err) {
      swal.fire({
        text: err.response.data.message,
        icon: "warning",
      });
    }
  };

// Update
export const updateProduct = (detailProduct, image) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("product_id", detailProduct.product_id);
    formData.append("name", detailProduct.name);
    formData.append("stock", detailProduct.stock);
    formData.append("price", detailProduct.price);
    formData.append("condition", detailProduct.condition);
    formData.append("description", detailProduct.description);
    formData.append("image", image, image.name);

    const res = await axios
      .put(
        `https://balanjo-api.cyclic.app/product/${detailProduct.product_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        swal.fire({
          title: "Product Update",
          text: `Update Product Success`,
          icon: "success",
        });
      });

    dispatch({
      type: "UPDATE_PRODUCT",
      payload: res.data,
    });
  } catch (error) {
    swal.fire({
      text: "error",
      icon: "error",
    });
  }
};

// Delete
export const deleteProducts =
  (id, setShow, setFetchState) => async (dispatch) => {
    try {
      const result = await axios.delete(
        process.env.REACT_APP_BACKEND + "/products/" + id
      );

      dispatch({ type: "DELETE_PRODUCT", payload: result });
      setShow(false);
      setFetchState(true);
    } catch (error) {
      swal.fire({
        text: "success delete product",
        icon: "warning",
      });
    }
  };
