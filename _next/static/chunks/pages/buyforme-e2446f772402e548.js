(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{3404:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buyforme",function(){return i(3619)}])},157:function(e,t){"use strict";t.Z={src:"/next-test/_next/static/media/half-sausage-left.570a1eee.svg",height:101,width:167,blurWidth:0,blurHeight:0}},7821:function(e,t){"use strict";t.Z={src:"/next-test/_next/static/media/half-sausage-right.0af99efc.svg",height:101,width:168,blurWidth:0,blurHeight:0}},3950:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(5893);i(7294);var o=i(3321),a=i(6587),r=i.n(a);function s(e){let{text:t="set text",padding:i="15px 30px",fs:a="var(--h5)",onClick:s=()=>{},...l}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{className:r().btn,sx:{"&& .MuiTouchRipple-child":{backgroundColor:"#911010"},padding:{padding:i},...l.sx},onClick:s,children:(0,n.jsx)("div",{className:r().btn_text,style:{fontSize:a},children:t})})})}},7157:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(5893);i(7294);var o=i(8159);function a(e){let{label:t="input name",placeholder:i="",helperText:a="",required:r=!1,error:s=!1,fullWidth:l=!1,value:d,onChange:c=()=>{},...m}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{error:s,id:"outlined-basic",label:t,variant:"outlined",required:r,value:d,helperText:a,placeholder:i,fullWidth:l,sx:{"&:hover fieldset":{backgroundColor:"rgba(153,153,153,0.2)"},...m.sx},onChange:c})})}},9176:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(5893);function o(e){return(0,n.jsx)("main",{children:e})}},3619:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return P}});var n=i(5893),o=i(7294),a=i(7054),r=i(4839),s=i.n(r),l={src:"/next-test/_next/static/media/shop_icon.42a50604.svg",height:82,width:64,blurWidth:0,blurHeight:0};function d(e){let{data:t}=e,{isLoaded:i}=(0,a.Db)({googleMapsApiKey:""});return i?(0,n.jsx)(m,{data:t}):(0,n.jsx)("div",{children:"Loading..."})}let c=[{img:"bubbleTea.svg",title:"匿名珍奶"},{img:"candyChief.svg",title:"匿名糖果"},{img:"chip.svg",title:"匿名薯片"},{img:"chocoCookie.svg",title:"匿名餅乾"},{img:"sushi.svg",title:"匿名壽司"},{img:"hamburger.svg",title:"匿名漢堡"}];function m(e){let{data:t}=e,[i,a]=(0,o.useState)({lat:44,lng:-80});return(0,o.useEffect)(()=>{navigator.geolocation.getCurrentPosition(function(e){let t={lat:e.coords.latitude,lng:e.coords.longitude};a(t)})},[]),(0,o.useEffect)(()=>{let e=new window.google.maps.Map(document.getElementById("map"),{zoom:18,center:i,mapTypeControl:!1}),n=c[Math.floor(c.length*Math.random())];new window.google.maps.Marker({position:i,map:e,icon:{url:"/buyforme/map/user_icon/"+n.img,scaledSize:new window.google.maps.Size(60,60),labelOrigin:new window.google.maps.Point(30,80)},label:{text:n.title,color:"white",fontSize:"var(--h7)",fontWeight:"bold",className:s().userLabel},opacity:1,animation:window.google.maps.Animation.BOUNCE}),t.map((t,i)=>{new window.google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:e,icon:{url:l.src,labelOrigin:new window.google.maps.Point(30,100)},label:{text:t.shop,color:"var(--main-color)",fontSize:"var(--h7)",fontWeight:"900",className:s().mapLabel}})})},[t,i]),(0,n.jsx)("div",{id:"map",className:s().map_container})}var u=i(9176),_=i(5675),h=i.n(_),p=i(157),b=i(7821),x=i(8159),g=i(7357),f=i(6323),v=i(1981),j=i(2143),w=i(4775),y=i(6731),Z=i(3487),N=i(2980),C=i.n(N);i(1664);var k=i(1163);let M=[{icon:(0,n.jsxs)("div",{children:[(0,n.jsx)(h(),{src:j.Z,width:35,alt:"美食論壇"}),(0,n.jsx)("div",{className:C().iconText,children:"美食論壇"})]}),name:"美食論壇",router:"/forum"},{icon:(0,n.jsxs)("div",{children:[(0,n.jsx)(h(),{src:w.Z,width:55,alt:"美食商城",style:{marginTop:"5px",marginLeft:"5px"}}),(0,n.jsx)("div",{className:C().iconText,children:"美食商城"})]}),name:"美食商城",router:"/shopping-mall"},{icon:(0,n.jsxs)("div",{children:[(0,n.jsx)(h(),{src:y.Z,width:45,alt:"訂位/外帶",style:{marginTop:"-5px",marginLeft:"-5px"}}),(0,n.jsx)("div",{className:C().iconText,children:"訂位/外帶"})]}),name:"訂位/外帶",router:"/shopping-mall"},{icon:(0,n.jsxs)("div",{children:[(0,n.jsx)(h(),{src:{src:"/next-test/_next/static/media/chocoCookie.92c10537.svg",height:212,width:226,blurWidth:0,blurHeight:0},width:55,alt:"首頁",style:{marginTop:"10px"}}),(0,n.jsx)("div",{className:C().iconText,children:"首頁"})]}),name:"首頁",router:"/"}];function S(){let e=(0,k.useRouter)();return(0,n.jsx)(g.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:(0,n.jsx)(f.Z,{ariaLabel:"Pagenation",sx:{position:"absolute",bottom:50,left:50,"& .MuiFab-primary":{width:100,height:100},"& .MuiFab-root.MuiSpeedDial-fab":{backgroundColor:"var(--main-color)"}},icon:(0,n.jsxs)("div",{children:[(0,n.jsx)(h(),{src:Z.Z,width:60,alt:"順路買買",priority:!0}),(0,n.jsx)("div",{className:C().mainIconText,children:"順路買買"})]}),children:M.map(t=>(0,n.jsx)(v.Z,{icon:t.icon,sx:{height:100,width:100},onClick:()=>{e.push("/")}},t.name))})})}var T={src:"/next-test/_next/static/media/walkbag.fbf719a4.svg",height:159,width:135,blurWidth:0,blurHeight:0},L=i(3950),E=i(4666),I=i(1425),O=i(6580),W=i(8951),H=i(7645),z=i(7157);let B=[{shop:"双豚ラーメン",lat:25.027492494837038,lng:121.46519250548808,id:1},{shop:"烹星",lat:25.05607,lng:121.52514,id:2},{shop:"Okaeriお帰り你回來啦拉麵",lat:25.04392,lng:121.55372,id:3}],R=[{open_sid:1,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大正門",target_store:1,shop:"烹星",tip:"20"},{open_sid:2,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大正門",target_store:2,shop:"烹星",tip:"30"},{open_sid:3,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大後門",target_store:3,shop:"阿英羊肉羹",tip:"20"},{open_sid:4,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大正門",target_store:4,shop:"烹星",tip:"20"},{open_sid:5,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大側門",target_store:5,shop:"麥當勞",tip:"20"},{open_sid:6,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大正門",target_store:6,shop:"烹星",tip:"20"},{open_sid:7,open_member_id:1,open_member_name:"小呆呆",meet_time:"2023-08-16 12:00",meet_place:"台大男一舍",target_store:7,shop:"佐藤咖哩",tip:"25"}],F=()=>{let[e,t]=(0,o.useState)(B),[i,a]=(0,o.useState)(!1),[r,l]=(0,o.useState)(R),[c,m]=(0,o.useState)(!1),[u,_]=(0,o.useState)(0),[g,f]=(0,o.useState)([]),[v,j]=(0,o.useState)(6666666);(0,o.useEffect)(()=>{let e=async()=>{console.log(u)};e()},[u]);let w=()=>{m(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{data:e}),(0,n.jsx)("div",{className:s().inputBox,children:(0,n.jsx)(x.Z,{id:"outlined-basic",variant:"outlined",placeholder:"搜尋美食...",sx:{"&:hover fieldset":{backgroundColor:"rgba(250,179,179,0.2)",borderColor:"#FAB3B3"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"var(--sub-color)"},"&:hover fieldset":{borderColor:"var(--sub-color)"},"&.Mui-focused fieldset":{borderColor:"var(--sub-color)"},fontSize:"var(--h5)",fontFamily:"var(--ff1)"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"var(--sub-color)"},"& label.Mui-focused,label":{color:"var(--main-color)"},"& .MuiInputBase-input.MuiOutlinedInput-input":{padding:"0px 14px"}},inputProps:{style:{height:50,width:200}},onBlur:e=>{""===e.target.value?t(()=>B):(t(()=>B.filter(t=>t.shop.includes(e.target.value))),console.log(e.target.value))}})}),(0,n.jsx)(h(),{src:p.Z,className:s().sausageLeft,priority:!0,alt:"inputbox"}),(0,n.jsx)(h(),{src:b.Z,className:s().sausageRight,priority:!0,alt:"inputbox"}),(0,n.jsx)(S,{}),(0,n.jsx)("div",{className:!1===i?s().buyforme_hint:s().buyforme_hint_active,children:"目前揪團數：6"}),(0,n.jsxs)("div",{className:!1===i?s().buyforme_infobox_hide:s().buyforme_infobox,children:[(0,n.jsx)("div",{className:s().buyforme_tabletitle,children:"誰在揪團"}),0!==r.length?(0,n.jsx)("div",{className:s().buyforme_tablebox,children:(0,n.jsxs)("table",{className:"table "+s().buyforme_table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"開團編號"}),(0,n.jsx)("th",{children:"開團人"}),(0,n.jsx)("th",{children:"開團店家"}),(0,n.jsx)("th",{children:"取餐時間"}),(0,n.jsx)("th",{children:"取餐地點"}),(0,n.jsx)("th",{children:"跑腿費"}),(0,n.jsx)("th",{style:{zIndex:1}})]})}),(0,n.jsx)("tbody",{children:r.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.open_sid}),(0,n.jsx)("td",{children:e.open_member_name}),(0,n.jsx)("td",{children:e.shop}),(0,n.jsx)("td",{children:e.meet_time}),(0,n.jsx)("td",{children:e.meet_place}),(0,n.jsx)("td",{children:e.tip}),(0,n.jsx)("td",{children:(0,n.jsx)(L.Z,{text:"跟團go!",padding:"5px 10px",fs:"var(--h9)",onClick:()=>{m(!0),_(e.target_store)}})})]},e.open_sid))})]})}):(0,n.jsx)("div",{className:s().nogroup,children:"目前沒團可以跟哦~"})]}),(0,n.jsx)(h(),{src:T,className:s().walkbag,alt:"buyforme",priority:!0,onClick:()=>{a(e=>!e)}}),(0,n.jsxs)(E.Z,{open:c,onClose:w,children:[(0,n.jsx)(H.Z,{children:"Subscribe"}),(0,n.jsxs)(O.Z,{children:[(0,n.jsx)(W.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.map(e=>{if(u===e.id)return(0,n.jsx)("div",{children:JSON.stringify(e)})}),(0,n.jsx)(x.Z,{margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,variant:"standard"}),(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsx)(z.Z,{onChange:e=>{console.log("123"),j(e.target.value)},value:v,fullWidth:!0})})]}),(0,n.jsx)(I.Z,{})]})]})};var P=F;F.getLayout=u.Z},6587:function(e){e.exports={btn:"btn_btn__FqmgZ",btn_text:"btn_btn_text__tr1oS"}},4839:function(e){e.exports={map_container:"map_map_container__1Z7ab",sausageLeft:"map_sausageLeft__dUqM_",sausageRight:"map_sausageRight__IKg3D",inputBox:"map_inputBox__eARw9",mapLabel:"map_mapLabel__HokIy",userLabel:"map_userLabel__MwbRJ",walkbag:"map_walkbag__lHXsE",buyforme_hint:"map_buyforme_hint__HH0uq",buyforme_hint_active:"map_buyforme_hint_active__gGoog",buyforme_infobox:"map_buyforme_infobox__MEhQR",show_buyforme:"map_show_buyforme__kS_dh",buyforme_infobox_hide:"map_buyforme_infobox_hide__yzbC4",buyforme_tablebox:"map_buyforme_tablebox__JKIrC",buyforme_tabletitle:"map_buyforme_tabletitle__oc9WP",buyforme_table:"map_buyforme_table__R0Lut",nogroup:"map_nogroup__A7_wk"}},2980:function(e){e.exports={iconText:"speed-dial_iconText__oOkbQ",mainIconText:"speed-dial_mainIconText__4JNhH"}}},function(e){e.O(0,[255,242,691,26,774,888,179],function(){return e(e.s=3404)}),_N_E=e.O()}]);