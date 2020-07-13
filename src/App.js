import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

// Componets Antd
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {

  const [title, setTitle] = useState('Home');
  useEffect(() => {

    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
    
  }, []);

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#FDDC01',
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <>
      <Navbar setTitle={setTitle} />
      <Hero title={title}/>
      <Section />
      <BackTop>
        <div style={style}><ArrowUpOutlined /></div>
      </BackTop>
    </>
  );
}

export default App;
