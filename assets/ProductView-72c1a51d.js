import{H as Z,_ as j,I as M,c as R,l as b,r as P,o,a as g,w as v,y as F,d as t,t as h,B as q,f as c,F as x,u as w,J as U,K as ee,n as B,G as te,h as y,b as i,e as k,C as $,x as O,L as z,p as H,i as Y,M as ne,O as oe,m as G,g as L,Q as se,j as ae,E as ce}from"./index-0961684d.js";import{h as le}from"./moment-fbc5633a.js";import{C as ie,a as re,N as me}from"./NutritionFacts-23f4c489.js";import{L as de}from"./LoadingSpinner-39e23b4d.js";import{S as ue}from"./ShowMoreButton-4da3ce61.js";import{W as pe}from"./WrappedLoadingSpinner-f4b5e77d.js";import{E as _e}from"./ErrorSection-3249fcd7.js";function E(e){return Z.includes(e)}const he={class:"d-flex"},ve=["src"],fe=["onSubmit"],ye={class:"input-group"},ge={class:"form-buttons"},be={key:0,class:"ms-3 mt-2 mb-0"},Ce={key:1,class:"text-center mx-auto"},xe={__name:"AddCommentForm",props:{objectId:{type:Number,required:!0},contentType:{type:String,required:!0,validator:E},parentId:{type:Number},isReplyForm:{type:Boolean,default:!1},commentsCount:{type:Number}},emits:["commentCreated","cancelButton"],setup(e,{emit:p}){const s=e,n=C=>p("commentCreated",C),_=()=>p("cancelButton"),r=M(),m=R(()=>r.getters["auth/user"]),d=b(""),f=b(!1),l=R(()=>typeof s.commentsCount=="number"),u=async()=>{const C=await a(d.value);d.value="",n(C)};async function a(C){f.value=!0;try{return(await O.comments.comment_add(s.objectId,s.contentType,C,s.parentId)).data}catch(S){console.error(S)}finally{f.value=!1}}return(C,S)=>{const N=P("router-link");return o(),g($,{shadow:!e.isReplyForm},{default:v(()=>[F(t("h3",{class:"mb-3"},h(e.commentsCount)+" "+h(e.commentsCount===1?"Comment":"Comments"),513),[[q,l.value]]),t("div",he,[f.value?(o(),c("div",Ce,[i(de)])):(o(),c(x,{key:0},[t("img",{class:"rounded-circle object-fit-cover",src:w(U)(m.value),alt:"author-image",width:"40",height:"40"},null,8,ve),t("form",{onSubmit:ee(u,["prevent"]),class:"comment-form w-100"},[t("div",ye,[F(t("input",{"onUpdate:modelValue":S[0]||(S[0]=I=>d.value=I),class:B(["comment-input form-control only-bottom-border",{"pe-none":!m.value}]),placeholder:"Add a comment...",maxlength:"516",type:"text",required:""},null,2),[[te,d.value]]),t("div",ge,[t("button",{class:B(["btn btn-outline-success form-button common-rounding fw-semibold",{disabled:!m.value}]),type:"submit",id:"comment-submit"}," Comment ",2),e.isReplyForm?(o(),c("button",{key:0,onClick:_,class:"btn btn-outline-purple-black form-button common-rounding ms-3 fw-semibold",type:"button"}," Cancel ")):y("",!0)])]),m.value?y("",!0):(o(),c("p",be,[i(N,{class:"link-main",to:{name:"logIn"}},{default:v(()=>[k("Log In")]),_:1}),k(" or "),i(N,{class:"link-main",to:{name:"signUp"}},{default:v(()=>[k("Sign Up")]),_:1}),k(" to leave comments. ")]))],40,fe)],64))])]),_:1},8,["shadow"])}}},J=j(xe,[["__scopeId","data-v-9c91240f"]]);const we=e=>(H("data-v-918df567"),e=e(),Y(),e),ke={class:"comment-wrp"},Se={class:"comment-body"},$e=["src"],Ie={id:"text-wrp"},Te={class:"text-body-secondary"},Re={key:0,class:"ms-1"},je={class:"text-break mb-0"},Ne={class:"replies"},Fe={class:"replies-buttons"},Ae={class:"ms-1"},Be=we(()=>t("span",{class:"mx-1"},"·",-1)),Le={key:1},W=40,Me={__name:"CommentCard",props:{objectId:{type:Number,required:!0},contentType:{type:String,required:!0,validator:E},comment:{type:Object,required:!0}},emits:["replyCreated"],setup(e,{emit:p}){const s=e;async function n(T){V(),s.comment.repliesCount+=1,s.comment.hasReplies=!0,m.value?(_.unshift(T),I()):s.comment.parent?p("replyCreated",T):I()}const _=z([]),r=b(!1),m=b(!1),d=b(!1),f=!s.comment.parent,l=s.comment.parent&&s.comment.parent.parentId!==null?`@${s.comment.parent.author.slug}`:"",u=le(s.comment.createdAt).fromNow(),a={name:"profile",params:{userSlug:s.comment.author.slug}},C={name:"profile",params:{userSlug:s.comment.parent?.author.slug}},S=async T=>_.push(...T.results);function N(){r.value?Q():I()}function I(){m.value=!0,r.value=!0}function Q(){r.value=!1}function V(){d.value=!1}function X(){d.value=!d.value}return(T,D)=>{const A=P("router-link");return o(),c("div",ke,[t("div",Se,[i(A,{to:a},{default:v(()=>[t("img",{class:"comment-avatar object-fit-cover",src:w(U)(e.comment.author),alt:"comment-author-image",width:W,height:W},null,8,$e)]),_:1}),t("div",Ie,[i(A,{class:"link link-dark comment-author-name",to:a},{default:v(()=>[k(h(e.comment.author.username),1)]),_:1}),t("span",Te,[t("span",null,h(w(u)),1),e.comment.edited?(o(),c("span",Re,"(edited)")):y("",!0)]),t("p",je,[w(l)?(o(),g(A,{key:0,class:"comment-author-prefix-link",to:C},{default:v(()=>[k(h(w(l))+"  ",1)]),_:1})):y("",!0),t("span",null,h(e.comment.text),1)])])]),t("div",Ne,[d.value?(o(),g(J,{key:0,"object-id":e.objectId,"content-type":e.contentType,"is-reply-form":!0,"parent-id":e.comment.id,onCancelButton:V,onCommentCreated:n},null,8,["object-id","content-type","parent-id"])):y("",!0),t("div",Fe,[f?(o(),c(x,{key:0},[t("button",{onClick:D[0]||(D[0]=yt=>e.comment.hasReplies&&N()),class:"btn btn-replies"},[e.comment.hasReplies?(o(),c(x,{key:0},[r.value?(o(),g(ie,{key:0})):(o(),g(re,{key:1}))],64)):y("",!0),t("span",Ae,h(e.comment.repliesCount)+" Replies ",1)]),Be],64)):y("",!0),t("button",{onClick:X,class:"btn btn-reply"},"Reply")]),m.value?F((o(),c("div",Le,[i(K,{comments:_,"object-id":e.objectId,"content-type":"product","parent-id":e.comment.id,"is-replies-section":!0,onCommentsLoaded:S},null,8,["comments","object-id","parent-id"])],512)),[[q,r.value]]):y("",!0)])])}}},Pe=j(Me,[["__scopeId","data-v-918df567"]]);const qe={},Oe=e=>(H("data-v-7de19d79"),e=e(),Y(),e),Ee={class:"comment-wrp d-flex"},Ve=Oe(()=>t("svg",{class:"comment-avatar bd-placeholder-img",width:"40",height:"40",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[t("rect",{width:"100%",height:"100%",fill:"#AFCFFF"})],-1)),De=ne('<div class="placeholder-glow" data-v-7de19d79><span class="placeholder comment-author-name col-2" data-v-7de19d79></span><span class="placeholder placeholder-text bg-secondary col-2" data-v-7de19d79></span><div class="placeholder-glow" data-v-7de19d79><span class="placeholder placeholder-text col-4" data-v-7de19d79></span><span class="placeholder placeholder-text col-3" data-v-7de19d79></span></div><div class="placeholder-glow" data-v-7de19d79><span class="placeholder placeholder-text placeholder-text-replies col-1" data-v-7de19d79></span><span class="placeholder placeholder-text placeholder-text-replies col-1" data-v-7de19d79></span></div></div>',1),We=[Ve,De];function Ue(e,p){return o(),c("div",Ee,We)}const ze=j(qe,[["render",Ue],["__scopeId","data-v-7de19d79"]]),He="/HealthNutrition-Frontend/assets/comment-2c1c3cf7.svg",Ye={},Ge={class:"container text-center"},Je=t("img",{class:"mb-4",src:He,alt:"comment-icon",width:"125",height:"125"},null,-1),Ke=t("h4",null,"Looks like no one has left a comment yet, be the first!",-1),Qe=[Je,Ke];function Xe(e,p){return o(),c("div",Ge,Qe)}const Ze=j(Ye,[["render",Xe]]);const et={id:"comments-wrp",class:"container overflow-scroll"},tt={__name:"CommentsSection",props:{comments:{type:Object,required:!0},objectId:{type:Number,required:!0},contentType:{type:String,required:!0,validator:E},parentId:{type:Number},isRepliesSection:{type:Boolean,default:!1}},emits:["commentsLoaded"],setup(e,{emit:p}){const s=e;R(()=>oe.getters["auth/user"]);const n=b(!1),_=b(!1),r=R(()=>_.value&&!n.value);function m(l){p("commentsLoaded",l)}async function d(l=1){n.value=!0;try{const u=(await O.comments.comments(s.objectId,s.contentType,l,s.parentId)).data;_.value=u.next!==null,m(u)}catch(u){console.error(u)}finally{n.value=!1}}function f(l){const u=s.comments.findIndex(a=>a.id===l.parentId);s.comments.splice(u+1,0,l)}return G(async()=>{await d()}),(l,u)=>(o(),c(x,null,[i($,{class:B([{"mb-3":!e.isRepliesSection&&r.value},{"pb-0":e.isRepliesSection}]),shadow:!e.isRepliesSection},{default:v(()=>[t("div",et,[(o(!0),c(x,null,L(e.comments,a=>(o(),g(Pe,{key:a.id,"object-id":e.objectId,"content-type":e.contentType,comment:a,onReplyCreated:f,class:"animate__animated animate__fadeIn"},null,8,["object-id","content-type","comment"]))),128)),n.value?(o(!0),c(x,{key:0},L(w(se),a=>(o(),g(ze,{key:a}))),128)):e.comments.length===0?(o(),g(Ze,{key:1})):y("",!0)])]),_:1},8,["class","shadow"]),i($,{padding:0},{default:v(()=>[F(i(ue,{"pagination-type":"pageNumber",onShowMoreButtonClick:d},null,512),[[q,r.value]])]),_:1})],64))}},K=j(tt,[["__scopeId","data-v-2668c5f0"]]),nt={class:"text-main font-big"},ot={class:"list-group list-group-flush font-standard"},st={class:"fw-semibold"},at={class:"text-main-light"},ct={class:"list-group-item font-small"},lt={key:0},it=t("span",null,"Values estimated based on person weighing 70 kg.",-1),rt=t("span",null,"to personalize.",-1),mt={__name:"TimeToBurnCalories",props:{calories:{type:Number,required:!0},walkingTime:{type:String,required:!0},runningTime:{type:String,required:!0},cyclingTime:{type:String,required:!0}},setup(e){const p=e,n=M().getters["auth/user"],_=[{name:"Walking (3mph)",value:p.walkingTime},{name:"Running (6mph)",value:p.runningTime},{name:"Cycling (10mph)",value:p.cyclingTime}],r={name:"logIn"};return(m,d)=>{const f=P("router-link");return o(),g($,{class:"text-center"},{default:v(()=>[t("h2",nt," Time to burn "+h(e.calories)+" kcal ",1),t("ul",ot,[(o(),c(x,null,L(_,(l,u)=>t("li",{key:u,class:"list-group-item"},[t("span",st,h(l.name)+": ",1),t("span",at,h(l.value),1)])),64)),t("li",ct,[w(n)?(o(),c("span",lt," The values are calculated based on your weight ("+h(w(n).profile.bodyWeight)+" kg). ",1)):(o(),c(x,{key:1},[it,i(f,{to:r,class:"link-primary text-decoration-none"},{default:v(()=>[k(" Log In ")]),_:1}),rt],64))])])]),_:1})}}};const dt={class:"text-main font-large"},ut={class:"fs-5 mb-0"},pt=t("h2",{class:"text-main font-big text-center"},"Description",-1),_t=["innerHTML"],ht={class:"row justify-content-center component-indentation-bottom"},vt={class:"col-xxl-6 col-xl-6 col-lg-6 mb-3 mb-lg-0 mb-xl-0 mb-xxl-0"},ft={class:"col-xxl-6 col-xl-6 col-lg-6"},$t={__name:"ProductView",setup(e){const p=M();R(()=>p.getters["auth/user"]);const s=ae(),n=b(null),_=z([]),r=b(!1),m=b(0);async function d(){try{return(await O.products.product(s.params.productSlug)).data}catch(a){a.response.status===404&&(r.value=!0),console.error(a.response)}}async function f(){n.value=await d()}function l(a){_.push(...a.results),m.value=a.count}async function u(a){_.unshift(a),m.value++}return G(async()=>{await f().then(async()=>{document.title=ce(n.value.name)})}),(a,C)=>(o(),c(x,null,[r.value?(o(),g(_e,{key:0,description:"Oops... Looks like there is no such product or it has been removed."})):y("",!0),i(pe,{"is-loading":!n.value},{default:v(()=>[i($,{class:"text-center"},{default:v(()=>[t("h1",dt,h(n.value.category.name)+" - "+h(n.value.name),1),t("p",ut,h(n.value.shortDescription),1)]),_:1}),i($,{class:"component-indentation-y"},{default:v(()=>[pt,t("p",{class:"fs-5 mb-0",innerHTML:n.value.description},null,8,_t)]),_:1}),t("div",ht,[t("div",vt,[i(me,{class:"h-100",calories:n.value.nutrition.calories,protein:parseFloat(n.value.nutrition.protein),fat:parseFloat(n.value.nutrition.fat),carbs:parseFloat(n.value.nutrition.carbs)},null,8,["calories","protein","fat","carbs"])]),t("div",ft,[i(mt,{class:"h-100","cycling-time":n.value.caloriesBurningTime.cycling,"running-time":n.value.caloriesBurningTime.running,"walking-time":n.value.caloriesBurningTime.walking,calories:n.value.nutrition.calories},null,8,["cycling-time","running-time","walking-time","calories"])])]),i(J,{class:"mb-3","object-id":n.value.id,"content-type":"product","comments-count":m.value,onCommentCreated:u},null,8,["object-id","comments-count"]),i(K,{comments:_,"object-id":n.value.id,"content-type":"product",onCommentsLoaded:l},null,8,["comments","object-id"])]),_:1},8,["is-loading"])],64))}};export{$t as default};
