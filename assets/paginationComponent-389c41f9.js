import{_ as l,o as i,c as o,a as e,n as r,i as c,F as _,h as d,t as g,p as u,e as m}from"./index-be27906c.js";const h={props:["pages"],emits:["changePage"]},p=a=>(u("data-v-5ff8e041"),a=a(),m(),a),v={"aria-label":"Page navigation example"},f={class:"pagination justify-content-center"},k={class:"page-item"},y=p(()=>e("span",{"aria-hidden":"true"},"«",-1)),x=[y],C=["onClick"],P={class:"page-item"},b=p(()=>e("span",{"aria-hidden":"true"},"»",-1)),I=[b];function S(a,n,t,$,B,w){return i(),o("nav",v,[e("ul",f,[e("li",k,[e("a",{class:r(["page-link cursor-pointer text-primary",{disabled:!t.pages.has_pre}]),"aria-label":"Previous",onClick:n[0]||(n[0]=c(s=>a.$emit("changePage",t.pages.current_page-1),["prevent"]))},x,2)]),(i(!0),o(_,null,d(t.pages.total_pages,s=>(i(),o("li",{key:s+1,class:r(["page-item",{active:s===t.pages.current_page}])},[e("a",{class:"page-link cursor-pointer text-primary",onClick:c(F=>a.$emit("changePage",s),["prevent"])},g(s),9,C)],2))),128)),e("li",P,[e("a",{class:r(["page-link cursor-pointer text-primary",{disabled:!t.pages.has_next}]),"aria-label":"Next",onClick:n[1]||(n[1]=c(s=>a.$emit("changePage",t.pages.current_page+1),["prevent"]))},I,2)])])])}const j=l(h,[["render",S],["__scopeId","data-v-5ff8e041"]]);export{j as p};
