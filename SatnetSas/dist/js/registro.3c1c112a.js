(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registro"],{"20f6":function(t,e,r){},a523:function(t,e,r){"use strict";r("4de4"),r("b64b"),r("2ca0"),r("99af"),r("20f6"),r("4b85"),r("498a"),r("a15b");var a=r("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var a=r.props,s=r.data,n=r.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var i=s.attrs;if(i){s.attrs={};var o=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,n)}})}var n=r("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,a=e.props,s=e.data,i=e.children,o=s.attrs;return o&&(s.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),i)}})},be2b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("register"),r("botFoot")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{attrs:{src:r("c10d"),height:"873"}},[a("v-container",[a("v-row",{staticClass:"mt-12"},[a("v-col",{attrs:{align:"center"}},[a("v-card",{staticClass:"pa-8",attrs:{width:"500px"}},[a("v-img",{attrs:{src:r("ad98")}}),a("p"),a("h2",[a("p",[t._v("Registarse")])]),a("p"),a("v-row",[a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"Nombre",outlined:"",dense:"",rules:[t.rules.requerido],id:"NombreRe"}}),a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"Apellidos",outlined:"",dense:"",rules:[t.rules.requerido],id:"ApellidoRe"}})],1),a("v-row",[a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"Numero de Telefono",outlined:"",dense:"",rules:[t.rules.requerido],id:"CelRe"}})],1),a("v-row",[a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"E-mail",outlined:"",dense:"",rules:[t.rules.requerido,t.rules.email],id:"EmailRe"}})],1),a("v-row",[a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"Contraseña",id:"PassRe",outlined:"",dense:"",rules:[t.rules.requerido,t.rules.min],type:t.show?"text":"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),a("v-row",[a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"Confirmar contraseña",id:"CpassRe",outlined:"",dense:"",rules:[t.rules.requerido,t.rules.min,t.passconfirm],type:t.show?"text":"password"},model:{value:t.cpass,callback:function(e){t.cpass=e},expression:"cpass"}})],1),a("v-btn",{attrs:{depressed:"",color:"primary",id:"BotonRe"}},[t._v(" Ingresar ")]),a("v-card-text",[a("p"),a("p",{staticClass:"text-center"},[a("a",{staticClass:"mx-2",attrs:{href:"/principal"}},[t._v("Pagina Principal")]),a("a",{staticClass:"mx-2",attrs:{href:"/ingresar"}},[t._v("Iniciar sesión")])])])],1)],1)],1)],1)],1)},i=[],o={name:"registro",data:function(){return{rules:{requerido:function(t){return!!t||"No puede estar vacio."},min:function(t){return t.length>=3||"Minimo 3 caracteres"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Correo invalido."}},return:{show:!1,password:"password"}}},computed:{passconfirm:function(){var t=this;return function(){return t.pass===t.cpass||"La contraseña no coincide"}}}},l=o,d=r("2877"),c=r("6544"),u=r.n(c),p=r("8336"),f=r("b0af"),v=r("99d9"),m=r("62ad"),g=r("a523"),x=r("adda"),h=r("0fd9"),b=r("8654"),C=Object(d["a"])(l,n,i,!1,null,null,null),w=C.exports;u()(C,{VBtn:p["a"],VCard:f["a"],VCardText:v["b"],VCol:m["a"],VContainer:g["a"],VImg:x["a"],VRow:h["a"],VTextField:b["a"]});var y=r("fd2d"),R={name:"Registrar",components:{register:w,botFoot:y["a"]}},P=R,V=Object(d["a"])(P,a,s,!1,null,null,null);e["default"]=V.exports},c10d:function(t,e,r){t.exports=r.p+"img/fondo.815d42b0.jpg"}}]);
//# sourceMappingURL=registro.3c1c112a.js.map