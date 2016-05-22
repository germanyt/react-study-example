import { Component } from 'react';
import { connect } from 'react-redux';

import { Message } from '../components/';
import { addMessage, deleteMessage } from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    list: state.Message.list
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onAddMessage: (data) => dispatch(addMessage(data)),
    onDeleteMessage: (index) => dispatch(deleteMessage(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

// 你可以传递一个对象，而不是定义一个 `mapDispatchToProps`：
// export default connect(mapStateToProps, IndexActionCreators)(Index);

// 或者如果你想省略 `mapDispatchToProps`，你可以通过传递一个 `dispatch` 作为一个 props：
// export default connect(mapStateToProps)(Index);

// 想看到更多的方法，详细的 connect() 示例如下。