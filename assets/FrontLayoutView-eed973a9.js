import{c as d}from"./cartStore-0e835f69.js";import{m as $,_,r as i,o as p,c as m,a as t,b as s,w as o,d as l,t as w,p as v,e as b,f as N,F as C,g as S}from"./index-69b80ae8.js";const u="/try2/Logo.png";const I={computed:{...$(d,["carts"])}},c=a=>(v("data-v-12156077"),a=a(),b(),a),V={class:"navbar navbar-expand-md navbar-light bg-light section-lace bg-black p-0 position-fixed w-100 z-index-3"},L={class:"container position-relative"},T={class:"navbar-brand",href:"#"},D=c(()=>t("img",{src:u,alt:"",style:{width:"60px"}},null,-1)),F=c(()=>t("button",{class:"navbar-toggler border-0 ms-auto me-5 me-md-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"text-primary"},[t("i",{class:"bi bi-list fs-2"})])],-1)),B={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},z={class:"navbar-nav d-flex align-items-center w-100 me-8"},A=c(()=>t("li",{class:"nav-item"},null,-1)),E={class:"nav-item ms-md-auto my-2"},j={class:"nav-item my-2"},q={class:"nav-item my-2"},G={class:"navbar-icon position-absolute m-0 p-0"},H={class:"nav-item"},J=c(()=>t("i",{class:"bi bi-cart text-primary fs-5"},null,-1)),K={class:"badge rounded-pill bg-danger position-absolute cartNum"};function M(a,h,g,f,x,y){const e=i("router-link");return p(),m("nav",V,[t("div",L,[t("a",T,[s(e,{class:"nav-link text-primary p-1",to:"/"},{default:o(()=>[D]),_:1})]),F,t("div",B,[t("ul",z,[A,t("li",E,[s(e,{class:"nav-link text-primary px-3",to:"/about"},{default:o(()=>[l("關於我們")]),_:1})]),t("li",j,[s(e,{class:"nav-link text-primary px-3",to:"/products"},{default:o(()=>[l("產品列表")]),_:1})]),t("li",q,[s(e,{class:"nav-link text-primary",to:"/login"},{default:o(()=>[l("後台")]),_:1})])])]),t("ul",G,[t("li",H,[s(e,{class:"nav-link text-primary px-2",to:"/cart"},{default:o(()=>{var n;return[J,t("span",K,w((n=a.carts.carts)==null?void 0:n.length),1)]}),_:1})])])])])}const O=_(I,[["render",M],["__scopeId","data-v-12156077"]]);const P={components:{NavbarComponent:O},methods:{...N(d,["getCartList"])},mounted(){this.getCartList()}},r=a=>(v("data-v-04d62973"),a=a(),b(),a),Q={class:"py-6 bg-black"},R={class:"container"},U={class:"row"},W={class:"col-6"},X={class:"d-flex flex-column align-items-start"},Y=r(()=>t("img",{src:u,alt:"",style:{width:"60px"}},null,-1)),Z=r(()=>t("a",{href:"tel:080000000",class:"d-inline-block p-1 mb-1"},"電話：080000000",-1)),tt=r(()=>t("a",{href:"mailto:123@practice.com",class:"d-inline-block p-1 mb-1"},"123@practice.com",-1)),at=S('<div class="col-6 text-end" data-v-04d62973><a href="#" class="d-inline-block" data-v-04d62973><i class="bi bi-facebook text-primary fs-5" data-v-04d62973></i></a><a href="#" class="d-inline-block ms-3" data-v-04d62973><i class="bi bi-instagram text-primary fs-5" data-v-04d62973></i></a></div>',1);function st(a,h,g,f,x,y){const e=i("NavbarComponent"),n=i("router-view"),k=i("router-link");return p(),m(C,null,[s(e),t("main",null,[s(n)]),t("footer",Q,[t("div",R,[t("div",U,[t("div",W,[t("div",X,[s(k,{class:"nav-link text-primary p-1 mb-1 d-inline-block",to:"/"},{default:o(()=>[Y]),_:1}),Z,tt])]),at])])])],64)}const nt=_(P,[["render",st],["__scopeId","data-v-04d62973"]]);export{nt as default};