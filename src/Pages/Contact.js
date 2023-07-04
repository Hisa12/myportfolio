import React from "react";
import "../Styles/Contact.css";
import contact_img from "../assets/contact_img.png";
import { Row, Col, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import EmpButtons from "../Components/EmpButtons/EmpButtons";

const { Title, Text } = Typography;
function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Row justify="space-evenly" className="ContactPage">
        <Col className="InnerContactPage" xs={23} sm={20} md={10} xl={10}>
          <img className="contactImg" src={contact_img} alt="contact_img" />
        </Col>
        <Col className="contactComp" xs={22} sm={18} md={10} xl={8}>
          <Row className="contactComp">
            <Col>
              <Title>Get In Touch</Title>
            </Col>
            <Col className="contactComp">
              <Text
                style={{
                  fontSize: "17px",
                  textAlign: "center",
                  lineHeight: "2",
                }}
              >
                Have a project in mind? Have a collaboration opportunity? Or
                just want to say hello? I'd love to hear from you! Please feel
                free to reach out, and I'll get back to you within 24 hours.
              </Text>
            </Col>
            <Col className="contactComp" xs={22} sm={18} md={15} xl={15}>
              <Title
                style={{
                  paddingTop: "20px",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <EnvironmentOutlined style={{ fontSize: 18 }} /> Brisbane, QLD
              </Title>
            </Col>

            <Col className="employButtion">
              <EmpButtons />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
