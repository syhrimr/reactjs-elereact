(this["webpackJsonpreactjs-elereact"]=this["webpackJsonpreactjs-elereact"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"label":"Overloaded","value":"Overloaded"},{"label":"Electro-Charged","value":"Electro-Charged"},{"label":"Superconduct","value":"Superconduct"},{"label":"Swirl","value":"Swirl"},{"label":"Shattered","value":"Shattered"},{"label":"Melt","value":"Melt"},{"label":"Vaporize","value":"Vaporize"}]')},function(e){e.exports=JSON.parse('[{"label":"Crimson Witch","value":"crimson"},{"label":"Thundering Fury","value":"tf"},{"label":"Viridescent Venerer","value":"venerer"}]')},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(3),l=a.n(c),s=(a(14),a(15),a(16),a.p+"static/media/Genshin-Impact-Logo.1666fb51.png"),i=a(0),o=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("img",{src:s}),Object(i.jsx)("h1",{className:"title",children:Object(i.jsx)("span",{children:"Elemental Reaction Calculator"})})]})},u=a(4),h=a(5),d=a(9),p=a(8);a(18);function j(e,t){if((""+e).includes("e")){var a=(""+e).split("e"),r="";return+a[1]+t>0&&(r="+"),+(Math.round(+a[0]+"e"+r+(+a[1]+t))+"e-"+t)}return+(Math.round(e+"e+"+t)+"e-"+t)}var b=a(6),v=a(7),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).Calculation=function(){var e=parseFloat(r.state.emas),t=function(e,t,a){var r;switch(a){case"Overloaded":r=(1+60/9*(t/(1401+t)))*(-27646e-10*Math.pow(e,5)+518944e-9*Math.pow(e,4)-.0314790536*Math.pow(e,3)+.9268181504*Math.pow(e,2)-4.3991155718*e+37.4371542286);break;case"Electro-Charged":r=(1+60/9*(t/(1401+t)))*(-14798e-10*Math.pow(e,5)+.0002746679*Math.pow(e,4)-.0162160738*Math.pow(e,3)+.4742385201*Math.pow(e,2)-1.698723279*e+20.8340255487);break;case"Superconduct":r=(1+60/9*(t/(1401+t)))*(-6.038e-7*Math.pow(e,5)+.0001110078*Math.pow(e,4)-.006423771*Math.pow(e,3)+.1836799174*Math.pow(e,2)-.4750909512*e+7.4972486411);break;case"Swirl":r=(1+60/9*(t/(1401+t)))*(-8.854e-7*Math.pow(e,5)+.0001679502*Math.pow(e,4)-.0103922088*Math.pow(e,3)+.3097567417*Math.pow(e,2)-1.7733381829*e+13.5157684329);break;case"Shattered":r=(1+60/9*(t/(1401+t)))*(-20555e-10*Math.pow(e,5)+.0003895953*Math.pow(e,4)-.0239673351*Math.pow(e,3)+.7174530144*Math.pow(e,2)-3.7397755267*e+31.2160750111);break;case"Melt":case"Vaporize":r=1+.189266831*t*Math.exp(-505e-6*t)/100}return r}(parseFloat(r.state.charlvl),e,r.state.reaction);"Melt"===r.state.reaction?"Pyro"===r.state.element?t*=2:"Cryo"===r.state.element&&(t*=1.5):"Vaporize"===r.state.reaction&&("Hydro"===r.state.element?t*=2:"Pyro"===r.state.element&&(t*=1.5)),r.state.isChecked&&(console.log(r.state.effect,r.state.reaction),t=function(e,t,a){var r;return"crimson"===e&&"Overloaded"===t?r=1.4*a:"tf"!==e||"Overloaded"!==t&&"Electro-Charged"!==t&&"Superconduct"!==t?"venerer"===e&&"Swirl"===t&&(r=1.6*a):r=1.4*a,r}(r.state.effect,r.state.reaction,t)),console.log(t),r.setState({result:j(t,2)})},r.state={element:"Pyro",reaction:"Overloaded",charlvl:0,emas:0,effect:"crimson",result:0,isChecked:!1},r}return Object(h.a)(a,[{key:"handleChecked",value:function(e){var t=e.target.checked;this.setState({isChecked:t})}},{key:"render",value:function(){var e,t,a=this;return"Melt"===this.state.reaction?e=Object(i.jsxs)("div",{className:"input-warp",children:[Object(i.jsx)("label",{children:"Triggered By"}),Object(i.jsxs)("select",{value:this.state.element,onChange:function(e){return a.setState({element:e.target.value})},children:[Object(i.jsx)("option",{value:"Pyro",children:"Pyro"}),Object(i.jsx)("option",{value:"Cryo",children:"Cryo"})]})]}):"Vaporize"===this.state.reaction&&(e=Object(i.jsxs)("div",{className:"input-warp",children:[Object(i.jsx)("label",{children:"Triggered By"}),Object(i.jsxs)("select",{value:this.state.element,onChange:function(e){return a.setState({element:e.target.value})},children:[Object(i.jsx)("option",{value:"Pyro",children:"Pyro"}),Object(i.jsx)("option",{value:"Hydro",children:"Hydro"})]})]})),this.state.isChecked&&(t=Object(i.jsx)("select",{value:this.state.effect,onChange:function(e){a.setState({effect:e.target.value})},children:v.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.label})}))})),Object(i.jsxs)("div",{className:"container flex-init-setup flex-ppal-setup",children:[Object(i.jsxs)("div",{className:"input-warp",children:[Object(i.jsx)("label",{children:"Elemental Reaction"}),Object(i.jsx)("select",{className:"input-dropdown",value:this.state.reaction,onChange:function(e){return a.setState({reaction:e.target.value,result:0})},children:b.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.label})}))})]}),e,Object(i.jsxs)("div",{className:"input-warp",value:this.state.charlvl,onChange:function(e){a.setState({charlvl:e.target.value})},children:[Object(i.jsx)("label",{children:"Character Level"}),Object(i.jsx)("input",{type:"text",inputMode:"numeric"})]}),Object(i.jsxs)("div",{className:"input-warp",value:this.state.emas,onChange:function(e){a.setState({emas:e.target.value})},children:[Object(i.jsx)("label",{children:"Elemental Mastery"}),Object(i.jsx)("input",{type:"text",inputMode:"numeric"})]}),Object(i.jsxs)("div",{className:"input-warp",children:[Object(i.jsx)("input",{type:"checkbox",defaultChecked:!1,onChange:function(e){a.handleChecked(e)}}),Object(i.jsx)("label",{children:"Artifact Effect"}),t]}),Object(i.jsx)("button",{onClick:this.Calculation,children:"Calculate"}),Object(i.jsx)("div",{className:"result-wrapper",children:Object(i.jsxs)("span",{className:"result",children:[this.state.reaction," :",this.state.result]})})]})}}]),a}(n.a.Component),m=(a(19),function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("p",{className:"description",children:["All formulas are refering from\xa0",Object(i.jsx)("a",{href:"https://genshin-impact.fandom.com/wiki/Elemental_Reactions#Overloaded.2C_Shattered.2C_Electro-charged.2C_Superconduct_and_Swirl",children:"Genshin Wiki"}),"\xa0(valid from 0 to 898 elemental mastery)."]})})});var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(m,{className:"footer"})]})};l.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d1c4a4f1.chunk.js.map