import React from "react";
import { Progress, Space, Row, Col } from "antd";
import "./SoftSkills.css";

function SoftSkills() {
  const softSkill = [
    { name: "Fast-Learning", percent: 90 },
    { name: "Self-Discipline", percent: 80 },
    { name: "Collaboration", percent: 80 },
  ];
  return (
    <>
      <Space wrap>
        {softSkill.map((item) => (
          <>
            <div key={item.name}>
              <Row>
                <Col>
                  <div className="processComp">
                    <Progress
                      size={118}
                      strokeColor={"#3bcbab"}
                      type="circle"
                      strokeWidth={10}
                      percent={item.percent}
                      style={{ padding: 8 }}
                      format={() => (
                        <div style={{ color: "white" }}>{item.percent}%</div>
                      )}
                    />
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        ))}
      </Space>
    </>
  );
}

export default SoftSkills;
