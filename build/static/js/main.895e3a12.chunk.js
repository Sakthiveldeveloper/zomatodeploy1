(this.webpackJsonpreactapp1=this.webpackJsonpreactapp1||[]).push([[0],{32:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(33),c=a.n(n),i=a(14),r=a(2),l=a(4),d=a(5),o=a(7),j=a(6),h=a(12),u=a.n(h),b=(a(60),a(61),a(0)),m=function(){return Object(b.jsx)("header",{id:"header",children:Object(b.jsx)("div",{id:"logo_main",children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{id:"headingListing",children:"E!"})})})})},O=function(e){return Object(b.jsx)("div",{id:"content",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)("img",{className:"Image",src:e.restaurant_thumb})}),Object(b.jsx)("div",{className:"col-md-7",children:Object(b.jsxs)("div",{className:"hotel_name",children:[Object(b.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name}),Object(b.jsx)("div",{className:"city_name",children:e.address}),Object(b.jsx)("div",{className:"city_name rating",children:e.rating_text}),Object(b.jsxs)("div",{className:"city_name cost",children:["Rs.",e.cost]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"label label-primary",children:e.mealTypes[0].mealtype_name})," \xa0",Object(b.jsx)("span",{className:"label label-success",children:e.mealTypes[1].mealtype_name})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"label label-warning",children:e.cuisines[0].cuisine_name})," \xa0",Object(b.jsx)("span",{className:"label label-info",children:e.cuisines[1].cuisine_name})]})]})})]})},e._id)})):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"No Data For This Filter"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"https://i.ibb.co/2sPXhkJ/loading2.gif"}),Object(b.jsx)("h3",{children:"loading..."})]})}(e)})},p=(a(32),"https://zomatojulapi.herokuapp.com/filter"),x=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).filterCuisine=function(t){var a,s=sessionStorage.getItem("mealId"),n=t.target.value;a=""==n?"".concat(p,"/").concat(s):"".concat(p,"/").concat(s,"?cuisine=").concat(n),u.a.get(a).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cuisineFilter",children:[Object(b.jsx)("h3",{children:"cuisine Filter"}),Object(b.jsxs)("div",{onChange:this.filterCuisine,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"FastFood"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),a}(s.Component),v=x,f="https://zomatojulapi.herokuapp.com/filter",g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).filterCost=function(t){var a,s=sessionStorage.getItem("mealId"),n=t.target.value.split("-"),c=n[0],i=n[1];a=""==t.target.value?"".concat(f,"/").concat(s):"".concat(f,"/").concat(s,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(a).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cuisineFilter",children:[Object(b.jsx)("h3",{children:"Cost Filter"}),Object(b.jsxs)("div",{onChange:this.filterCost,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"200-300"}),"200-300"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),"301-600"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),"601-1000"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),"1000-1500"]})]})]})}}]),a}(s.Component),y=g,N=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this)).setDataAsPerFilter=function(e){s.setState({restaurantList:e})},s.state={restaurantList:""},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{id:"mainListing",children:[Object(b.jsxs)("div",{id:"filter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Filter"})}),Object(b.jsx)(v,{restPerCuisine:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)(y,{restPerCost:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(O,{listData:this.state.restaurantList})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://zomatojulapi.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),a}(s.Component),C=(a(68),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(b.jsx)("option",{value:e.state_id,children:e.state})}))},s.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(b.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]})}))},s.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("https://zomatojulapi.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){s.setState({restaurant:e})}))},s.handleRest=function(e){s.props.history.push("/details/".concat(e.target.value))},s.state={location:"",restaurant:""},s}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("div",{id:"search",children:[Object(b.jsxs)("div",{id:"login",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://facebook.com/",children:"Login"}),"\xa0",Object(b.jsx)("a",{href:"https://youtube.com/",children:"Create an Account"})]}),Object(b.jsx)("div",{id:"logo",children:Object(b.jsx)("span",{children:"e!"})}),Object(b.jsxs)("div",{id:"heading",children:["Find The Best Rest\xe5ur\xe2nts, Caf\xe9s and b\xe4rs ",Object(b.jsx)("span",{id:"usercity"})]}),Object(b.jsxs)("div",{id:"dropdown",children:[Object(b.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(b.jsx)("option",{children:"---SELECT LOCATION---"}),this.renderCity(this.state.location)]}),Object(b.jsx)("select",{id:"restaurants",onChange:this.handleRest,children:this.renderRestaurants(this.state.restaurant)})]})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatojulapi.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),a}(s.Component)),k=Object(r.e)(C),I=(a(69),function(e){return Object(b.jsxs)("div",{id:"quicksearch",children:[Object(b.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(b.jsx)("span",{id:"QuickSubHeading",children:"Discover rest\xe5ur\xe2nts by type of meal"}),Object(b.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(b.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(b.jsxs)("div",{class:"tileContainer",children:[Object(b.jsx)("div",{class:"tileComponent1",children:Object(b.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(b.jsxs)("div",{class:"tileComponent2",children:[Object(b.jsx)("div",{class:"componentHeading",children:e.mealtype}),Object(b.jsx)("div",{class:"componentSubHeading",children:e.content})]})]},e.mealtype_id)})}))}(e)})]})}),_=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={QuickData:""},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(I,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatojulapi.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),a}(s.Component),S=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(_,{})]})},w=a(22),D=a.n(w),P=a(36),F=(a(71),a(15)),T=(a(72),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).orderId=[],e.placeOrder=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var a=t.menudata;if(a)return a.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsx)("b",{children:t.menu_id}),"\xa0",Object(b.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80}}),"\xa0\xa0 ",t.menu_name," - ",t.menu_price]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.placeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-plus"})}),"\xa0",Object(b.jsx)("button",{className:"btn btn-warning",onClick:function(){e.removeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-minus"})})]}),Object(b.jsx)("br",{})]},t.menu_id)}))},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(b.jsxs)("b",{children:[" ",e," \xa0\xa0"]},t)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-12 bg-info",children:[Object(b.jsx)("h1",{children:"Item Added"}),"Item Number ",this.renderCart(this.orderId)," added"]}),Object(b.jsx)("div",{className:"col-md-12 bg-info",children:this.renderMenu(this.props)})]})}}]),a}(s.Component)),A=Object(r.e)(T),L=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addToCart=function(t){e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeorder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"panel panel-warning",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsx)("h3",{children:this.state.details.restaurant_name})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("img",{src:t.restaurant_thumb,className:"sliderImage"}),Object(b.jsx)("button",{className:"btn btn-danger galButton","data-toggle":"modal","data-target":"#myModal",children:"Click to see Image Gallery"}),Object(b.jsx)("div",{id:"myModal",class:"modal fade",role:"dialog",children:Object(b.jsx)("div",{class:"modal-dialog",children:Object(b.jsxs)("div",{class:"modal-content",children:[Object(b.jsxs)("div",{class:"modal-header",children:[Object(b.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"}),Object(b.jsx)("h4",{class:"modal-title",children:"Modal Header"})]}),Object(b.jsx)("div",{class:"modal-body",children:Object(b.jsxs)("div",{id:"myCarousel",class:"carousel slide","data-ride":"carousel",children:[Object(b.jsxs)("ol",{class:"carousel-indicators",children:[Object(b.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"0",class:"active"}),Object(b.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"1"}),Object(b.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"2"})]}),Object(b.jsxs)("div",{class:"carousel-inner",children:[Object(b.jsx)("div",{class:"item active",children:Object(b.jsx)("img",{src:"https://i.ibb.co/SXgFr5N/lunch.jpg",alt:"Briyani"})}),Object(b.jsx)("div",{class:"item",children:Object(b.jsx)("img",{src:"https://i.ibb.co/FJkxJGw/breakfast.jpg",alt:"Dinner"})}),Object(b.jsx)("div",{class:"item",children:Object(b.jsx)("img",{src:"https://i.ibb.co/qDXrnvJ/Homemade-traditional-snacks-parippu-vada-vadai-masala-tea-chai-Kerala.jpg",alt:"Chai"})})]}),Object(b.jsxs)("a",{class:"left carousel-control",href:"#myCarousel","data-slide":"prev",children:[Object(b.jsx)("span",{class:"glyphicon glyphicon-chevron-left"}),Object(b.jsx)("span",{class:"sr-only",children:"Previous"})]}),Object(b.jsxs)("a",{class:"right carousel-control",href:"#myCarousel","data-slide":"next",children:[Object(b.jsx)("span",{class:"glyphicon glyphicon-chevron-right"}),Object(b.jsx)("span",{class:"sr-only",children:"Next"})]})]})}),Object(b.jsx)("div",{class:"modal-footer",children:Object(b.jsx)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal",children:"Close"})})]})})}),Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:t.restaurant_name}),Object(b.jsx)("h3",{children:t.average_rating}),Object(b.jsx)("h3",{children:t.rating_text}),Object(b.jsxs)(F.d,{children:[Object(b.jsxs)(F.b,{children:[Object(b.jsx)(F.a,{children:"Details"}),Object(b.jsx)(F.a,{children:"Contact"}),Object(b.jsx)(F.a,{children:"Menu"})]}),Object(b.jsx)(F.c,{children:Object(b.jsxs)("p",{children:[t.restaurant_name," This event handler is called every time a tab is about to change. It will be called with the index that it will be changed to, the lastIndex which was selected before and the underlying event which is usually either a keydown or click event. When index and lastIndex are equal it means the user clicked on the currently active tab."]})}),Object(b.jsx)(F.c,{children:Object(b.jsx)("h4",{children:t.address})}),Object(b.jsx)(F.c,{children:Object(b.jsx)(A,{menudata:this.state.menuList,restId:this.props.match.params.restId,finalOrder:function(t){e.addToCart(t)}})})]}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.proceed,children:" proceed"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(P.a)(D.a.mark((function e(){var t,a,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://zomatoajulypi.herokuapp.com/details","/").concat(t));case 3:return a=e.sent,e.next=6,u.a.get("".concat("https://zomatojulapi.herokuapp.com/menu","/").concat(t));case 6:s=e.sent,console.log(a.data),console.log(s.data),this.setState({details:a.data[0],menuList:s.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(s.Component),M=L,z=a(37),R=(a(73),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(z.a)({},e.target.name,e.target.value))},s.handleSubmit=function(){fetch("https://zomatojulapi.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then(s.props.history.push("/vieworder"))},s.renderItems=function(e){return e?e.map((function(e){return Object(b.jsxs)("div",{className:"items",children:[Object(b.jsx)("img",{src:e.menu_image,alt:e.menu_name}),Object(b.jsx)("h3",{children:e.menu_name}),Object(b.jsxs)("h4",{children:["Rs ",e.menu_price]})]},e.menu_id)})):Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://i.ibb.co/2sPXhkJ/loading2.gif"})})},s.state={details:"",tPrice:"",hotelname:s.props.match.params.restName,name:"",phone:"",email:"",address:"",status:"Pending"},s}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.state),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"panel panel-info",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsxs)("h3",{children:["Your order from ",this.props.match.params.restName," is below:"]})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"email:"}),Object(b.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"phone:"}),Object(b.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"address:"}),Object(b.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]})}),this.renderItems(this.state.details),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("h3",{children:["Total Cost is Rs. ",this.state.tPrice]})})}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"check out"})]})]})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),a=[];t.split(",").map((function(e){return a.push(parseInt(e)),"ok"})),fetch("https://zomatojulapi.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){var a=0;t.map((function(e){return a+=parseInt(e.menu_price),"ok"})),e.setState({details:t,tPrice:a})}))}}]),a}(s.Component)),J=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Order"})}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Rest Name"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Adress"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Status"})]})}),Object(b.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.hotelname}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.phone}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.address}),Object(b.jsxs)("td",{children:["Rs.",e.tPrice]}),Object(b.jsx)("td",{children:e.status})]})}))}(e)})]})]})},E=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={order:""},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{}),Object(b.jsx)(J,{orderData:this.state.orders})]})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://zomatojulapi.herokuapp.com/viewOrder").then((function(t){e.setState({orders:t.data})}))}}]),a}(s.Component),q=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(b.jsx)(r.a,{path:"/list/:mealId",component:N}),Object(b.jsx)(r.a,{path:"/details/:restId",component:M}),Object(b.jsx)(r.a,{path:"/placeorder/:restName",component:R}),Object(b.jsx)(r.a,{path:"/vieworder",component:E})]})};c.a.render(Object(b.jsx)(q,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.895e3a12.chunk.js.map