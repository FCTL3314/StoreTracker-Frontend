import{j as R,l as c,L as $,c as A,m as U,r as N,o as m,a as v,w as u,x as y,f as B,b as t,d as s,y as k,G as P,u as e,n as b,e as E,K as M,C as S,bY as W,bX as j}from"./index-0961684d.js";import{c as L,s as F,u as Y,g,_ as x}from"./validation-a33c2cb0.js";import{_ as q}from"./SubmitButton-e18a31b0.js";import{p as C}from"./vuelidate-6b267de9.js";import{W as z}from"./WrappedLoadingSpinner-f4b5e77d.js";import{E as G}from"./ErrorSection-3249fcd7.js";import{c as K}from"./particles-20444eb5.js";import"./LoadingSpinner-39e23b4d.js";const O={key:0,class:"justify-content-center component-indentation-y"},X=["onSubmit"],H=s("h2",{class:"form-title text-center"},"Password Reset",-1),J=s("p",null," Please provide a new password for your account. In the future, you will have to use this new password to log in. ",-1),Q={class:"mb-4"},Z=s("label",{class:"form-label text-main"},"New password",-1),ss={class:"mb-4"},es=s("label",{class:"form-label text-main"},"New password confirmation",-1),os={class:"text-center my-2"},ts={class:"text-center"},as={class:"mb-0"},ns=s("span",{class:"my-0 pe-1"},"Don't want to reset ?",-1),fs={__name:"PasswordResetConfirmView",setup(rs){const w=R(),r=c(!0),p=c(!1),i=c(!1),f=w.params.uid,_=w.params.token,l=$({newPassword:"",newPasswordConfirmation:""}),V={newPassword:C,newPasswordConfirmation:{...C,sameAs:L.withMessage("The two password fields don’t match",F(A(()=>l.newPassword)))}},o=Y(V,l);async function T(){r.value=!0;try{return(await y.auth.checkUIDAndToken({uid:f,token:_})).request.status===204}catch(a){console.error(a)}finally{r.value=!1}}const h={name:"logIn"};async function I(){i.value=!0;try{await y.users.resetPasswordConfirm({uid:f,token:_,newPassword:l.newPassword}),await W.push(h),K(),j.success("Your password has been successfully updated, use it to log in.")}catch(a){console.error(a)}finally{i.value=!1}}return U(async()=>{p.value=await T()}),(a,n)=>{const D=N("router-link");return m(),v(z,{text:"Check the validity of the link...","is-loading":r.value},{default:u(()=>[p.value?(m(),B("div",O,[t(S,{class:"container col-xxl-4 col-lg-5 col-md-7 col-sm-9"},{default:u(()=>[s("form",{onSubmit:M(I,["prevent"])},[H,J,s("div",Q,[Z,k(s("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>e(o).newPassword.$model=d),type:"password",class:b(["form-control only-bottom-border",e(g)(e(o).newPassword)]),placeholder:"Enter new password"},null,2),[[P,e(o).newPassword.$model]]),t(x,{field:e(o).newPassword},null,8,["field"])]),s("div",ss,[es,k(s("input",{"onUpdate:modelValue":n[1]||(n[1]=d=>e(o).newPasswordConfirmation.$model=d),type:"password",class:b(["form-control only-bottom-border",e(g)(e(o).newPasswordConfirmation)]),placeholder:"Confirm new password"},null,2),[[P,e(o).newPasswordConfirmation.$model]]),t(x,{field:e(o).newPasswordConfirmation},null,8,["field"])]),s("div",os,[t(q,{text:"Reset","show-loading":i.value},null,8,["show-loading"])]),s("div",ts,[s("p",as,[ns,t(D,{to:h,class:"link link-primary text-decoration-none"},{default:u(()=>[E(" Log In ")]),_:1})])])],40,X)]),_:1})])):(m(),v(G,{key:1,"show-sad-emoji":!0,description:"Ouch... This link has expired or is not valid.","show-go-back-button":!1}))]),_:1},8,["is-loading"])}}};export{fs as default};
