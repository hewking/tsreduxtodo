import * as React from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer';
import Header from './components/Header';

function App(){

  return (
    <div style={{display:'flex'
    ,flex:1
    ,justifyContent:'center'
    ,alignItems:'center'
    ,flexDirection:'column'}}>
      <Header/>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
}

export default App;
