import React from 'react';
import { Header } from './components/header';
import { Sidenav } from './components/sidenav';
import { StartView } from './components/start-view';

function App() {
  return (

    <>
    <div className='flex w-full h-full flex-grow'>
    <Sidenav />
    <div className='w-full'>
    <StartView />
    </div>
    </div>
    </>
  );
}

export default App;
