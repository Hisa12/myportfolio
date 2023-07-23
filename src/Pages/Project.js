import React from "react";
import "../Styles/Project.css";

import ProjectCards from "../Components/ProjectCards/ProjectCards";
import { Row, Typography } from "antd";

const { Title } = Typography;

function Project() {
  return (
    <div className="projectComp">
      <div className="innerProjectComp">
        <div>
          <Title style={{ textAlign: "center" }}>Project</Title>
        </div>

        <div className="cardComp">
          <Row justify="space-evenly">
            <ProjectCards />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Project;
