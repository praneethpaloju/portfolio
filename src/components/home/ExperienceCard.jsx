import React from 'react';
import { Col, Row } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Row className="justify-content-center">
      <Col lg="6" className="mx-auto">
        <div className="pb-5 text-center">
          <img className="bg-white mb-3" src={data.companylogo} alt="" />
          <p className="lead">
            {data.role}
            <br />
            {data.date}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default ExperienceCard;
