import{l as V,L as _,c as C,r as $,o as U,f as S,b as t,w,C as E,d as o,y as n,G as i,u as e,n as d,e as F,K as k,x as M,bV as A,bX as T,bY as B}from"./index-0961684d.js";import{r as b,e as N,c as q,s as D,u as I,g as m,_ as c}from"./validation-a33c2cb0.js";import{F as L}from"./FormFlushMessages-cebc09de.js";import{_ as P}from"./SubmitButton-e18a31b0.js";import{u as R,p as h}from"./vuelidate-6b267de9.js";import{c as W}from"./particles-20444eb5.js";const Y={class:"justify-content-center component-indentation-y"},j=["onSubmit"],z=o("h2",{class:"form-title text-center"},"Sign Up",-1),G={class:"mb-4"},K=o("label",{class:"form-label text-main"},"Username",-1),X={class:"mb-4"},H=o("label",{class:"form-label text-main"},"Email",-1),J={class:"mb-4"},O=o("label",{class:"form-label text-main"},"Password",-1),Q={class:"mb-4"},Z=o("label",{class:"form-label text-main"},"Password confirmation",-1),ee={class:"text-center mb-2"},se={class:"text-center"},oe={class:"mb-0"},ae=o("span",{class:"my-0 pe-1"},"Already registered ?",-1),ce={__name:"SignUpView",setup(te){const p=V(!1),u=_([]),l=_({username:"",email:"",password:"",passwordConfirmation:""}),g={username:{...R,required:b},email:{required:b,email:N},password:h,passwordConfirmation:{...h,sameAs:q.withMessage("The two password fields don’t match",D(C(()=>l.password)))}},s=I(g,l);async function y(){W(),T.success("You have successfully registered!"),await B.push({name:"logIn"})}async function v(){p.value=!0,u.length=0;try{await M.users.register({username:l.username,email:l.email,password:l.password}),await y()}catch(f){u.push(...A(f.request.response)),console.error(f.response)}finally{p.value=!1,s.value.$reset()}}return(f,a)=>{const x=$("router-link");return U(),S("div",Y,[t(E,{class:"container col-lg-5 col-md-8 col-sm-10"},{default:w(()=>[o("form",{onSubmit:k(v,["prevent"])},[z,t(L,{"error-messages":u},null,8,["error-messages"]),o("div",G,[K,n(o("input",{"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).username.$model=r),type:"text",class:d(["form-control only-bottom-border",e(m)(e(s).username)]),placeholder:"Enter username"},null,2),[[i,e(s).username.$model]]),t(c,{field:e(s).username},null,8,["field"])]),o("div",X,[H,n(o("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).email.$model=r),type:"email",class:d(["form-control only-bottom-border",e(m)(e(s).email)]),placeholder:"Enter email"},null,2),[[i,e(s).email.$model]]),t(c,{field:e(s).email},null,8,["field"])]),o("div",J,[O,n(o("input",{"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password.$model=r),type:"password",class:d(["form-control only-bottom-border",e(m)(e(s).password)]),placeholder:"Enter password"},null,2),[[i,e(s).password.$model]]),t(c,{field:e(s).password},null,8,["field"])]),o("div",Q,[Z,n(o("input",{"onUpdate:modelValue":a[3]||(a[3]=r=>e(s).passwordConfirmation.$model=r),type:"password",class:d(["form-control only-bottom-border",e(m)(e(s).passwordConfirmation)]),placeholder:"Confirm password"},null,2),[[i,e(s).passwordConfirmation.$model]]),t(c,{field:e(s).passwordConfirmation},null,8,["field"])]),o("div",ee,[t(P,{text:"Sign Up","show-loading":p.value,"is-disabled":e(s).$invalid},null,8,["show-loading","is-disabled"])]),o("div",se,[o("p",oe,[ae,t(x,{to:{name:"logIn"},class:"link-primary text-decoration-none"},{default:w(()=>[F(" Login to your account ")]),_:1})])])],40,j)]),_:1})])}}};export{ce as default};
