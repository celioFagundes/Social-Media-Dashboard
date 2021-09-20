import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global'

import Background from './components/Background';
import Header from './components/Header';
import MediasSection from './components/MediasSection';


function App() {

  const[theme,setTheme]=useState(light)

  const toggleTheme = ()=>{
      setTheme(theme.title ==='light' ? dark: light)
  }
  return (

    <ThemeProvider theme = {theme}>
      <div className="App">
        <GlobalStyle/>
        <Background/>
        <Header toggleTheme = {toggleTheme} theme = {theme.title}/>
        <MediasSection/>
      </div>
    </ThemeProvider>
    );
}

export default App;
