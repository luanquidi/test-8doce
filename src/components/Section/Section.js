import React from 'react';
import { Row, Col } from 'antd';

import './Section.scss';
import CardList from '../CardList/CardList';

const Section = () => {
    return ( 
        <Row className="section">
            <Col md={4}></Col>
            <Col className="section__content" md={16} data-aos="fade-down">
                <CardList />
            </Col>
            <Col md={4}></Col>
        </Row>
     );
}
 
export default Section;