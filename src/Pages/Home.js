import React from "react";
import "../Styles/Home.css";
import top_img from "../assets/top_img.png";
import { Row, Col, Typography } from "antd";
import TimeLineComp from "../Components/TimeLine/TimeLine";
import SkillList from "../Components/SkillList/SkillList";
import IntroText from "../Components/IntroText/IntroText";
import SoftSkills from "../Components/SoftSkills/SoftSkills";
import WhyMeText from "../Components/WhyMeText/WhyMe";
const { Title } = Typography;

function Home() {
  return (
    <div className="homePage">
      <div className="firstComp">
        <Row justify="space-evenly">
          <Col className="introContainer intro" xs={22} sm={20} md={11} xl={10}>
            <IntroText />
          </Col>

          <Col className="introContainer img" md={11} xl={10}>
            <img className="introImg" src={top_img} alt="top_img" />
          </Col>
        </Row>
      </div>

      <div className="secondComp">
        <div className="inner_secondComp">
          <div>
            <Title style={{ textAlign: "center", color: "white" }}>
              Why Me?
            </Title>
          </div>
          <div>
            <Row gutter={[20, 30]} justify="space-evenly">
              <Col className="careerExp edu" xs={23} sm={20} md={18} xl={15}>
                <WhyMeText />
              </Col>
              <Col className="careerExp prof" xs={24} sm={23} md={20} xl={20}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <SoftSkills />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="thirdComp">
        <div>
          <Title style={{ textAlign: "center" }}>My Education & Skills</Title>
        </div>
        <div>
          <Row justify="space-evenly">
            <Col className="careerExp edu" xs={23} sm={20} md={10} xl={8}>
              <TimeLineComp />
            </Col>
            <Col className="careerExp prof" xs={23} sm={20} md={10} xl={8}>
              <SkillList />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
