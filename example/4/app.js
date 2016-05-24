import React from 'react';
import { render } from 'react-dom';

import {Router, RouterContext, Route, IndexRoute, hashHistory} from 'react-router';
// import {createHistory} from 'history';

import { Provider } from 'react-redux';
import store from './store';

import {
  App,
  Index,
  PageNotFound
} from './components';

import {
  Message
} from './containers';


//import css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

render( (
  <Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="message" component={Message} />
		</Route>
    <Route path="*" component={PageNotFound} />
	</Router>
  </Provider> 
), document.getElementById('content') );

// import store from './store';
// import {addMessage, deleteMessage, inputFilterKey} from './actions';

// console.log(store.getState());

// // 每次 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// // 发起一系列 action
// store.dispatch(addMessage({text: 'Learn about actions', create_time: '2016-05-24 11:09:24'}));
// store.dispatch(addMessage({text: 'Learn about reducers', create_time: '2016-05-24 11:09:24'}));
// store.dispatch(addMessage({text: 'Learn about store', create_time: '2016-05-24 11:09:24'}));
// store.dispatch(deleteMessage(2));
// store.dispatch(deleteMessage(0));
// store.dispatch(inputFilterKey('Learn'));

// // 停止监听 state 更新
// unsubscribe();