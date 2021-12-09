import axios from 'axios'
const baseUrl = 'http://localhost:3000/api'
// import { api } from './network'


const Orders = { 
  async create(product_id, user_id)  {
      const { data } = await axios.get("/orders", {
        params: { product_id: product_id, user_id}
      }
  },

    async update(order_id, product_id) {
      debugger
  }
}

export default Orders