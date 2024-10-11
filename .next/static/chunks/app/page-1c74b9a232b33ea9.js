(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1273:function(e,r,t){Promise.resolve().then(t.bind(t,1025))},1025:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var a=t(7437),s=t(2265);function n(){return{getValueFromLocalStorage:function(e){if(!localStorage)return null;let r=localStorage.getItem(e);return r?JSON.parse(r):null},saveValueToLocalStorage:function(e,r){if(!localStorage)return null;localStorage.setItem(e,r)},removeValueFromLocalStorage:function(e){if(!localStorage)return null;localStorage.removeItem(e)}}}let l=(0,s.createContext)({currentStep:1,steps:[],handleNextStep:()=>{},handlePreviousStep:()=>{},moveToStep:()=>{}}),o=e=>{let{children:r}=e,[t,o]=(0,s.useState)(1),[i]=(0,s.useState)([{title:"Your info",number:1},{title:"Select plan",number:2},{title:"Terms & Conditions",number:3},{title:"Summary",number:4}]),{getValueFromLocalStorage:c,saveValueToLocalStorage:m}=n();return(0,s.useEffect)(()=>{let e=c("currentStep");e&&o(Number(e))},[c]),(0,a.jsx)(l.Provider,{value:{steps:i,currentStep:t,handleNextStep:()=>{let e=t+1;e<=i.length&&(o(e),m("currentStep",e.toString()))},handlePreviousStep:()=>{let e=t-1;e>=1&&(o(e),m("currentStep",e.toString()))},moveToStep:e=>{e>=1&&e<=i.length&&(o(e),m("currentStep",e.toString()))}},children:r})},i=()=>{let e=(0,s.useContext)(l);if(!e)throw Error("useFormStep must be used within a FormStepProvider");return e},c={value:"",hasError:!1,errorMessage:""},m=(0,s.createContext)({nameField:c,dispatchNameField:()=>{},emailField:c,dispatchEmailField:()=>{},phoneNumberField:c,dispatchPhoneNumberField:()=>{},collegeNameField:c,dispatchCollegeNameField:()=>{},whatYouDoField:c,dispatchWhatYouDoField:()=>{},departmentField:c,dispatchDepartmentField:()=>{},branchNameField:c,dispatchBranchNameField:()=>{},isYearly:!1,setIsYearly:()=>{},selectedPlan:null,setSelectedPlan:()=>{},addOns:[],setAddOns:()=>{},clearForm:()=>{},submitForm:async()=>{}}),d={SET_VALUE:"SET_VALUE",SET_ERROR:"SET_ERROR",CLEAR_ERROR:"CLEAR_ERROR"};function u(e,r){switch(r.type){case d.SET_VALUE:return{...e,value:r.value,hasError:!1,errorMessage:""};case d.SET_ERROR:return{...e,hasError:!0,errorMessage:r.errorMessage};case d.CLEAR_ERROR:return{...e,errorMessage:"",hasError:!1};default:return e}}let p=e=>{let{children:r}=e,[t,n]=(0,s.useReducer)(u,c),[l,o]=(0,s.useReducer)(u,c),[i,p]=(0,s.useReducer)(u,c),[h,x]=(0,s.useReducer)(u,c),[g,f]=(0,s.useReducer)(u,c),[b,E]=(0,s.useReducer)(u,c),[y,v]=(0,s.useReducer)(u,c),[j,N]=(0,s.useState)(!1),[S,R]=(0,s.useState)(null),[w,T]=(0,s.useState)([]);function C(){n({type:d.SET_VALUE,value:""}),o({type:d.SET_VALUE,value:""}),p({type:d.SET_VALUE,value:""}),x({type:d.SET_VALUE,value:""}),f({type:d.SET_VALUE,value:""}),E({type:d.SET_VALUE,value:""}),v({type:d.SET_VALUE,value:""}),N(!1),R(null),T([])}async function _(){let e={name:t.value,email:l.value,phoneNumber:i.value,collegeName:h.value,whatYouDo:g.value,department:b.value,branch:y.value,plan:S,isYearly:j,addOns:w};try{let r=await fetch("YOUR_SERVER_ENDPOINT",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok)throw Error("Network response was not ok");let t=await r.json();console.log("Success:",t),C()}catch(e){console.error("Error submitting form:",e)}}return(0,a.jsx)(m.Provider,{value:{nameField:t,dispatchNameField:n,emailField:l,dispatchEmailField:o,phoneNumberField:i,dispatchPhoneNumberField:p,collegeNameField:h,dispatchCollegeNameField:x,whatYouDoField:g,dispatchWhatYouDoField:f,departmentField:b,dispatchDepartmentField:E,branchNameField:y,dispatchBranchNameField:v,isYearly:j,setIsYearly:N,selectedPlan:S,setSelectedPlan:R,addOns:w,setAddOns:T,clearForm:C,submitForm:_},children:r})},h=()=>{let e=(0,s.useContext)(m);if(!e)throw Error("useForm must be used within a FormProvider");return e};function x(e){let{label:r,placeholder:t,value:s,onChange:n,errorMessage:l,hasError:o,clearError:i,name:c}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("label",{className:"text-denim text-xs sm:text-sm",children:r}),o&&(0,a.jsx)("span",{className:"text-red text-xs sm:text-sm",children:l})]}),(0,a.jsx)("input",{className:"\n          px-4 py-3 rounded ".concat(o?"border-red":"border-border-color"," border-[1px] text-base text-denim font-medium  \n          placeholder:text-grey\n          focus:outline-none focus:border-purple\n        "),type:"text",placeholder:t,value:s,onChange:function(e){let r=e.target.value;n(c,r)},onFocus:()=>i(),name:c})]})}var g={Card:function(e){let{children:r}=e;return(0,a.jsx)("div",{className:"mx-4 mx:0",children:(0,a.jsx)("div",{className:"w-full bg-white rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0",children:r})})},Header:function(e){let{title:r,description:t}=e;return(0,a.jsxs)("header",{className:"flex flex-col gap-2 sm:gap-3",children:[(0,a.jsx)("h1",{className:"text-denim font-bold text-2xl sm:text-3xl",children:r}),(0,a.jsx)("p",{className:"text-grey font-normal text-base ",children:t})]})}},f=t(6691),b=t.n(f);function E(e){return"₹".concat(e)}function y(e){let{plan:r,icon:t,isSelected:s,handleSelectPlan:n,freeTrialDescription:l}=e;return(0,a.jsxs)("button",{className:"flex gap-4 justify-start items-center w-full rounded border-[1px] border-border-grey bg-white p-4 transition duration-200\n        hover:border-purple hover:bg-very-light-grey \n        ".concat(s?"border-purple bg-very-light-grey":""," \n        sm:flex-col sm:gap-0 sm:justify-between sm:items-start sm:h-[181px]\n      "),onClick:()=>n(r),children:[(0,a.jsx)(b(),{src:t,alt:"Plan icon",width:40,height:40}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start",children:[(0,a.jsx)("strong",{className:"text-base font-medium text-denim",children:r.name}),(0,a.jsxs)("span",{className:"text-sm font-normal text-grey leading-5",children:[E(r.price.monthly)," "]}),l&&(0,a.jsx)("span",{className:"hidden text-xs font-normal text-denim sm:block",children:l})]})]})}function v(e){let{handleGoBack:r,handleGoForwardStep:t}=e,{currentStep:s,steps:n}=i(),l=n.length,o=s===l;return(0,a.jsxs)("footer",{className:"p-4 bg-white flex justify-between items-center",children:[(0,a.jsx)("button",{onClick:r,className:"border-none text-sm text-grey font-medium ".concat(1===s?"invisible":"visible"," sm:text-base"),children:"Go back"}),(0,a.jsx)("button",{onClick:t,className:"".concat(o?"bg-purple":"bg-denim"," py-3 px-4 rounded text-sm text-white font-medium sm:text-base"),children:o?"Confirm":"Next step"})]})}function j(){return(0,a.jsx)("div",{className:"sm:my-auto",children:(0,a.jsx)(g.Card,{children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(b(),{src:"/images/icons/icon-thank-you.svg",alt:"Thank you icon",width:56,height:56}),(0,a.jsx)("strong",{className:"mt-6 text-2xl text-denim font-bold",children:"Thank you!"}),(0,a.jsx)("p",{className:"mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center",children:"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@multistepform.com."})]})})})}function N(e){let{finalPrice:r,isYearly:t}=e;return(0,a.jsxs)("div",{className:"mt-6 flex items-center justify-between px-4 sm:px-6",children:[(0,a.jsx)("strong",{className:"text-sm leading-5 font-normal text-grey",children:"Total (".concat(t?"per year":"per month",")")}),(0,a.jsx)("span",{className:"text-base leading-5 font-bold text-purple sm:text-xl",children:E(r)})]})}function S(e){let{title:r,price:t,isYearly:s}=e,n=E(t);return(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("strong",{className:"text-sm leading-5 font-normal text-grey",children:r}),(0,a.jsx)("span",{className:"text-sm leading-5 font-normal text-denim",children:"+".concat(n)})]})}var R=t(4829);let w=[{step:1,component:function(){let{nameField:e,dispatchNameField:r,emailField:t,dispatchEmailField:n,phoneNumberField:l,dispatchPhoneNumberField:o,collegeNameField:c,dispatchCollegeNameField:m,whatYouDoField:u,dispatchWhatYouDoField:p,departmentField:f,dispatchDepartmentField:b,branchNameField:E,dispatchBranchNameField:y}=h(),{handleNextStep:v,handlePreviousStep:j}=i(),[N,S]=(0,s.useState)(e.value),[R,w]=(0,s.useState)(t.value),[T,C]=(0,s.useState)(l.value),[_,k]=(0,s.useState)(c.value),[F,O]=(0,s.useState)(u.value),[A,L]=(0,s.useState)(f.value),[M,P]=(0,s.useState)(E.value),[V,D]=(0,s.useState)({name:N,email:R,phoneNumber:T,collegeName:_,whatYouDo:F,department:A,branchName:M});return(0,s.useEffect)(()=>{let e=setTimeout(()=>{D({name:N,email:R,phoneNumber:T,collegeName:_,whatYouDo:F,department:A,branchName:M})},150);return()=>{clearTimeout(e)}},[N,R,T,_,F,A,M]),(0,a.jsx)(s.Fragment,{children:(0,a.jsxs)(g.Card,{children:[(0,a.jsx)(g.Header,{title:"Personal Info",description:"Please provide your name, email address, phone number, college name, occupation, department, and branch name. Kindly note that this information will be displayed on your certificates and goodies."}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col gap-4",children:[(0,a.jsx)(x,{label:"Name",placeholder:"e.g. Akash Bapurao Chaudhari",value:N,onChange:(e,t)=>{S(t),r({type:d.SET_VALUE,value:t})},errorMessage:e.errorMessage,clearError:()=>r({type:d.CLEAR_ERROR}),hasError:e.hasError,name:"name"}),(0,a.jsx)(x,{label:"Email Address",placeholder:"e.g. akash@domain.com",value:R,onChange:(e,r)=>{w(r),n({type:d.SET_VALUE,value:r})},errorMessage:t.errorMessage,clearError:()=>n({type:d.CLEAR_ERROR}),hasError:t.hasError,name:"email"}),(0,a.jsx)(x,{label:"Phone Number",placeholder:"e.g. +91 1234 567 890",value:T,onChange:(e,r)=>{C(r),o({type:d.SET_VALUE,value:r})},errorMessage:l.errorMessage,clearError:()=>o({type:d.CLEAR_ERROR}),hasError:l.hasError,name:"phoneNumber"}),(0,a.jsx)(x,{label:"College Name",placeholder:"e.g. Jawaharlal Nehru Engineering College",value:_,onChange:(e,r)=>{k(r),m({type:d.SET_VALUE,value:r})},errorMessage:c.errorMessage,clearError:()=>m({type:d.CLEAR_ERROR}),hasError:c.hasError,name:"collegeName"}),(0,a.jsx)(x,{label:"What You Do",placeholder:"e.g. Student, Faculty, Business, Entrepreneur",value:F,onChange:(e,r)=>{O(r),p({type:d.SET_VALUE,value:r})},errorMessage:u.errorMessage,clearError:()=>p({type:d.CLEAR_ERROR}),hasError:u.hasError,name:"whatYouDo"}),(0,a.jsx)(x,{label:"Department",placeholder:"e.g. Computer Science",value:A,onChange:(e,r)=>{L(r),b({type:d.SET_VALUE,value:r})},errorMessage:f.errorMessage,clearError:()=>b({type:d.CLEAR_ERROR}),hasError:f.hasError,name:"department"}),(0,a.jsx)(x,{label:"Branch Name",placeholder:"e.g. Information Technology",value:M,onChange:(e,r)=>{P(r),y({type:d.SET_VALUE,value:r})},errorMessage:E.errorMessage,clearError:()=>y({type:d.CLEAR_ERROR}),hasError:E.hasError,name:"branchName"})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,a.jsx)("button",{type:"button",onClick:j,className:"px-4 py-2 bg-gray-300 text-black rounded",children:"Back"}),(0,a.jsx)("button",{type:"button",onClick:function(){let e;let t=(e=!1,V.name||(r({type:d.SET_ERROR,errorMessage:"Name is required"}),e=!0),V.email?/\S+@\S+\.\S+/.test(V.email)||(n({type:d.SET_ERROR,errorMessage:"Email is invalid"}),e=!0):(n({type:d.SET_ERROR,errorMessage:"Email is required"}),e=!0),V.phoneNumber?V.phoneNumber.length<6&&(o({type:d.SET_ERROR,errorMessage:"Phone number is invalid"}),e=!0):(o({type:d.SET_ERROR,errorMessage:"Phone number is required"}),e=!0),V.collegeName||(m({type:d.SET_ERROR,errorMessage:"College name is required"}),e=!0),V.whatYouDo||(p({type:d.SET_ERROR,errorMessage:"What you do is required"}),e=!0),V.department||(b({type:d.SET_ERROR,errorMessage:"Department is required"}),e=!0),V.branchName||(y({type:d.SET_ERROR,errorMessage:"Branch name is required"}),e=!0),!e);if(t){let e={name:V.name,email:V.email,phoneNumber:V.phoneNumber,collegeName:V.collegeName,whatYouDo:V.whatYouDo,department:V.department,branchName:V.branchName};console.log("Form Data:",e),v()}},className:"px-4 py-2 bg-blue-600 text-white rounded",children:"Next"})]})]})})}},{step:2,component:function(){let{selectedPlan:e,setSelectedPlan:r}=h(),{handleNextStep:t,handlePreviousStep:l}=i(),{saveValueToLocalStorage:o}=n(),c=[{name:"Basic Plan",price:{monthly:640,yearly:1e3},icon:"/path/to/basic-plan-icon.svg",freeTrialDescription:"Food Will be Provided"},{name:"Premium Plan",price:{monthly:1e3,yearly:1e3},icon:"/path/to/premium-plan-icon.svg",freeTrialDescription:"haat se khila denge"}];function m(e){r({name:e.name,price:e.price.monthly})}return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(g.Card,{children:[(0,a.jsx)(g.Header,{title:"Select your plan",description:"Choose between our basic and premium plans."}),(0,a.jsx)("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row",children:c.map(r=>(0,a.jsx)(y,{plan:r,icon:r.icon||"/path/to/default/icon.png",isSelected:r.name===(null==e?void 0:e.name),handleSelectPlan:m,freeTrialDescription:r.freeTrialDescription||"No free trial available."},r.name))})]}),(0,a.jsx)(v,{handleGoForwardStep:function(){if(!e)return;let r=c.find(r=>r.name===e.name);r&&(o("plan",JSON.stringify({name:r.name,price:r.price})),t())},handleGoBack:l})]})}},{step:3,component:function(){let{addOns:e,setAddOns:r}=h(),{handleNextStep:t,handlePreviousStep:l}=i(),{saveValueToLocalStorage:o}=n(),[c,m]=(0,s.useState)(!1);return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(g.Card,{children:[(0,a.jsx)(g.Header,{title:"Terms and Conditions",description:"Please read and agree to our terms and conditions."}),(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsx)("p",{children:"By agreeing to our terms and conditions, you acknowledge that you have read and understood the rules and policies of our service. If you have any questions, please contact our support team."}),(0,a.jsxs)("div",{className:"flex items-center mt-4",children:[(0,a.jsx)("input",{type:"checkbox",id:"terms",checked:c,onChange:()=>m(e=>!e)}),(0,a.jsx)("label",{htmlFor:"terms",className:"ml-2",children:"I agree to the terms and conditions"})]})]})]}),(0,a.jsx)(v,{handleGoForwardStep:function(){if(!c){alert("You must agree to the terms and conditions before proceeding.");return}o("add-ons",JSON.stringify(e)),t()},handleGoBack:l})]})}},{step:4,component:function(){let[e,r]=(0,s.useState)(!1),{handlePreviousStep:t,moveToStep:n}=i(),{addOns:l,selectedPlan:o,isYearly:c,clearForm:m,...d}=h();async function u(){try{let e={...d,plan:(null==o?void 0:o.name)||"No Plan Selected",isYearly:c,addOns:l.map(e=>({title:e.title,price:e.price})),totalPrice:((null==o?void 0:o.price)||0)+l.reduce((e,r)=>e+r.price,0)},t=await R.Z.post("https://server-nlohb1uk6-aakash-choudharis-projects.vercel.app/api/save-data",e);console.log("Server response:",t.data),r(!0)}catch(e){console.error("Error saving data to server:",e)}}if((0,s.useEffect)(()=>{e&&(m(),setTimeout(()=>{n(1)},4e3))},[e,n,m]),e)return(0,a.jsx)(j,{});let p=l.reduce((e,r)=>e+r.price,0),x=((null==o?void 0:o.price)||0)+p;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(g.Card,{children:[(0,a.jsx)(g.Header,{title:"Finishing up",description:"Double-check everything looks OK before confirming."}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start",children:[(0,a.jsx)("strong",{className:"text-sm font-medium text-denim sm:text-base",children:"".concat((null==o?void 0:o.name)||"No Plan Selected"," (").concat(c?"Yearly":"Monthly",")")}),(0,a.jsx)("button",{className:"text-sm leading-5 font-normal text-grey underline cursor-pointer hover:text-purple duration-200",onClick:function(){n(2)},children:"Change"})]}),(0,a.jsxs)("span",{className:"text-sm leading-5 font-bold text-denim sm:text-base",children:[E((null==o?void 0:o.price)||0)," "]})]}),l.length>0&&(0,a.jsx)("div",{className:"h-px w-full bg-border-grey"}),l.map((e,r)=>(0,a.jsx)(S,{title:e.title,price:e.price,isYearly:c},r))]}),(0,a.jsx)(N,{finalPrice:x,isYearly:c})]}),(0,a.jsx)(v,{handleGoForwardStep:u,handleGoBack:t})]})}}];function T(){let{currentStep:e}=i(),r=w.find(r=>{let{step:t}=r;return t===e});return(0,a.jsxs)("div",{className:"flex flex-col flex-1 justify-between",children:[r&&(0,a.jsx)(r.component,{})," "]})}function C(e){let{step:r,isActive:t=!1}=e;return(0,a.jsxs)("div",{className:"flex flex-row items-center justify-start gap-6",children:[(0,a.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center border-2 ".concat(t?"border-sky-blue":"border-white"," ").concat(t?"bg-sky-blue":"bg-none"),children:(0,a.jsx)("span",{className:"text-sm font-bold ".concat(t?"text-denim":"text-white"),children:r.number})}),(0,a.jsxs)("div",{className:"hidden sm:flex sm:flex-col sm:gap-2",children:[(0,a.jsxs)("span",{className:"text-xs text-light-blue font-normal leading-3",children:["STEP ",r.number]}),(0,a.jsx)("strong",{className:"text-sm text-white font-bold leading-3 uppercase tracking-[1px]",children:r.title})]})]})}function _(){let{currentStep:e,steps:r}=i();return(0,a.jsx)("div",{className:"   flex justify-center items-start pt-8 h-[172px] w-full bg-no-repeat bg-cover bg-[url('/images/bg-sidebar-mobile.svg')]    sm:flex-col sm:justify-start sm:items-start sm:p-8 sm:w-[274px] sm:h-[calc(100vh-32px)] sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:rounded-lg sm:bg-center",children:(0,a.jsx)("div",{className:"flex flex-row gap-4 sm:flex-col sm:gap-8",children:r.map(r=>(0,a.jsx)(C,{step:r,isActive:r.number===e},r.number))})})}function k(){return(0,a.jsx)(o,{children:(0,a.jsx)(p,{children:(0,a.jsxs)("main",{className:"\n          flex flex-col h-screen m-0\n          sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]",children:[(0,a.jsx)(_,{}),(0,a.jsx)("div",{className:"flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto",children:(0,a.jsx)(T,{})})]})})})}}},function(e){e.O(0,[499,971,864,744],function(){return e(e.s=1273)}),_N_E=e.O()}]);