(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{244:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),o=a.n(r),i=a(65),s=a(135),l=(a(244),a(14)),d=a(421),j=a(423),b=a(424),h=a(425),u=a(426),p=a(416),x=a(222),g=a(429),O=a(431),m=a(432),f=a(2);var v=function(e){return Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"43",fill:e.fill,children:Object(f.jsx)("path",{d:"M3420.62 1768.86c-221.3-372.11-625.64-599.59-1087.86-599.59-699.74 0-1245.34 538.43-1245.34 1242.72 0 704.29 545.6 1296.9 1245.34 1296.9 462.22 0 866.56-270.82 1087.86-642.93h634.24c-262.11 694.44-940.2 1188.03-1722.1 1188.03-1010.74 0-1851.773-824.69-1851.773-1842s841.033-1842 1851.773-1842c781.9 0 1459.99 504.428 1722.1 1198.868h-634.24v.002zM4369 2195.29l-638.98 455.08h-801.66c-93.37 240.88-327.09 411.74-600.84 411.74-355.89 0-644.39-288.64-644.39-644.7 0-356.06 288.5-644.7 644.39-644.7 277.87 0 514.64 175.96 605.11 422.58H4369z",transform:"matrix(.01157 0 0 .01157 0 .18) translate(-481 -570)"})})},C=a(6),y=a(68),w=a(220),k=a(446),P=a(221),S=a(210),N=a.n(S),I=a(211),R=a.n(I),L=a(212),B=a.n(L),M=a(137),_=a.n(M),z=["cancelOnEscape","className","classes","closeIcon","disabled","onCancelSearch","onRequestSearch","searchIcon","style"],D=c.a.forwardRef((function(e,t){var a=e.cancelOnEscape,n=e.className,r=e.classes,o=e.closeIcon,i=e.disabled,s=e.onCancelSearch,d=e.onRequestSearch,j=e.searchIcon,b=e.style,h=Object(w.a)(e,z),u=c.a.useRef(),x=c.a.useState(h.value),g=Object(l.a)(x,2),O=g[0],m=g[1];c.a.useEffect((function(){m(h.value)}),[h.value]);var v=c.a.useCallback((function(e){h.onFocus&&h.onFocus(e)}),[h.onFocus]),S=c.a.useCallback((function(e){m((function(e){return e.trim()})),h.onBlur&&h.onBlur(e)}),[h.onBlur]),N=c.a.useCallback((function(e){m(e.target.value),h.onChange&&h.onChange(e.target.value)}),[h.onChange]),I=c.a.useCallback((function(){m(""),s&&s()}),[s]),R=c.a.useCallback((function(){d&&d(O)}),[d,O]),L=c.a.useCallback((function(e){13===e.charCode||"Enter"===e.key?R():!a||27!==e.charCode&&"Escape"!==e.key||I(),h.onKeyUp&&h.onKeyUp(e)}),[R,a,I,h.onKeyUp]);return c.a.useImperativeHandle(t,(function(){return{focus:function(){u.current.focus()},blur:function(){u.current.blur()}}})),Object(f.jsxs)(P.a,{className:_()(r.root,n),style:b,children:[Object(f.jsx)("div",{className:r.searchContainer,children:Object(f.jsx)(k.a,Object(y.a)(Object(y.a)({},h),{},{inputRef:u,onBlur:S,value:O,onChange:N,onKeyUp:L,onFocus:v,fullWidth:!0,className:r.input,disableUnderline:!0,disabled:i}))}),Object(f.jsx)(p.a,{onClick:R,className:_()(r.iconButton,r.searchIconButton,Object(C.a)({},r.iconButtonHidden,""!==O)),disabled:i,children:c.a.cloneElement(j,{classes:{root:r.icon}})}),Object(f.jsx)(p.a,{onClick:I,className:_()(r.iconButton,Object(C.a)({},r.iconButtonHidden,""===O)),disabled:i,children:c.a.cloneElement(o,{classes:{root:r.icon}})})]})}));D.defaultProps={className:"",closeIcon:Object(f.jsx)(N.a,{}),disabled:!1,placeholder:"Search",searchIcon:Object(f.jsx)(R.a,{}),style:null,value:""};var E=B()((function(e){return{root:{height:e.spacing(6),display:"flex",justifyContent:"space-between"},iconButton:{color:e.palette.action.active,transform:"scale(1, 1)",transition:e.transitions.create(["transform","color"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeInOut})},iconButtonHidden:{transform:"scale(0, 0)","& > $icon":{opacity:0}},searchIconButton:{marginRight:e.spacing(-6)},icon:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeInOut})},input:{width:"100%"},searchContainer:{margin:"auto 16px",width:"calc(100% - ".concat(e.spacing(10),"px)")}}}))(D),F=a(161),H=a(448),A=a(216),T=a.n(A),V=a(215),U=a.n(V),W=a(422),$=a(430),K=a(218),J=a.n(K),q=a(97),G=a.n(q),Q=a(7),X=a(374),Y=a(32),Z=a(420),ee=a(3),te=Object(Q.a)("span")("\n  display: inline-block;\n  position: relative;\n  width: 62px;\n  height: 34px;\n  padding: 7px;\n"),ae=Object(Q.a)("input")("\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 1;\n  margin: 0;\n  cursor: pointer;\n"),ne=Object(Q.a)("span")((function(e){var t=e.theme;return"\n  position: absolute;\n  display: block;\n  background-color: ".concat("dark"===t.palette.mode?"#003892":"#001e3c",';\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  top: 1px;\n  left: 7px;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:before {\n    display: block;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="').concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\') center center no-repeat;\n  }\n\n  &.focusVisible {\n    background-color: #79B;\n  }\n\n  &.checked {\n    transform: translateX(16px);\n    \n    &:before {\n      background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="').concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\');\n    }\n  }\n')})),ce=Object(Q.a)("span")((function(e){var t=e.theme;return"\n  background-color: ".concat("dark"===t.palette.mode?"#8796A5":"#aab4be",";\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  display: block;\n")})),re=Object(Q.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(X.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.a)(t.palette.common.white,.25)},width:150}})),oe=Object(Q.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ie=Object(Q.a)(Y.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"}}}));Object(Q.a)("div")((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function se(e){var t=Object(Z.a)(e),a=t.getInputProps,n={checked:t.checked,disabled:t.disabled,focusVisible:t.focusVisible};return Object(f.jsxs)(te,{className:Object(ee.a)(n),children:[Object(f.jsx)(ce,{children:Object(f.jsx)(ne,{className:Object(ee.a)(n)})}),Object(f.jsx)(ae,Object(y.a)(Object(y.a)({},a()),{},{"aria-label":"Demo switch"}))]})}var le=Object(d.a)((function(e){return{root:{flexGrow:1,alignItems:"center",display:"flex"},logo:{fill:e.palette.primary.main},tools:{display:"flex",justifyContent:"space-between",alignItems:"center"},text:{marginLeft:10,color:"#fff","&:hover":{color:"#999"}},searchbar:{marginRight:30},divider:{background:e.palette.action.selected}}})),de=Object(n.createContext)(),je=function(e){var t=Object(n.useContext)(de),a=le(),c=Object(n.useState)(!1),r=Object(l.a)(c,2),o=r[0],s=r[1],d=Object(W.a)(),C=Object(n.useContext)(qe),y=C.state.darkMode,w=function(){y?C.dispatch({type:"LIGHTMODE"}):C.dispatch({type:"DARKMODE"})},k=function(){s(!o)};return Object(f.jsxs)(j.a,{position:"static",children:[!F.isMobile&&Object(f.jsx)(b.a,{fixed:!0,children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)("div",{className:a.root,children:[Object(f.jsx)(i.b,{to:"/Crypto/",onClick:function(){return e.changePage(0)},children:Object(f.jsx)(v,{})}),Object(f.jsx)(i.b,{to:"/Crypto/favorites",style:{textDecoration:"none",marginLeft:20},children:Object(f.jsx)(u.a,{className:a.text,variant:"h6",children:"FAVORITES"})})]}),Object(f.jsx)(E,{className:a.searchbar,onChange:function(e){return t(e)},onCancelSearch:function(e){return t(e||"")}}),Object(f.jsx)(se,{onChange:w})]})}),F.isMobile&&Object(f.jsxs)(h.a,{className:a.tools,children:[Object(f.jsx)(p.a,{color:"inherit",onClick:k,edge:"start",className:a.menuButton&&a.hide,children:Object(f.jsx)(U.a,{})}),Object(f.jsxs)(re,{children:[Object(f.jsx)(oe,{children:Object(f.jsx)(T.a,{})}),Object(f.jsx)(ie,{onChange:function(e){return t(e.target.value)},placeholder:"Search...",inputProps:{"aria-label":"search"}})]}),Object(f.jsxs)(H.a,{onBackdropClick:k,sx:{width:"70vw",flexShrink:0,"& .MuiDrawer-paper":{width:"70vw",boxSizing:"border-box"}},anchor:"left",open:o,children:[Object(f.jsx)(i.b,{to:"/Crypto/",style:{textDecoration:"none"},children:Object(f.jsxs)("div",{style:{paddingTop:5,display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(f.jsx)(x.a,{component:v,fill:d.palette.text.primary}),Object(f.jsx)(u.a,{color:"textSecondary",variant:"h5",style:{textDecoration:"none"},children:"ryptoTracker"})]})}),Object(f.jsxs)(g.a,{style:{display:"flex",flexFlow:"column nowrap",flex:1},children:[Object(f.jsx)($.a,{className:a.divider,variant:"middle"}),Object(f.jsx)(i.b,{to:"/Crypto/favorites",style:{textDecoration:"none"},children:Object(f.jsxs)(O.a,{button:!0,onClick:k,children:[Object(f.jsx)(m.a,{children:Object(f.jsx)(G.a,{})}),Object(f.jsx)(u.a,{color:"textSecondary",variant:"h5",children:"Favorites"})]})}),Object(f.jsxs)(O.a,{button:!0,style:{marginTop:"auto"},children:[Object(f.jsx)(m.a,{children:Object(f.jsx)(J.a,{})}),Object(f.jsx)(u.a,{color:"textSecondary",variant:"h5",onClick:w,children:"".concat(y?"Light Mode":"Dark Mode")})]})]})]})]})]})},be=a(57),he=a.n(be),ue=a(27),pe=a(80),xe=a(433),ge=a(434),Oe=a(435),me=a(436),fe=a(437),ve=a(445),Ce=a(438),ye=a(439),we=a(443),ke=a(166),Pe=a.n(ke),Se=Object(d.a)((function(e){var t;return{tableHeaderCell:{fontWeight:"bold",fontSize:20},tableContainer:(t={margin:"0 24px"},Object(C.a)(t,e.breakpoints.down("md"),{margin:0}),Object(C.a)(t,"marginTop",30),t),name:{color:"rgb(23, 25, 36)"},symbol:{marginLeft:10,fontWeight:"bold",color:"#ccc"},image:{marginRight:10,width:30,height:"auto"},grid:{flexWrap:"nowrap",alignItems:"center"},pagination:{display:"flex",justifyContent:"center"},rowStyle:{cursor:"pointer",textDecoration:"none","&:hover":{backgroundColor:e.palette.action.hover}},tablePagination:{color:e.palette.text.primary},tablePaginationDisplayedRows:{color:e.palette.text.primary},tablePaginationSelectIcon:{color:e.palette.text.primary},tablePaginationSelect:{color:e.palette.text.primary},tablePaginationActions:{color:e.palette.text.primary}}})),Ne=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},Ie=a(20),Re=function(e){var t=JSON.parse(localStorage.getItem("Favorites")),a=Object(n.useContext)(He),c=Object(n.useState)(t||[]),r=Object(l.a)(c,2),o=r[0],i=r[1];e.favorites&&o.length<e.rowsPerPage&&e.pageChanges(0);var s=e.coins.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())|t.symbol.toLowerCase().includes(e.search.toLowerCase())})),d=Object(Ie.f)(),j=function(){var e=Object(pe.a)(he.a.mark((function e(t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.find((function(e){return e.id===t.id}))?i(o.filter((function(e){return e.id!==t.id}))):i([].concat(Object(ue.a)(o),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.setItem("Favorites",JSON.stringify(o))}),[o]),Object(n.useEffect)((function(){a(o)}),[]);var h=Se();return Object(f.jsx)(xe.a,{className:h.tableContainer,children:Object(f.jsxs)(b.a,{fixed:!0,children:[Object(f.jsxs)(ge.a,{children:[Object(f.jsx)(Oe.a,{children:Object(f.jsxs)(me.a,{children:[Object(f.jsx)(fe.a,{padding:"checkbox",children:Object(f.jsx)(ve.a,{className:"selectCheckbox",onChange:function(e){e.target.checked?i(s):i([])},icon:Object(f.jsx)(Pe.a,{}),checkedIcon:Object(f.jsx)(G.a,{})})}),Object(f.jsx)(fe.a,{width:70,className:h.tableHeaderCell,children:"#"}),Object(f.jsx)(fe.a,{width:200,className:h.tableHeaderCell,children:"Name"}),Object(f.jsx)(fe.a,{width:200,className:h.tableHeaderCell,children:"Price"}),Object(f.jsx)(fe.a,{width:200,className:h.tableHeaderCell,children:"Market Cap"}),Object(f.jsx)(fe.a,{width:200,className:h.tableHeaderCell,children:"Volume (24h)"})]})}),Object(f.jsx)(Ce.a,{children:s.map((function(t,a){return Object(f.jsxs)(me.a,{onClick:function(){return function(e){d.push("/Crypto/coins/".concat(e.id))}(t)},className:h.rowStyle,children:[Object(f.jsx)(fe.a,{padding:"checkbox",children:Object(f.jsx)(ve.a,{className:"selectCheckbox",value:t,icon:Object(f.jsx)(Pe.a,{}),checkedIcon:Object(f.jsx)(G.a,{}),checked:!!o.find((function(e){return e.id===t.id})),onChange:function(){return j(t)},onClick:function(e){return e.stopPropagation()}})}),Object(f.jsx)(fe.a,{className:h.text,children:Object(f.jsx)(u.a,{color:"textSecondary",variant:"body2",children:a+1+e.rowsPerPage*e.page})}),Object(f.jsx)(fe.a,{children:Object(f.jsxs)(ye.a,{container:!0,className:h.grid,children:[Object(f.jsx)("img",{className:h.image,src:t.image,alt:"Coin Logo"}),Object(f.jsx)(u.a,{color:"textPrimary",children:t.name}),Object(f.jsx)(u.a,{className:h.symbol,children:t.symbol.toUpperCase()})]})}),Object(f.jsx)(fe.a,{children:Object(f.jsx)(u.a,{children:"$".concat(Ne(t.current_price.toFixed(2)))})}),Object(f.jsx)(fe.a,{children:Object(f.jsx)(u.a,{children:"$".concat(Ne(t.market_cap))})}),Object(f.jsx)(fe.a,{children:Object(f.jsx)(u.a,{children:"$".concat(Ne(t.total_volume))})})]},a)}))})]}),Object(f.jsx)(we.a,{className:h.pagination,classes:{selectLabel:h.tablePagination,displayedRows:h.tablePaginationDisplayedRows,selectIcon:h.tablePaginationSelectIcon,select:h.tablePaginationSelect,actions:h.tablePaginationActions},rowsPerPageOptions:[10,15,20],component:"div",count:100,rowsPerPage:+e.rowsPerPage,page:e.page,onPageChange:function(t,a){e.pageChanges(a),window.scrollTo({top:0,behavior:"smooth"})},onRowsPerPageChange:function(t){e.onChangeRowsPerPage(+t.target.value),e.pageChanges(0)}})]})})},Le=a(450),Be=a(440),Me=a(441),_e=a(76),ze=function(e){var t,a,c=Object(n.useState)([]),r=Object(l.a)(c,2),o=r[0],i=r[1],s=Object(n.useState)(!1),d=Object(l.a)(s,2),j=d[0],b=d[1],h=Object(n.useState)([]),u=Object(l.a)(h,2),p=u[0],x=u[1],g=function(e){for(var t=[],a=0;a<70;a++){var n=new Date(e.market_caps[a][0]),c=n.getFullYear(),r=("0"+(n.getMonth()+1)).slice(-2),o=("0"+n.getDate()).slice(-2);t.push(c+"-"+r+"-"+o)}b(!0),x(t)},O=Object(n.useCallback)(Object(pe.a)(he.a.mark((function t(){var a,n;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(e.coin,"/market_chart?vs_currency=usd&days=70&interval=daily"));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,i(n),g(n);case 8:case"end":return t.stop()}}),t)}))),[e]);Object(n.useEffect)((function(){O()}),[O]),_e.Chart.defaults.LineWithLine=_e.Chart.defaults.line,_e.Chart.controllers.LineWithLine=_e.Chart.controllers.line.extend({draw:function(e){if(_e.Chart.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){var t=this.chart.tooltip._active[0],a=this.chart.ctx,n=t.tooltipPosition().x,c=this.chart.legend.bottom,r=this.chart.chartArea.bottom;a.save(),a.beginPath(),a.moveTo(n,c),a.lineTo(n,r),a.lineWidth=2,a.strokeStyle="#07C",a.stroke(),a.restore()}}});var m={labels:p,datasets:[{label:"Total Volumes",data:null===(t=o.total_volumes)||void 0===t?void 0:t.map((function(e,t){return o.total_volumes[t][1]})),fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1,hidden:!0},{label:"Price",data:null===(a=o.prices)||void 0===a?void 0:a.map((function(e,t){return o.prices[t][1]})),borderColor:"rgb(75, 192, 192)",tension:.1,fill:!1}]},v={legend:{display:!1},maintainAspectRatio:!1,tooltips:{displayColors:!1,mode:"index",intersect:!1,callbacks:{label:function(e,t){return m.datasets.map((function(t){return t.label+": $"+Ne(t.data[e.index].toFixed(2))}))}}}};return Object(f.jsx)("div",{children:j&&Object(f.jsx)("div",{style:{position:"relative",height:300},children:Object(f.jsx)(_e.Line,{data:m,options:v})})})},De=Object(d.a)((function(e){return{root:Object(C.a)({margin:"30px 0px"},e.breakpoints.up("md"),{margin:30}),name:{fontFamily:"Roboto",fontWeight:600,marginLeft:20},top:{display:"flex",alignItems:"center",margin:"15px 0"},cardContent:Object(C.a)({width:"calc(100vw - 10vw)"},e.breakpoints.up("md"),{width:"20vw"})}})),Ee=function(){var e=Object(Ie.g)(),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!0),i=Object(l.a)(o,2),s=i[0],d=i[1],j=Object(n.useCallback)(Object(pe.a)(he.a.mark((function t(){var a,n;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,fetch("https://api.coingecko.com/api/v3/coins/".concat(e.coinId));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,r((function(){return d(!1),n}));case 8:case"end":return t.stop()}}),t)}))),[e.coinId]),h=De();return Object(n.useEffect)((function(){j()}),[j]),Object(f.jsx)("div",{className:h.root,children:Object(f.jsx)(b.a,{fixed:!0,children:!s&&Object(f.jsxs)("div",{children:[Object(f.jsxs)(Le.a,{component:"span",sx:{fontSize:12,color:"#fff",p:1,backgroundColor:"grey",borderRadius:15},children:["Rank #",c.market_cap_rank]}),Object(f.jsxs)("div",{className:h.top,children:[Object(f.jsx)("img",{src:c.image.small,alt:"Coin Logo"}),Object(f.jsx)(u.a,{variant:"h4",className:h.name,children:c.name})]}),Object(f.jsx)("div",{style:{marginBottom:20},children:Object(f.jsxs)(ye.a,{container:!0,spacing:4,children:[Object(f.jsx)(ye.a,{item:!0,md:"auto",xs:"auto",sm:"auto",children:Object(f.jsx)(Be.a,{className:h.card,children:Object(f.jsxs)(Me.a,{className:h.cardContent,children:[Object(f.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h5",children:"Current Price"}),Object(f.jsxs)(u.a,{gutterBottom:!0,variant:"h6",component:"h5",children:["$",Ne(c.market_data.current_price.usd)]})]})})}),Object(f.jsx)(ye.a,{item:!0,md:"auto",xs:"auto",sm:"auto",children:Object(f.jsx)(Be.a,{className:h.card,children:Object(f.jsxs)(Me.a,{className:h.cardContent,children:[Object(f.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h5",children:"Market Cap"}),Object(f.jsxs)(u.a,{gutterBottom:!0,variant:"h6",component:"h5",children:["$",Ne(c.market_data.market_cap.usd)]})]})})}),Object(f.jsx)(ye.a,{item:!0,md:"auto",xs:"auto",sm:"auto",children:Object(f.jsx)(Be.a,{className:h.card,children:Object(f.jsxs)(Me.a,{className:h.cardContent,children:[Object(f.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Volume (24h)"}),Object(f.jsxs)(u.a,{gutterBottom:!0,variant:"h6",component:"h5",children:["$",Ne(c.market_data.total_volume.usd)]})]})})})]})}),Object(f.jsx)(ze,{coin:e.coinId})]})})})},Fe=JSON.parse(localStorage.getItem("Favorites")),He=Object(n.createContext)(),Ae=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(f.jsx)(Ie.c,{children:Object(f.jsxs)(He.Provider,{value:r,children:[Object(f.jsx)(Ie.a,{path:"/Crypto/favorites",children:Object(f.jsx)(Re,{coins:c||Fe,search:e.search,pageChanges:e.changePage,favorites:!0,page:e.page,onChangeRowsPerPage:e.onChangeRowsPerPage,rowsPerPage:e.rowsPerPage})}),Object(f.jsx)(Ie.a,{path:"/Crypto/",exact:!0,children:Object(f.jsx)(Re,{coins:e.coins,search:e.search,pageChanges:e.changePage,favorites:!1,page:e.page,onChangeRowsPerPage:e.onChangeRowsPerPage,rowsPerPage:e.rowsPerPage})}),Object(f.jsx)(Ie.a,{path:"/Crypto/coins/:coinId",children:Object(f.jsx)(Ee,{})})]})})},Te=a(418),Ve=a(219),Ue=a(442),We=a(38),$e=Object(s.b)({baseQuery:Object(We.d)({baseUrl:"https://api.coingecko.com/api/v3/coins/markets"}),endpoints:function(e){return{listPosts:e.query({query:function(e){var t=e.page,a=e.limit;return"?vs_currency=usd&order=market_cap_desc&per_page=".concat(a,"&page=").concat(t,"&sparkline=false")}})}}}),Ke=$e.useListPostsQuery,Je=a(449),qe=Object(n.createContext)(),Ge={darkMode:!1},Qe=function(e,t){switch(t.type){case"LIGHTMODE":return{darkMode:!1};case"DARKMODE":return{darkMode:!0};default:return e}};var Xe=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(20),o=Object(l.a)(r,2),i=o[0],s=o[1],d=Ke({page:a+1,limit:i}),j=d.data,b=d.isLoading,h=Ke({page:a+1,limit:100}).data,u=Object(n.useReducer)(Qe,Ge),p=Object(l.a)(u,2),x=p[0],g=p[1],O=Object(n.useState)(""),m=Object(l.a)(O,2),v=m[0],C=m[1],y=Object(Ve.a)({palette:{type:x.darkMode?"dark":"light"}});return Object(f.jsxs)(qe.Provider,{value:{state:x,dispatch:g},children:[!b&&Object(f.jsxs)(Te.a,{theme:y,children:[Object(f.jsx)(Ue.a,{}),Object(f.jsx)(de.Provider,{value:C,children:Object(f.jsx)(je,{search:v,changePage:c})}),Object(f.jsx)(Ae,{onChangeRowsPerPage:s,rowsPerPage:i,coins:""===v?j:h,search:v,changePage:c,page:a})]}),b&&Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"30px"},children:[Object(f.jsx)(Je.a,{disableShrink:!0}),Object(f.jsx)("p",{style:{paddingLeft:20},children:"Loading..."})]})]})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(s.a,{api:$e,children:Object(f.jsx)(i.a,{children:Object(f.jsx)(Xe,{})})})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.8840f6be.chunk.js.map