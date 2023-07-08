import React from "react";
import "../Styles/PageNotFound.css";
import error_img from "../assets/error_img.png";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;
function Contact() {
  return (
    <div className="errorComp">
      <div>
        <Row gutter={[20, 30]} justify="space-evenly">
          <Col xs={23} sm={20} md={18} xl={15}>
            <Title style={{ textAlign: "center" }}>Page not found!</Title>
          </Col>
          <Col xs={22} sm={20} md={18} xl={15}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className="error_img" src={error_img} alt="error_img" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
