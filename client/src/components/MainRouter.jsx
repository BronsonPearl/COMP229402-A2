import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Education from '../pages/education'
import Project from '../pages/project'
import Services from '../pages/services'
import Header from './Header'
import Footer from './Footer'


const MainRouter = () => {
 return (<div>
 <Header/>
<main>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/education" element={<Education />} />
<Route exact path="/projects" element={<Project />} />
<Route exact path="/services" element={<Services />} />
<Route exact path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer/>
</div>
);
}
export default MainRouter
