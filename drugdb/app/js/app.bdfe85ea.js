(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],h=0,b=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);o&&o(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var o=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1cda":function(t,e,n){},7281:function(t,e,n){},7473:function(t,e,n){},cafb:function(t,e,n){"use strict";n("7473")},cd49:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),a={class:"container mt-5"};function c(t,e,n,c,i,s){var l=Object(r["A"])("Navbar"),u=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(l),Object(r["h"])("div",a,[Object(r["k"])(u,null,{default:Object(r["H"])((function(t){var e=t.Component;return[(Object(r["t"])(),Object(r["e"])(r["b"],{include:"Home"},[(Object(r["t"])(),Object(r["e"])(Object(r["B"])(e)))],1024))]})),_:1})])],64)}var i=n("f31f"),s=n.n(i);const l={class:"navbar has-background-success mb-5 is-transparent"},u={class:"container is-fluid"},o=Object(r["h"])("div",{class:"navbar-brand"},[Object(r["h"])("span",{class:"navbar-item"},[Object(r["h"])("img",{src:s.a})])],-1),h={class:"navbar-menu"},b=Object(r["h"])("span",{class:"navbar-item has-text-white has-text-weight-bold"}," Authorized drugs in Benin ",-1),d=Object(r["h"])("span",{class:"navbar-item has-text-white"}," | ",-1),O={class:"navbar-item has-text-white has-text-weight-bold"},j=Object(r["j"])("Home");function g(t,e){const n=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["g"])("nav",l,[Object(r["h"])("div",u,[o,Object(r["h"])("div",h,[b,d,Object(r["h"])("span",O,[Object(r["k"])(n,{to:"/"},{default:Object(r["H"])(()=>[j]),_:1})])])])])}n("d090");var p=n("6b0d"),f=n.n(p);const m={},v=f()(m,[["render",g]]);var A=v,k=Object(r["l"])({name:"App",components:{Navbar:A}});const y=f()(k,[["render",c]]);var w=y,x=n("6c02"),P={key:0,class:"mt-5"},S={key:0},E=Object(r["h"])("h4",{class:"title is-4"},"Search results",-1),C={key:1,class:"card"},I=Object(r["h"])("header",{class:"card-header"},[Object(r["h"])("p",{class:"card-header-title has-text-centered"},"Your query returned no result.")],-1),M=[I],L={key:1,class:"mt-5"},D={key:2,class:"mt-6"},U=Object(r["h"])("div",{class:"card has-background-danger"},[Object(r["h"])("header",{class:"card-header"},[Object(r["h"])("p",{class:"card-header-title has-text-white"}," Unable to get results from server. ")])],-1),T=[U];function F(t,e,n,a,c,i){var s=Object(r["A"])("SearchBar"),l=Object(r["A"])("DrugList"),u=Object(r["A"])("Pagination");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["k"])(s,{onSearch:t.onSearch},null,8,["onSearch"]),t.showList?(Object(r["t"])(),Object(r["g"])("div",P,[t.drugs.length>0?(Object(r["t"])(),Object(r["g"])("div",S,[E,Object(r["k"])(l,{drugs:t.drugs},null,8,["drugs"])])):(Object(r["t"])(),Object(r["g"])("div",C,M))])):Object(r["f"])("",!0),t.lastPage>1?(Object(r["t"])(),Object(r["g"])("div",L,[Object(r["k"])(u,{"last-page":t.lastPage,onPageChanged:t.onPageChanged},null,8,["last-page","onPageChanged"])])):Object(r["f"])("",!0),t.error?(Object(r["t"])(),Object(r["g"])("div",D,T)):Object(r["f"])("",!0)])}var R={class:"field has-addons"},B={class:"control is-expanded"},Z={class:"control"};function N(t,e,n,a,c,i){return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["h"])("div",R,[Object(r["h"])("div",B,[Object(r["I"])(Object(r["h"])("input",{autofocus:"",class:"input",type:"text",placeholder:"Type here...",autocomplete:"off",spellcheck:"false",ref:"input","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.term=e}),onKeydown:e[1]||(e[1]=Object(r["J"])((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onSubmit&&t.onSubmit.apply(t,e)}),["enter"]))},null,544),[[r["F"],t.term]])]),Object(r["h"])("div",Z,[Object(r["h"])("button",{class:"button is-link is-light is-outlined",onClick:e[2]||(e[2]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onSubmit&&t.onSubmit.apply(t,e)})}," 🔎 ")])])])}var z=Object(r["l"])({name:"SearchBar",data:function(){return{term:""}},activated:function(){var t=this.$route.query.q;if(t&&"string"==typeof t){var e=t.trim();e!==this.term&&(this.term=e,this.$emit("search",e))}},methods:{onSubmit:function(){var t=this.term.trim();0!=t.length&&this.$emit("search",t)}}});const K=f()(z,[["render",N]]);var q=K,G={class:"pagination is-right"},Q={class:"pagination-list"},J=["disabled"],W=Object(r["h"])("span",null,"<<",-1),V=[W],H=["disabled"],X=Object(r["h"])("span",null,"<",-1),Y=[X],_=["max"],$={class:"has-text-weight-bold px-2"},tt=["disabled"],et=Object(r["h"])("span",null,">",-1),nt=[et],rt=["disabled"],at=Object(r["h"])("span",null,">>",-1),ct=[at];function it(t,e,n,a,c,i){return Object(r["t"])(),Object(r["g"])("nav",G,[Object(r["h"])("ul",Q,[Object(r["h"])("li",null,[Object(r["h"])("button",{class:"button is-outlined is-link is-light pagination-link has-text-weight-bold",onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onFirst&&t.onFirst.apply(t,e)}),disabled:t.onFirstPage},V,8,J)]),Object(r["h"])("li",null,[Object(r["h"])("button",{class:"button is-outlined is-link is-light pagination-link has-text-weight-bold",onClick:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onPrevious&&t.onPrevious.apply(t,e)}),disabled:t.onFirstPage},Y,8,H)]),Object(r["h"])("li",null,[Object(r["I"])(Object(r["h"])("input",{class:"input is-normal is-link",step:"1",type:"number",min:"1",ref:"input","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.page=e}),max:t.lastPage,onKeydown:e[3]||(e[3]=Object(r["J"])((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onInput&&t.onInput.apply(t,e)}),["enter"]))},null,40,_),[[r["F"],t.page]])]),Object(r["h"])("li",$,"/ "+Object(r["D"])(t.lastPage),1),Object(r["h"])("li",null,[Object(r["h"])("button",{class:"button is-outlined is-link is-light pagination-link has-text-weight-bold",onClick:e[4]||(e[4]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onNext&&t.onNext.apply(t,e)}),disabled:t.onLastPage},nt,8,tt)]),Object(r["h"])("li",null,[Object(r["h"])("button",{class:"button is-outlined is-link is-light pagination-link has-text-weight-bold","aria-label":"Goto last page",onClick:e[5]||(e[5]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.onLast&&t.onLast.apply(t,e)}),disabled:t.onLastPage},ct,8,rt)])])])}var st=Object(r["l"])({name:"Pagination",props:{lastPage:{type:Number,required:!0,default:1}},data:function(){return{page:1}},methods:{onFirst:function(){this.page=1,this.emitPageChangeEvent()},onPrevious:function(){this.page-=1,this.emitPageChangeEvent()},onNext:function(){this.page+=1,this.emitPageChangeEvent()},onLast:function(){this.page=this.lastPage,this.emitPageChangeEvent()},onInput:function(){var t=this.$refs.input;if(t.validity.valid){var e=parseInt(t.value);this.page=isNaN(e)||e<1||e>this.lastPage?1:e}else this.page=1;this.emitPageChangeEvent()},emitPageChangeEvent:function(){this.$emit("page-changed",this.page)}},computed:{onFirstPage:function(){return 1==this.page},onLastPage:function(){return this.page==this.lastPage}}});const lt=f()(st,[["render",it]]);var ut=lt,ot={class:"table is-striped is-hoverable is-fullwidth"},ht={class:"is-link"};function bt(t,e,n,a,c,i){var s=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["h"])("table",ot,[Object(r["h"])("tbody",null,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(t.drugs.length,(function(e){return Object(r["t"])(),Object(r["g"])("tr",{key:e},[Object(r["h"])("td",null,[Object(r["h"])("span",ht,[Object(r["k"])(s,{to:{name:"DrugPage",params:{drugId:t.drugs[e-1].id}}},{default:Object(r["H"])((function(){return[Object(r["j"])(Object(r["D"])(t.drugs[e-1].name),1)]})),_:2},1032,["to"])])])])})),128))])])])}var dt=Object(r["l"])({name:"DrugList",props:{drugs:{type:Array,required:!0}}});const Ot=f()(dt,[["render",bt]]);var jt=Ot,gt=location.origin+"/api",pt=Object(r["l"])({name:"Home",components:{SearchBar:q,Pagination:ut,DrugList:jt},data:function(){return{drugs:[],query:"",lastPage:1,showList:!1,error:!1}},methods:{onSearch:function(t){this.resetUI(),this.query=t,this.makeFetchRequest()},onPageChanged:function(t){this.makeFetchRequest(t)},makeFetchRequest:function(t){var e=this;void 0===t&&(t=1);var n=new URL(gt+"/search");n.searchParams.append("query",this.query),n.searchParams.append("page",t.toString()),fetch(n.toString(),{method:"get"}).then((function(t){if(!t.ok)throw new Error("Unable to get results from server.");return t.json()})).then((function(t){e.showList=!0,e.lastPage=t.last_page,e.drugs=t.drugs})).catch((function(t){e.error=!0,console.log(t)}))},resetUI:function(){this.showList=!1,this.error=!1,this.lastPage=1,this.drugs=[]}}});const ft=f()(pt,[["render",F]]);var mt=ft,vt=function(t){return Object(r["w"])("data-v-25d8b0ea"),t=t(),Object(r["u"])(),t},At={class:"mb-5"},kt={key:0,class:"table-container mb-4"},yt={class:"table is-striped is-hoverable is-fullwidth"},wt=vt((function(){return Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Drug details")])],-1)})),xt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Name")],-1)})),Pt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"INN")],-1)})),St=["onClick"],Et=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",{class:"has-text-danger"},"Dose")],-1)})),Ct=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Form")],-1)})),It=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Route")],-1)})),Mt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Presentation")],-1)})),Lt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Class")],-1)})),Dt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Authorization")],-1)})),Ut=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Auth expiration date")],-1)})),Tt=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Manufacturer")],-1)})),Ft=vt((function(){return Object(r["h"])("tr",null,[Object(r["h"])("th",null,"Owner")],-1)})),Rt={key:1,class:"mt-5"},Bt={class:"card has-background-danger"},Zt={class:"card-header"},Nt={class:"card-header-title has-text-white"},zt={key:2,class:"has-text-centered mt-5"},Kt=vt((function(){return Object(r["h"])("h5",{class:"title is-5 mb-2"},"Loading...",-1)}));function qt(t,e,n,a,c,i){var s=Object(r["A"])("Spinner");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",At,[Object(r["h"])("button",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.goBack&&t.goBack.apply(t,e)}),class:"button has-text-weight-bold is-size-6"}," ← Return to previous page ")]),t.drug?(Object(r["t"])(),Object(r["g"])("div",kt,[Object(r["h"])("table",yt,[wt,Object(r["h"])("tbody",null,[xt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.name),1)]),Pt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(t.innItems,(function(e){return Object(r["t"])(),Object(r["g"])("p",{key:e.index,class:"mb-2"},[Object(r["h"])("span",{class:"has-text-link search-link",onClick:function(n){return t.search(e.value)}},Object(r["D"])(e.value),9,St)])})),128))])]),Et,Object(r["h"])("tr",null,[Object(r["h"])("td",null,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(t.doseItems,(function(t){return Object(r["t"])(),Object(r["g"])("p",{key:t.index,class:"mb-2"},Object(r["D"])(t.value),1)})),128))])]),Ct,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug["form"]),1)]),It,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.route),1)]),Mt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.presentation),1)]),Lt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.class),1)]),Dt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.auth),1)]),Ut,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.auth_expiration_date),1)]),Tt,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.manufacturer),1)]),Ft,Object(r["h"])("tr",null,[Object(r["h"])("td",null,Object(r["D"])(t.drug.owner),1)])])])])):t.error?(Object(r["t"])(),Object(r["g"])("div",Rt,[Object(r["h"])("div",Bt,[Object(r["h"])("header",Zt,[Object(r["h"])("p",Nt,Object(r["D"])(t.error),1)])])])):(Object(r["t"])(),Object(r["g"])("div",zt,[Kt,Object(r["k"])(s)]))],64)}var Gt={class:"has-text-centered"},Qt=Object(r["i"])('<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#23d160"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>',1),Jt=[Qt];function Wt(t,e,n,a,c,i){return Object(r["t"])(),Object(r["g"])("p",Gt,Jt)}var Vt=Object(r["l"])({name:"Spinner"});const Ht=f()(Vt,[["render",Wt]]);var Xt=Ht,Yt=Object(r["l"])({name:"DrugInfo",components:{Spinner:Xt},data:function(){return{drug:void 0,error:void 0}},methods:{goBack:function(){this.$router.go(-1)},search:function(t){this.$router.push({name:"Home",query:{q:t}})}},computed:{doseItems:function(){if(!this.drug)return[];var t=this.drug.dose.split(" + ");return t.map((function(t,e){return{value:t,index:e}}))},innItems:function(){if(!this.drug)return[];var t=this.drug.inn.split(" + ");return t.map((function(t,e){return{value:t,index:e}}))}},mounted:function(){var t=this,e=this.$route.params.drugId,n=gt+"/drugs/"+e;fetch(n,{method:"get"}).then((function(e){if(!e.ok)throw 404==e.status?t.error="No such drug.":t.error="Unable to fetch data for server.",new Error("Error while fetching drug.");return e.json()})).then((function(e){return t.drug=e})).catch((function(e){t.error=t.error||"Unable to fetch data from server.",console.log(e)}))}});n("cafb");const _t=f()(Yt,[["render",qt],["__scopeId","data-v-25d8b0ea"]]);var $t=_t;const te=Object(r["h"])("h3",{class:"title is-3 has-text-centered mt-6"}," Oops! ",-1),ee=Object(r["h"])("h4",{class:"subtitle is-6 has-text-centered"}," There is nothing here... ",-1),ne=[te,ee];function re(t,e,n,a,c,i){return Object(r["t"])(),Object(r["g"])("div",null,ne)}var ae=Object(r["l"])({name:"NotFound"});const ce=f()(ae,[["render",re]]);var ie=ce,se=[{path:"/",name:"Home",component:mt},{path:"/drugs/:drugId(\\d+)",name:"DrugPage",component:$t},{path:"/:pathMatch(.*)*",name:"NotFound",component:ie}],le=Object(x["a"])({history:Object(x["b"])("/app/"),routes:se,linkActiveClass:"has-text-white",linkExactActiveClass:"has-text-white"}),ue=le;n("1cda");Object(r["d"])(w).use(ue).mount("#app")},d090:function(t,e,n){"use strict";n("7281")},f31f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflCwsNGgnrpUetAAAER0lEQVRYw62Xa2iVdRzHP8+5bOqZQ5vLSPGyaaYtL3lLMmMYXhZEGkKFUNorK4MkFERB7EVRUvQqlPJFWlhKGhV4WSu1gUWZVDovabrmdKmzzenczjyfXnjUWbrzrJ3f8+5/zvP9/n+37+/3BHRoAvTiUUopJodjbKSCZECWTMT7/cJmm/3TU7ZZ7yLjZpGgyB/Ur5zhQIt9zoM2OluyQiHiSnWLhZJ+pljnT/bPFsHd7veipdduLAauVt/KSpjEGbZ6wL7eOOntVrXBsrBhinT46wDitJBsdzKaKUA+pWGv2TFBM1BIQbuTS7QCcKHrEUIs8aT6crsc9PATtdax2clBxOVesdoZBpKuq2I/c7mRbNVRnq/Z6F8ud5CRdKnmmchmq8Utc4fN/uF7zrLI7le9CWsZZUWAfB7hKUrpwxkOsI+fOcBxGkllVqWQuiXEGUwpZUyiEDnPUb5nG5WcDw0SIlyY6wgX+rVNql52pzOzlPCbaPKc5mYvq1rnzI66OgAhRjeCTknkFXryLMvIBz5kIYl0uAMCAq42cB2XgzTBKF4nQZwokCKMzASkWMUkFgOVfMASImnoKFHauMRpFlIVEAOgmrfJp5AiRjGWPiG9+JQtvEAevcmhiDgAKU6wi91UcYrjADEI4Dzl6YLMZThLmEM0BEEb1ZwlL31zSLKHdWynhis36ip2UzqwhX0s4BgL6RkiD5dpARqIEOUIq9j436L9l5oGBPA3K3ie/RkJLtKHXsAh4pQzmzWcD8L1hIhDXeMFb2+1jnap2uZcH3Jgp+e0mOvj7jR5S/iLLnGeZ9XdFhp0Tp/a+3GH8/3O5pvAU1b5qm/aoJ52Wpd2DK/O4cd81wr3uNdWf/cVJ7jeNvWkT/+vu9+SJuEIZ3rStUZ9R21xmw9nho+FgSfOg8yllM0kSTGEcWxgE+U0ZEFJxYQrrFd3Odlq15rwzvAKmsEDAZ5hKXEO8RL1RJAo9zGS/ib5lm+6uAqLET9WdZE4wBrfd6Q7rE1LdcbtIpKRI0UN0HK9syP8ypPMohqIpLekLhHAOo6Qy/h2bjWSogdwkBNdic+1IOF0D3vWFy1xk4vN8QG3qkkXZGWRF3GE6z1nlV/6kVutU5OuNj/MZApBQDET2MFwnmAiA0hwiSNsYAONWdknxKk2ut5eFjjP+ZY4yERWJOI6wXgbTDrbcTZZYffOQIepIqimmhhTiQORzqlDCC0C6thICWVUsph6YgQaliXkhKOAZcwhRS3Sxm9sp5IzhKAJv5vm0J97GEaMPgxjEE2spDxre+lVEqdYZYVjDbzL6U4M02bhcnDNchhMMX0xOM3pcK+EJBAgQj4BUSZTZw31JMMEKMgIHJCgH/cyhlGMpAhIcYGTHOYX9nGQGpo6SnbQAXQ3hjKGiYxmCAW3XCZTnOMoe/mc8tt97XREUMJ8+pGLpEjd5m8RIkT5kTdovTXUP66+vAbWWOrVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTExLTExVDEyOjI2OjA5KzAxOjAwBfpc8wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMS0xMVQxMjoyNjowOSswMTowMHSn5E8AAAAASUVORK5CYII="}});
//# sourceMappingURL=app.bdfe85ea.js.map