import React from "react";
import { Tag, Space, Card } from "antd";
import frontFrame from "./Skills/FrontEnd";
import backFrame from "./Skills/BackEnd";

function SkillList() {
  return (
    <Card
      title={<h2>Professional Skills</h2>}
      style={{
        textAlign: "center",
        boxShadow: "5px 10px 0px 0px rgb(102, 51, 153), 5px 10px",
        borderColor: "#663399",
      }}
    >
      <h2>Front End</h2>
      <div>
        <Space size={[0]} wrap style={{ lineHeight: 2.5 }}>
          {frontFrame.map((item) => (
            <Tag
              key={item.skill}
              style={{ fontSize: 18, padding: 3 }}
              color={item.color}
            >
              {item.skill}
            </Tag>
          ))}
        </Space>
      </div>

      <h2>Back End</h2>
      <div>
        <Space size={[0, 8]} wrap>
          {backFrame.map((item) => (
            <Tag
              key={item.skill}
              style={{ fontSize: 18, padding: 3 }}
              color={item.color}
            >
              {item.skill}
            </Tag>
          ))}
        </Space>
      </div>
    </Card>
  );
}

export default SkillList;
