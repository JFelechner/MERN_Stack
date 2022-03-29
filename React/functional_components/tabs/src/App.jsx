import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';
import View from './components/View';

function App() {
  const tabs = [
    { title: "Tab 1", view: "Tab 1 content is showing here"},
    { title: "Tab 2", view: "Tab 2 content is showing here"},
    { title: "Tab 3", view: "Tab 3 content is showing here"},
    { title: "Tab 4", view: "Tab 4 content is showing here"},
  ];
  const [ tabsList, setTabsList ] = useState(tabs);
  const [ currentTab, setCurrentTab ] = useState(0);

  return (
    <div className="App">
      
      <Tab 
        tabsList={ tabsList } 
        currentTab={ currentTab }
        setCurrentTab={ setCurrentTab } 
      />

      <View tabsList={ tabsList } currentTab={ currentTab } />
    </div>
  );
}

export default App;
