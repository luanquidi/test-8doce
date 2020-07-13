import React from 'react';
import { Row, Avatar } from 'antd';
import './Hero.scss';

const Hero = ({title}) => {
    return (
        <Row className="hero">
            <p className="hero__title" data-aos="flip-up" data-aos-duration="1000">
                {/* {title} */}
                <Avatar style={{marginLeft: '10px'}} size={80} src="https://instagram.fmzl1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106094707_610291106258544_930320823898083548_n.jpg?_nc_ht=instagram.fmzl1-1.fna.fbcdn.net&_nc_ohc=uL0wLe9NGRcAX-wxogX&oh=03bff6fe01e80c6eb09aca2c02fc748b&oe=5F35D05A" />
            </p>
        </Row>
    );
}
 
export default Hero;