(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=n(5),s=n(1),i=n(2),u=n(4),d=n(3),m=(n(15),n(16),n(8)),p=n(9),f=n.n(p),h=function(e){var t=e.filterTodos,n=e.checkedHandler,a=e.selecUser;return o.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:f()("TodoList__item",{"TodoList__item--checked":!0===e.completed," TodoList__item--unchecked":!1===e.completed})},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"completed",onChange:function(){return n(e.id)},checked:e.completed,readOnly:!0}),o.a.createElement("p",null,e.title)),o.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){a(e.userId)}},"User #".concat(e.userId)))})))},v=function(e){var t=e.inputTitle,n=e.defaultSelect,a=e.handleInput;return o.a.createElement("form",{className:"TodoList__form"},o.a.createElement("input",{className:"TodoList__input",label:"Search todos",name:"inputTitle",id:"outline-size-small",value:t,onChange:a}),o.a.createElement("select",{className:"TodoList__select",name:"defaultSelect",value:n,onChange:a},o.a.createElement("option",{value:"Show All"},"Show All"),o.a.createElement("option",{value:"Show Completed"},"Show Completed"),o.a.createElement("option",{value:"Show Active"},"Show Active")))},_=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputTitle:"",defaultSelect:"Show All"},e.fitterByTitle=function(t){var n=e.state.inputTitle;return t.title.toLowerCase().includes(n.toLowerCase())},e.handleInput=function(t){var n=t.target,a=n.value,o=n.name;e.setState(Object(m.a)({},o,a))},e.filterByStatus=function(t){switch(e.state.defaultSelect){case"Show Completed":return t.completed;case"Show Active":return!t.completed;default:return!0}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.checkedHandler,a=e.selecUser,r=e.randomizTodo,c=this.state,l=c.inputTitle,s=c.defaultSelect,i=t.filter(this.fitterByTitle).filter(this.filterByStatus);return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h2",null,"Todos: ".concat(i.length)),o.a.createElement("div",{className:"TodoList__box"},o.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",variant:"outlined",color:"secondary",onClick:function(){r(t)}},"Random"),o.a.createElement(v,{handleInput:this.handleInput,inputTitle:l,defaultSelect:s})),o.a.createElement(h,{filterTodos:i,checkedHandler:n,selecUser:a}))}}]),n}(o.a.Component)),b=function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status,": ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},E=function(e){return b("/users/".concat(e))},T=(n(18),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:{}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;E(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&E(this.props.userId).then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props.clearUser;return o.a.createElement(o.a.Fragment,null,null===e?o.a.createElement("h2",null,"Error"):o.a.createElement("div",{className:"user"},o.a.createElement("h2",{className:"user__title"},o.a.createElement("span",null,"Selected user: ".concat(e.id))),o.a.createElement("h3",{className:"user__name"},e.name),o.a.createElement("p",{className:"user__email"},e.email),o.a.createElement("p",{className:"user__phone"},e.phone),o.a.createElement("button",{className:"button",type:"button",variant:"outlined",color:"secondary",onClick:function(){t()}},"Clear")))}}]),n}(o.a.Component)),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],selectedUserId:0},e.checkedHandler=function(t){e.setState((function(e){var n=Object(l.a)(e.todos).find((function(e){return e.id===t}));return n.completed=!n.completed,{todos:Object(l.a)(e.todos)}}))},e.filterTodos=function(e){return e.filter((function(e){return"number"===typeof e.userId})).filter((function(e){return"boolean"===typeof e.completed})).filter((function(e){return""!==e.title}))},e.clearUser=function(){e.setState({selectedUserId:0})},e.selectUser=function(t){e.setState({selectedUserId:t})},e.randomizTodo=function(t){for(var n=t.length-1;n>0;n-=1){var a=Math.floor(Math.random()*(n+1)),o=[t[a],t[n]];t[n]=o[0],t[a]=o[1]}e.setState({todos:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;b("/todos").then((function(t){var n=e.filterTodos(t);e.setState({todos:n})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App__sidebar"},o.a.createElement(_,{todos:t,checkedHandler:this.checkedHandler,selecUser:this.selectUser,randomizTodo:this.randomizTodo})),o.a.createElement("div",{className:"App__content"},o.a.createElement("div",{className:"App__content-container"},n?o.a.createElement(T,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(o.a.Component);c.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c160d073.chunk.js.map