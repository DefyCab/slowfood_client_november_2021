import { api } from "./network";

const baseUrl = "http://localhost:3000/api";

const Products = {
  async index() {
    const { data } = await api.get(`${baseUrl}/products`);
    return data.products;
  },
};

export default Products;
