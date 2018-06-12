import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list/List'
import './index.css';

const App = () => {
  return (
    <div className="List-container">
      <List />
    </div>
  );
}

ReactDOM.render(
<App />, 
document.getElementById('root'));
