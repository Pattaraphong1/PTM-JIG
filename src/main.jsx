import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx'
import NavBar from './components/NavBar';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <NavBar/> */}
    <Menu/>
    <Content/>
    <Footer/>
  </StrictMode>,
)
