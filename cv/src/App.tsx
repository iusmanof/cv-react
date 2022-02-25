import Aside from 'components/Aside';
import Main from 'components/Main';
import React from 'react';
import './App.scss' 
import './reset.scss'

function App(props) {
    return (
        <div className="wrapper">
            <div className="content">
              <Aside />
              <Main />
            </div>
        </div>
    );
}

export default App;