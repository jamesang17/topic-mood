(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{216:function(e,t,a){e.exports=a.p+"static/media/twitter.f9efc7fe.svg"},270:function(e,t,a){e.exports=a(478)},275:function(e,t,a){},276:function(e,t,a){},281:function(e,t,a){},475:function(e,t,a){},476:function(e,t,a){},477:function(e,t,a){},478:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),c=a.n(l),i=(a(275),a(276),a(221)),o=a(222),u=a(12),s=a(13),m=a(14),d=a(15),p=a(27);var h=function(e){return function(t){Object(d.a)(n,t);var a=Object(m.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){console.log("old props:",e),console.log("new props:",this.props)}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(r.a.Component)},E=a(515),v=a(480),b=a(519),g=a(523),f=a(522),O=a(518),j=a(520),y=a(542),S=a(521),C=a(5),k=Object(E.a)({root:{width:"100%"},container:{maxHeight:440}}),P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:n.state.rowsPerPage+e.target.value}),n.setState({page:0})},n.state={page:0,rowsPerPage:10},n.handleChangePage=n.handleChangePage.bind(Object(p.a)(n)),n.handleChangeRowsPerPage=n.handleChangeRowsPerPage.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=[{id:"run_id",label:"Run Id",minWidth:100},{id:"name",label:"Name",minWidth:100},{id:"status",label:"Status",minWidth:100},{id:"starttime",label:"Start Time",minWidth:100,align:"right",format:function(e){return e.toLocaleString()}},{id:"endtime",label:"End Time",minWidth:100,align:"right",format:function(e){return e.toLocaleString()}}];function t(e,t,a,n,r){return{run_id:e,name:t,status:a,starttime:n,endtime:r}}var a=[t("15","India","In Progress","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("14","China","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("13","Italy","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("12","United States","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("11","Canada","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("10","Australia","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("9","Germany","Failed","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("8","Ireland","Failed","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("7","Mexico","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("6","Japan","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("5","France","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("4","United Kingdom","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("3","Russia","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("2","Nigeria","Success","2020-03-28 12:40:56","2020-03-28 13:20:06"),t("1","Brazil","Success","2020-03-28 12:40:56","2020-03-28 13:20:06")],n=k;return r.a.createElement(v.a,{className:n.root,elevation:3},r.a.createElement("h6",null,"Previous Runs"),r.a.createElement(O.a,{className:n.container},r.a.createElement(b.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,e.map((function(e){return r.a.createElement(f.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(g.a,null,a.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(t){return r.a.createElement(S.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.run_id},e.map((function(e){var a=t[e.id];return r.a.createElement(f.a,{key:e.id,align:e.align},e.format&&"number"===typeof a?e.format(a):a)})))}))))),r.a.createElement(y.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),a}(r.a.Component),w=h(Object(C.a)(k)(P)),N=a(541),x=a(530),T=a(104),I=a.n(T),R=a(531),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){console.log("button was clicked!"),console.log("value: "+this.state.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{variant:"standard",label:"Topic to analyze",className:"Input-field",helperText:"single topics e.g. Twitter, Python",value:this.state.value,onChange:function(t){return e.setState({value:t.currentTarget.value})}})),r.a.createElement(x.a,{item:!0},r.a.createElement(R.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleClick},r.a.createElement(I.a,{fontSize:"default"})))))}}]),a}(r.a.Component),M=a(532),z=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}})),B=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("br",null),r.a.createElement(M.a,{variant:"extended"},"Start Ingestion"))}}]),a}(r.a.Component),D=Object(C.a)(z)(B),A=(a(281),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).wrapper=r.a.createRef(),n.myRef=r.a.createRef(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"Ingestion-module"},r.a.createElement("div",{className:"Ingestion-component"},r.a.createElement(D,null)),r.a.createElement("div",{className:"Ingestion-component"},r.a.createElement(w,{ref:this.wrapper})))}}]),a}(r.a.Component)),G=(a(282),r.a.createContext()),U=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={value:"",topic:"",data:[],latestSen:"",posSent:"",negSent:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){console.log("Button was clicked!"),console.log("value: "+this.state.value),this.setState({data:[{date:"2020-03-31",sentiment:.018},{date:"2020-04-01",sentiment:.8258},{date:"2020-04-02",sentiment:.258},{date:"2020-04-03",sentiment:.0458}]}),this.setState({topic:"nyc"}),this.setState({latestSen:.0458}),this.setState({posSent:"this is great!"}),this.setState({negSent:"this sucks"})}},{key:"render",value:function(){var e=this;return r.a.createElement(G.Provider,{value:{state:this.state,setTopic:function(t){return e.setState({topic:t})},setData:function(t){return e.setState({data:t})},handleSubmit:this.handleSubmit,handleChange:this.handleChange}},this.props.children)}}]),a}(r.a.Component),F=a(529),H=a(525),J=a(533),K=a(534),L=Object(E.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),V=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=L;return r.a.createElement(F.a,{component:"nav",className:e.root,"aria-label":"mailbox folders"},r.a.createElement(H.a,{button:!0},r.a.createElement(J.a,{primary:"NYC"})),r.a.createElement(K.a,null),r.a.createElement(H.a,{button:!0,divider:!0},r.a.createElement(J.a,{primary:"NBA"})),r.a.createElement(H.a,{button:!0},r.a.createElement(J.a,{primary:"Hospital"})),r.a.createElement(K.a,{light:!0}),r.a.createElement(H.a,{button:!0},r.a.createElement(J.a,{primary:"Star Wars"})))}}]),a}(r.a.Component),_=Object(C.a)(L)(V),Y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(G.Consumer,null,(function(t){return r.a.createElement(x.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{variant:"standard",label:"Search Analyzed Topics",helperText:"single topics e.g. Twitter, Python",value:e.context.topic,onChange:e.context.handleChange})),r.a.createElement(x.a,{item:!0},r.a.createElement(R.a,{variant:"contained",size:"large",color:"primary",onClick:e.context.handleSubmit},r.a.createElement(I.a,{fontSize:"default"}))))})))}}]),a}(r.a.Component);Y.contextType=G;var $=Y,q=a(38),Q=(a(475),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Topic: ",e.state.topic),r.a.createElement("div",{className:"Chart-container"},r.a.createElement(q.e,{width:"80%",height:400},r.a.createElement(q.d,{data:e.state.data,margin:{top:5,right:20,left:20,bottom:5}},r.a.createElement(q.a,{strokeDasharray:"3 3"}),r.a.createElement(q.g,{dataKey:"name"}),r.a.createElement(q.h,null),r.a.createElement(q.f,null),r.a.createElement(q.b,null),r.a.createElement(q.c,{type:"monotone",dataKey:"sentiment",stroke:"#8884d8",activeDot:{r:8}})))))})))}}]),a}(r.a.Component));Q.contextType=G;var X=Q,Z=a(213),ee=a.n(Z),te=a(212),ae=a.n(te),ne=a(209),re=a.n(ne),le=a(210),ce=a.n(le),ie=a(211),oe=a.n(ie),ue=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).renderEmoji=n.renderEmoji.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"renderEmoji",value:function(e){return console.log(e),e>=.2&&e<=.7?r.a.createElement("div",null,r.a.createElement("p",null,"Positive"),r.a.createElement(re.a,null)):e<=-.2&&e>=-.7?r.a.createElement("div",null,r.a.createElement("p",null,"Negative"),r.a.createElement(ce.a,null)):e<-.7?r.a.createElement("div",null,r.a.createElement("p",null,"Very Negative"),r.a.createElement(oe.a,null)):e>.7?r.a.createElement("div",null,r.a.createElement("p",null,"Very Positive"),r.a.createElement(ae.a,null)):""===e?r.a.createElement("p",null):r.a.createElement("div",null,r.a.createElement("p",null,"Neutral"),r.a.createElement(ee.a,null))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",null,"Latest Sentiment"),r.a.createElement(G.Consumer,null,(function(t){return r.a.createElement("div",null,e.renderEmoji(t.state.latestSen))})))}}]),a}(r.a.Component);ue.contextType=G;var se=ue,me=a(214),de=a.n(me),pe=a(215),he=a.n(pe),Ee=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Sentences"),r.a.createElement(G.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement(de.a,null),r.a.createElement("p",null,e.state.posSent),r.a.createElement(he.a,null),r.a.createElement("p",null,e.state.negSent))})))}}]),a}(r.a.Component);Ee.contextType=G;var ve=Ee,be=(a(476),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Monitoring-module"},r.a.createElement(U,null,r.a.createElement("div",{className:"Monitoring-component"},r.a.createElement($,null),r.a.createElement("div",null,"PREVIOUS TOPICS",r.a.createElement(_,null))),r.a.createElement(K.a,{variant:"middle"}),r.a.createElement("div",{className:"Monitoring-component"},r.a.createElement(se,null),r.a.createElement(ve,null)),r.a.createElement(K.a,{variant:"middle"}),r.a.createElement("div",{className:"Monitoring-component"},r.a.createElement(X,null))))}}]),a}(r.a.Component)),ge=a(216),fe=a.n(ge),Oe=a(535),je=a(526),ye=a(109),Se=a(524),Ce=a(217),ke=a.n(Ce),Pe=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),we=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(Oe.a,{position:"static"},r.a.createElement(je.a,null,r.a.createElement(Se.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(ke.a,null)),r.a.createElement(ye.a,{variant:"h6",className:this.props.classes.title},"Tweet Analyzer"),r.a.createElement("img",{src:fe.a,className:"App-logo",alt:"logo"}))))}}]),a}(r.a.Component),Ne=Object(C.a)(Pe)(we),xe=a(540),Te=a(536),Ie=a(539);a(477);function Re(e){var t=e.children,a=e.value,n=e.index,l=Object(o.a)(e,["children","value","index"]);return r.a.createElement(ye.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),a===n&&r.a.createElement(Ie.a,{p:3},t))}function We(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Me=Object(E.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ze(){var e=Me(),t=r.a.useState(0),a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(Ne,null),r.a.createElement(Oe.a,{position:"static"},r.a.createElement(xe.a,{value:n,onChange:function(e,t){l(t)},"aria-label":"simple tabs example"},r.a.createElement(Te.a,Object.assign({label:"MONITORING"},We(0))),r.a.createElement(Te.a,Object.assign({label:"INGESTION"},We(1))))),r.a.createElement(Re,{value:n,index:0,className:"Tab-panel"},r.a.createElement(be,null)),r.a.createElement(Re,{value:n,index:1,className:"Tab-panel"},r.a.createElement(A,null)))}var Be=a(220),De=a(218),Ae=a.n(De),Ge=a(219),Ue=a.n(Ge),Fe=Object(Be.a)({palette:{primary:Ae.a,secondary:Ue.a},overrides:{MuiButton:{root:{color:"pink",size:"large"}}}}),He=a(537);var Je=function(){return r.a.createElement(He.a,{theme:Fe},r.a.createElement("div",{className:"App"},r.a.createElement(ze,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[270,1,2]]]);
//# sourceMappingURL=main.7a6fe199.chunk.js.map