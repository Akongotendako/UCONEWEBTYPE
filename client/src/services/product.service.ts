import axiosInstance from "./axiosInstance";

export const getProducts = async() => {
  const response = await axiosInstance.get("/products");
  return response;
}

export const addProduct = async(data: FormData) => {
  const response = await axiosInstance.post("/products", data, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  });
  return response;
};


export const getProduct = async(id: string) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response;
};

export const updateProduct = async(id: string, data: FormData) => {
  console.log(data)
  const response = await axiosInstance.put(`/products/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return {data: response.data, status: response.status};
}

export const deleteProduct = async(id: string) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response;
};

export const getProductByCategory = async(category: string) => {
  const response = await axiosInstance.get(`/products/${category}/category`);
  return response;
};