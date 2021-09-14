import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global'

import Header from './components/Header';
import TotalSection from './components/TotalSection';
import Overview from './components/Overview';

function App() {

  const[theme,setTheme]=useState(light)

  const toggleTheme = ()=>{
      setTheme(theme.title ==='light' ? dark: light)
  }
  return (

    <ThemeProvider theme = {theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme = {toggleTheme} theme = {theme.title}/>
        <TotalSection/>
        <Overview/>
      </div>
    </ThemeProvider>
    );
}

export default App;
