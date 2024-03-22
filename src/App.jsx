import React from 'react'
import Routing from './Routing';
import Menu from './modules/menu/Menu';

function App() {
  return (
    <div className="wrapper">
      <Menu/>
      <div className="content_wrapper">
        <div className='companyName'>Bizzchotatam</div>
        <div className='pages_container'>
          <Routing/>
        </div>  
      </div>
    </div>
  );
}

export default App;
