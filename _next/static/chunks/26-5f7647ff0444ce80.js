(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{8951:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var r=o(3366),n=o(7462),i=o(7294),a=o(6010),l=o(4780),s=o(1496),p=o(3616),c=o(5861),u=o(1588),d=o(4867);function m(e){return(0,d.Z)("MuiDialogContentText",e)}(0,u.Z)("MuiDialogContentText",["root"]);var f=o(5893);let h=["children","className"],g=e=>{let{classes:t}=e,o=(0,l.Z)({root:["root"]},m,t);return(0,n.Z)({},t,o)},v=(0,s.ZP)(c.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Z=i.forwardRef(function(e,t){let o=(0,p.Z)({props:e,name:"MuiDialogContentText"}),{className:i}=o,l=(0,r.Z)(o,h),s=g(l);return(0,f.jsx)(v,(0,n.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:l,className:(0,a.Z)(s.root,i)},o,{classes:s}))});var b=Z},7645:function(e,t,o){"use strict";var r=o(7462),n=o(3366),i=o(7294),a=o(6010),l=o(4780),s=o(5861),p=o(1496),c=o(3616),u=o(4472),d=o(4182),m=o(5893);let f=["className","id"],h=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u.a,t)},g=(0,p.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),v=i.forwardRef(function(e,t){let o=(0,c.Z)({props:e,name:"MuiDialogTitle"}),{className:l,id:s}=o,p=(0,n.Z)(o,f),u=h(o),{titleId:v=s}=i.useContext(d.Z);return(0,m.jsx)(g,(0,r.Z)({component:"h2",className:(0,a.Z)(u.root,l),ownerState:o,ref:t,variant:"h6",id:null!=s?s:v},p))});t.Z=v},8032:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r=o(3366),n=o(7462),i=o(7294),a=o(6010),l=o(4780),s=o(9990),p=o(8216),c=o(3616),u=o(1588),d=o(4867);function m(e){return(0,d.Z)("MuiFab",e)}let f=(0,u.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var h=o(1496),g=o(5893);let v=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],Z=e=>{let{color:t,variant:o,classes:r,size:i}=e,a={root:["root",o,`size${(0,p.Z)(i)}`,"inherit"===t?"colorInherit":t]},s=(0,l.Z)(a,m,r);return(0,n.Z)({},r,s)},b=(0,h.ZP)(s.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`size${(0,p.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,t[(0,p.Z)(o.size)],t[o.color]]}})(({theme:e,ownerState:t})=>{var o,r;return(0,n.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${f.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,n.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${f.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),x=i.forwardRef(function(e,t){let o=(0,c.Z)({props:e,name:"MuiFab"}),{children:i,className:l,color:s="default",component:p="button",disabled:u=!1,disableFocusRipple:d=!1,focusVisibleClassName:m,size:f="large",variant:h="circular"}=o,x=(0,r.Z)(o,v),w=(0,n.Z)({},o,{color:s,component:p,disabled:u,disableFocusRipple:d,size:f,variant:h}),y=Z(w);return(0,g.jsx)(b,(0,n.Z)({className:(0,a.Z)(y.root,l),component:p,disabled:u,focusRipple:!d,focusVisibleClassName:(0,a.Z)(y.focusVisible,m),ownerState:w,ref:t},x,{classes:y,children:i}))});var w=x},6323:function(e,t,o){"use strict";o.d(t,{Z:function(){return N}});var r=o(3366),n=o(7462),i=o(7294);o(6607);var a=o(6010),l=o(4780),s=o(1496),p=o(3616),c=o(2734),u=o(8885),d=o(577),m=o(1705),f=o(5893);let h=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],g={entering:{transform:"none"},entered:{transform:"none"}},v=i.forwardRef(function(e,t){let o=(0,c.Z)(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:l,appear:s=!0,children:p,easing:v,in:Z,onEnter:b,onEntered:x,onEntering:w,onExit:y,onExited:T,onExiting:R,style:C,timeout:S=a,TransitionComponent:E=u.ZP}=e,M=(0,r.Z)(e,h),P=i.useRef(null),k=(0,m.Z)(P,p.ref,t),D=e=>t=>{if(e){let o=P.current;void 0===t?e(o):e(o,t)}},L=D(w),$=D((e,t)=>{(0,d.n)(e);let r=(0,d.C)({style:C,timeout:S,easing:v},{mode:"enter"});e.style.webkitTransition=o.transitions.create("transform",r),e.style.transition=o.transitions.create("transform",r),b&&b(e,t)}),F=D(x),N=D(R),O=D(e=>{let t=(0,d.C)({style:C,timeout:S,easing:v},{mode:"exit"});e.style.webkitTransition=o.transitions.create("transform",t),e.style.transition=o.transitions.create("transform",t),y&&y(e)}),z=D(T),I=e=>{l&&l(P.current,e)};return(0,f.jsx)(E,(0,n.Z)({appear:s,in:Z,nodeRef:P,onEnter:$,onEntered:F,onEntering:L,onExit:O,onExited:z,onExiting:N,addEndListener:I,timeout:S},M,{children:(e,t)=>i.cloneElement(p,(0,n.Z)({style:(0,n.Z)({transform:"scale(0)",visibility:"exited"!==e||Z?void 0:"hidden"},g[e],C,p.props.style),ref:k},t))}))});var Z=o(8032),b=o(8216),x=o(1579),w=o(9299),y=o(1588),T=o(4867);function R(e){return(0,T.Z)("MuiSpeedDial",e)}let C=(0,y.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),S=["ref"],E=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],M=["ref"],P=e=>{let{classes:t,open:o,direction:r}=e,n={root:["root",`direction${(0,b.Z)(r)}`],fab:["fab"],actions:["actions",!o&&"actionsClosed"]};return(0,l.Z)(n,R,t)};function k(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}let D=(0,s.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[`direction${(0,b.Z)(o.direction)}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===t.direction&&{flexDirection:"column-reverse",[`& .${C.actions}`]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===t.direction&&{flexDirection:"column",[`& .${C.actions}`]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===t.direction&&{flexDirection:"row-reverse",[`& .${C.actions}`]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===t.direction&&{flexDirection:"row",[`& .${C.actions}`]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}})),L=(0,s.ZP)(Z.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,t)=>t.fab})(()=>({pointerEvents:"auto"})),$=(0,s.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.actions,!o.open&&t.actionsClosed]}})(({ownerState:e})=>(0,n.Z)({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),F=i.forwardRef(function(e,t){let o=(0,p.Z)({props:e,name:"MuiSpeedDial"}),l=(0,c.Z)(),s={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{ariaLabel:u,FabProps:{ref:d}={},children:h,className:g,direction:Z="up",hidden:b=!1,icon:y,onBlur:T,onClose:R,onFocus:C,onKeyDown:F,onMouseEnter:N,onMouseLeave:O,onOpen:z,open:I,TransitionComponent:A=v,transitionDuration:j=s,TransitionProps:B}=o,W=(0,r.Z)(o.FabProps,S),V=(0,r.Z)(o,E),[H,U]=(0,w.Z)({controlled:I,default:!1,name:"SpeedDial",state:"open"}),_=(0,n.Z)({},o,{open:H,direction:Z}),K=P(_),q=i.useRef();i.useEffect(()=>()=>{clearTimeout(q.current)},[]);let X=i.useRef(0),Y=i.useRef(),G=i.useRef([]);G.current=[G.current[0]];let J=i.useCallback(e=>{G.current[0]=e},[]),Q=(0,m.Z)(d,J),ee=(e,t)=>o=>{G.current[e+1]=o,t&&t(o)},et=e=>{F&&F(e);let t=e.key.replace("Arrow","").toLowerCase(),{current:o=t}=Y;if("Escape"===e.key){U(!1),G.current[0].focus(),R&&R(e,"escapeKeyDown");return}if(k(t)===k(o)&&void 0!==k(t)){var r,n;e.preventDefault();let i=(r=X.current+(t===o?1:-1),n=G.current.length-1,r<0?0:r>n?n:r);G.current[i].focus(),X.current=i,Y.current=o}};i.useEffect(()=>{H||(X.current=0,Y.current=void 0)},[H]);let eo=e=>{"mouseleave"===e.type&&O&&O(e),"blur"===e.type&&T&&T(e),clearTimeout(q.current),"blur"===e.type?q.current=setTimeout(()=>{U(!1),R&&R(e,"blur")}):(U(!1),R&&R(e,"mouseLeave"))},er=e=>{W.onClick&&W.onClick(e),clearTimeout(q.current),H?(U(!1),R&&R(e,"toggle")):(U(!0),z&&z(e,"toggle"))},en=e=>{"mouseenter"===e.type&&N&&N(e),"focus"===e.type&&C&&C(e),clearTimeout(q.current),H||(q.current=setTimeout(()=>{U(!0),z&&z(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}))},ei=u.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ea=i.Children.toArray(h).filter(e=>i.isValidElement(e)),el=ea.map((e,t)=>{let o=e.props,{FabProps:{ref:a}={},tooltipPlacement:l}=o,s=(0,r.Z)(o.FabProps,M),p=l||("vertical"===k(Z)?"left":"top");return i.cloneElement(e,{FabProps:(0,n.Z)({},s,{ref:ee(t,a)}),delay:30*(H?t:ea.length-t),open:H,tooltipPlacement:p,id:`${ei}-action-${t}`})});return(0,f.jsxs)(D,(0,n.Z)({className:(0,a.Z)(K.root,g),ref:t,role:"presentation",onKeyDown:et,onBlur:eo,onFocus:en,onMouseEnter:en,onMouseLeave:eo,ownerState:_},V,{children:[(0,f.jsx)(A,(0,n.Z)({in:!b,timeout:j,unmountOnExit:!0},B,{children:(0,f.jsx)(L,(0,n.Z)({color:"primary","aria-label":u,"aria-haspopup":"true","aria-expanded":H,"aria-controls":`${ei}-actions`},W,{onClick:er,className:(0,a.Z)(K.fab,W.className),ref:Q,ownerState:_,children:i.isValidElement(y)&&(0,x.Z)(y,["SpeedDialIcon"])?i.cloneElement(y,{open:H}):y}))})),(0,f.jsx)($,{id:`${ei}-actions`,role:"menu","aria-orientation":k(Z),className:(0,a.Z)(K.actions,!H&&K.actionsClosed),ownerState:_,children:el})]}))});var N=F},1981:function(e,t,o){"use strict";o.d(t,{Z:function(){return U}});var r=o(3366),n=o(7462),i=o(7294),a=o(6010),l=o(4780),s=o(1796),p=o(1496),c=o(3616),u=o(8032),d=o(238),m=o(2734),f=o(8216),h=o(6514),g=o(6078),v=o(2068),Z=o(1705),b=o(2996).Z,x=o(8791),w=o(9299),y=o(1588),T=o(4867);function R(e){return(0,T.Z)("MuiTooltip",e)}let C=(0,y.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var S=o(5893);let E=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],M=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,f.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,l.Z)(a,R,t)},P=(0,p.ZP)(g.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(({theme:e,ownerState:t,open:o})=>(0,n.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${C.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${C.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${C.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${C.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),k=(0,p.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,f.Z)(o.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,s.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${C.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${C.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${C.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${C.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),D=(0,p.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,s.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),L=!1,$=null,F={x:0,y:0};function N(e,t){return o=>{t&&t(o),e(o)}}let O=i.forwardRef(function(e,t){var o,l,s,p,u,f,y,T,R,C,O,z,I,A,j,B,W,V,H;let U=(0,c.Z)({props:e,name:"MuiTooltip"}),{arrow:_=!1,children:K,components:q={},componentsProps:X={},describeChild:Y=!1,disableFocusListener:G=!1,disableHoverListener:J=!1,disableInteractive:Q=!1,disableTouchListener:ee=!1,enterDelay:et=100,enterNextDelay:eo=0,enterTouchDelay:er=700,followCursor:en=!1,id:ei,leaveDelay:ea=0,leaveTouchDelay:el=1500,onClose:es,onOpen:ep,open:ec,placement:eu="bottom",PopperComponent:ed,PopperProps:em={},slotProps:ef={},slots:eh={},title:eg,TransitionComponent:ev=h.Z,TransitionProps:eZ}=U,eb=(0,r.Z)(U,E),ex=i.isValidElement(K)?K:(0,S.jsx)("span",{children:K}),ew=(0,m.Z)(),ey="rtl"===ew.direction,[eT,eR]=i.useState(),[eC,eS]=i.useState(null),eE=i.useRef(!1),eM=Q||en,eP=i.useRef(),ek=i.useRef(),eD=i.useRef(),eL=i.useRef(),[e$,eF]=(0,w.Z)({controlled:ec,default:!1,name:"Tooltip",state:"open"}),eN=e$,eO=b(ei),ez=i.useRef(),eI=i.useCallback(()=>{void 0!==ez.current&&(document.body.style.WebkitUserSelect=ez.current,ez.current=void 0),clearTimeout(eL.current)},[]);i.useEffect(()=>()=>{clearTimeout(eP.current),clearTimeout(ek.current),clearTimeout(eD.current),eI()},[eI]);let eA=e=>{clearTimeout($),L=!0,eF(!0),ep&&!eN&&ep(e)},ej=(0,v.Z)(e=>{clearTimeout($),$=setTimeout(()=>{L=!1},800+ea),eF(!1),es&&eN&&es(e),clearTimeout(eP.current),eP.current=setTimeout(()=>{eE.current=!1},ew.transitions.duration.shortest)}),eB=e=>{eE.current&&"touchstart"!==e.type||(eT&&eT.removeAttribute("title"),clearTimeout(ek.current),clearTimeout(eD.current),et||L&&eo?ek.current=setTimeout(()=>{eA(e)},L?eo:et):eA(e))},eW=e=>{clearTimeout(ek.current),clearTimeout(eD.current),eD.current=setTimeout(()=>{ej(e)},ea)},{isFocusVisibleRef:eV,onBlur:eH,onFocus:eU,ref:e_}=(0,x.Z)(),[,eK]=i.useState(!1),eq=e=>{eH(e),!1===eV.current&&(eK(!1),eW(e))},eX=e=>{eT||eR(e.currentTarget),eU(e),!0===eV.current&&(eK(!0),eB(e))},eY=e=>{eE.current=!0;let t=ex.props;t.onTouchStart&&t.onTouchStart(e)},eG=e=>{eY(e),clearTimeout(eD.current),clearTimeout(eP.current),eI(),ez.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eL.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ez.current,eB(e)},er)},eJ=e=>{ex.props.onTouchEnd&&ex.props.onTouchEnd(e),eI(),clearTimeout(eD.current),eD.current=setTimeout(()=>{ej(e)},el)};i.useEffect(()=>{if(eN)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&ej(e)}},[ej,eN]);let eQ=(0,Z.Z)(ex.ref,e_,eR,t);eg||0===eg||(eN=!1);let e0=i.useRef(),e1=e=>{let t=ex.props;t.onMouseMove&&t.onMouseMove(e),F={x:e.clientX,y:e.clientY},e0.current&&e0.current.update()},e6={},e4="string"==typeof eg;Y?(e6.title=eN||!e4||J?null:eg,e6["aria-describedby"]=eN?eO:null):(e6["aria-label"]=e4?eg:null,e6["aria-labelledby"]=eN&&!e4?eO:null);let e8=(0,n.Z)({},e6,eb,ex.props,{className:(0,a.Z)(eb.className,ex.props.className),onTouchStart:eY,ref:eQ},en?{onMouseMove:e1}:{}),e2={};ee||(e8.onTouchStart=eG,e8.onTouchEnd=eJ),J||(e8.onMouseOver=N(eB,e8.onMouseOver),e8.onMouseLeave=N(eW,e8.onMouseLeave),eM||(e2.onMouseOver=eB,e2.onMouseLeave=eW)),G||(e8.onFocus=N(eX,e8.onFocus),e8.onBlur=N(eq,e8.onBlur),eM||(e2.onFocus=eX,e2.onBlur=eq));let e7=i.useMemo(()=>{var e;let t=[{name:"arrow",enabled:!!eC,options:{element:eC,padding:4}}];return null!=(e=em.popperOptions)&&e.modifiers&&(t=t.concat(em.popperOptions.modifiers)),(0,n.Z)({},em.popperOptions,{modifiers:t})},[eC,em]),e3=(0,n.Z)({},U,{isRtl:ey,arrow:_,disableInteractive:eM,placement:eu,PopperComponentProp:ed,touch:eE.current}),e9=M(e3),e5=null!=(o=null!=(l=eh.popper)?l:q.Popper)?o:P,te=null!=(s=null!=(p=null!=(u=eh.transition)?u:q.Transition)?p:ev)?s:h.Z,tt=null!=(f=null!=(y=eh.tooltip)?y:q.Tooltip)?f:k,to=null!=(T=null!=(R=eh.arrow)?R:q.Arrow)?T:D,tr=(0,d.Z)(e5,(0,n.Z)({},em,null!=(C=ef.popper)?C:X.popper,{className:(0,a.Z)(e9.popper,null==em?void 0:em.className,null==(O=null!=(z=ef.popper)?z:X.popper)?void 0:O.className)}),e3),tn=(0,d.Z)(te,(0,n.Z)({},eZ,null!=(I=ef.transition)?I:X.transition),e3),ti=(0,d.Z)(tt,(0,n.Z)({},null!=(A=ef.tooltip)?A:X.tooltip,{className:(0,a.Z)(e9.tooltip,null==(j=null!=(B=ef.tooltip)?B:X.tooltip)?void 0:j.className)}),e3),ta=(0,d.Z)(to,(0,n.Z)({},null!=(W=ef.arrow)?W:X.arrow,{className:(0,a.Z)(e9.arrow,null==(V=null!=(H=ef.arrow)?H:X.arrow)?void 0:V.className)}),e3);return(0,S.jsxs)(i.Fragment,{children:[i.cloneElement(ex,e8),(0,S.jsx)(e5,(0,n.Z)({as:null!=ed?ed:g.Z,placement:eu,anchorEl:en?{getBoundingClientRect:()=>({top:F.y,left:F.x,right:F.x,bottom:F.y,width:0,height:0})}:eT,popperRef:e0,open:!!eT&&eN,id:eO,transition:!0},e2,tr,{popperOptions:e7,children:({TransitionProps:e})=>(0,S.jsx)(te,(0,n.Z)({timeout:ew.transitions.duration.shorter},e,tn,{children:(0,S.jsxs)(tt,(0,n.Z)({},ti,{children:[eg,_?(0,S.jsx)(to,(0,n.Z)({},ta,{ref:eS})):null]}))}))}))]})});function z(e){return(0,T.Z)("MuiSpeedDialAction",e)}let I=(0,y.Z)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),A=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],j=e=>{let{open:t,tooltipPlacement:o,classes:r}=e,n={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${(0,f.Z)(o)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,l.Z)(n,z,r)},B=(0,p.ZP)(u.Z,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.fab,!o.open&&t.fabClosed]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:(0,s._4)(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})),W=(0,p.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.staticTooltip,!o.open&&t.staticTooltipClosed,t[`tooltipPlacement${(0,f.Z)(o.tooltipPlacement)}`]]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",[`& .${I.staticTooltipLabel}`]:(0,n.Z)({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},"left"===t.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===t.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),V=(0,p.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,t)=>t.staticTooltipLabel})(({theme:e})=>(0,n.Z)({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),H=i.forwardRef(function(e,t){let o=(0,c.Z)({props:e,name:"MuiSpeedDialAction"}),{className:l,delay:s=0,FabProps:p={},icon:u,id:d,open:m,TooltipClasses:f,tooltipOpen:h=!1,tooltipPlacement:g="left",tooltipTitle:v}=o,Z=(0,r.Z)(o,A),b=(0,n.Z)({},o,{tooltipPlacement:g}),x=j(b),[w,y]=i.useState(h),T=()=>{y(!1)},R=()=>{y(!0)},C={transitionDelay:`${s}ms`},E=(0,S.jsx)(B,(0,n.Z)({size:"small",className:(0,a.Z)(x.fab,l),tabIndex:-1,role:"menuitem",ownerState:b},p,{style:(0,n.Z)({},C,p.style),children:u}));return h?(0,S.jsxs)(W,(0,n.Z)({id:d,ref:t,className:x.staticTooltip,ownerState:b},Z,{children:[(0,S.jsx)(V,{style:C,id:`${d}-label`,className:x.staticTooltipLabel,ownerState:b,children:v}),i.cloneElement(E,{"aria-labelledby":`${d}-label`})]})):(!m&&w&&y(!1),(0,S.jsx)(O,(0,n.Z)({id:d,ref:t,title:v,placement:g,onClose:T,onOpen:R,open:m&&w,classes:f},Z,{children:E})))});var U=H},1163:function(e,t,o){e.exports=o(6885)}}]);