import{j as l,k as i}from"./index-be27906c.js";const{VITE_URL:s,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/try2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h=l("cartStore",{state:()=>({carts:[]}),actions:{getCartList(){i.get(`${s}api/${c}/cart`).then(t=>{console.log(t),this.carts=t.data.data,console.log("購物車",this.carts),this.countHeight()}).catch(t=>{console.log(t)})},addtoCart(t,o=1){const a={product_id:t.id,qty:o};i.post(`${s}api/${c}/cart`,{data:a}).then(e=>{console.log(e),this.carts=e.data.data,console.log("購物車",this.carts),this.getCartList()}).catch(e=>{console.log(e)})},delCartItem(t){this.loadingId=t,i.delete(`${s}api/${c}/cart/${t}`).then(o=>{console.log(o),this.loadingId="",this.getCartList()}).catch(o=>{console.log(o)})},updateCartItem(t){console.log(t);const o={product_id:t.product.id,qty:t.qty};i.put(`${s}api/${c}/cart/${t.id}`,{data:o}).then(a=>{console.log(a),this.updataloadingId="",this.getCartList()}).catch(a=>{console.log(a)})},delCarts(){this.$http.delete(`${s}api/${c}/carts`).then(t=>{console.log(t),this.updataloadingId="",this.getCartList()}).catch(t=>{console.log(t)})}}});export{h as c};
