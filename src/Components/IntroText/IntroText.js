import React from "react";
import { Typography, Tag } from "antd";

import EmpButtons from "../EmpButtons/EmpButtons";
import "./IntroText.css";
const { Title, Text } = Typography;

function IntroText() {
  return (
    <div>
      <Title
        className="topo1"
        style={{ margin: 0, marginBottom: 5, fontSize: "40px" }}
      >
        Hello, mate!
      </Title>
      <Title
        className="topo2"
        style={{ margin: 0, marginBottom: 5, fontSize: "60px" }}
      >
        I'm Hisa Sato
      </Title>
      <Text style={{ margin: 0, fontSize: "17px", lineHeight: 2.3 }}>
        A{" "}
        <Tag
          color="orange"
          style={{ fontSize: 18, padding: 7, borderRadius: 8 }}
        >
          Software Developer
        </Tag>
        who thrives on crafting programs with{" "}
        <Tag
          color="orange"
          style={{ fontSize: 18, padding: 7, borderRadius: 8 }}
        >
          C#
        </Tag>
        as well as web development using{" "}
        <Tag
          color="orange"
          style={{ fontSize: 18, padding: 7, borderRadius: 8 }}
        >
          Web Development
        </Tag>
        and{" "}
        <Tag
          color="orange"
          style={{ fontSize: 18, padding: 7, borderRadius: 8 }}
        >
          UI Design
        </Tag>
      </Text>
      <div className="employContainer">
        <div className="employButton">
          <EmpButtons />
        </div>
      </div>
    </div>
  );
}

export default IntroText;
