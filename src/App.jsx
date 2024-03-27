import React from 'react'
import Routing from './Routing';
import Menu from './modules/menu/Menu';
import MenuBurg from './components/MenuBurg';

function App() {
  return (
    <div className="wrapper">
      <Menu/>
      <div className="content_wrapper">
        <div className='companyName'>
          <MenuBurg/>
          <div className='text-2xl' >Bizzchotatam</div>
        </div>
        <div className='pages_container'>
          <Routing/>
        </div>  
      </div>
    </div>
  );
}

export default App;
