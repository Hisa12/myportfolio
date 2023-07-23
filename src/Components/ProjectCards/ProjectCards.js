import React from "react";
import port_img from "../../assets/port_img.png";
import "./ProjectCards.css";
import { GithubOutlined, HomeFilled } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography, Tag } from "antd";
import projectItems from "./ProjectItems";
const { Title, Text } = Typography;
const { Meta } = Card;

function ProjectCards() {
  return (
    <div>
      <div>
        <Row justify="space-evenly">
          {projectItems.map((item) => (
            <Col key={item.key} xs={22} sm={12} md={9} xl={7}>
              <div className="eachCard">
                <Card
                  bordered
                  style={{
                    maxwidth: 250,
                    textAlign: "center",
                    boxShadow: "5px 10px 0px 0px rgb(102, 51, 153), 5px 10px",
                    borderColor: "#663399",
                    borderTop: "2.5px solid #663399",
                    borderLeft: "2.5px solid #663399",
                  }}
                  cover={
                    <img
                      src={require(`../../assets/${item.img}`)}
                      alt={item.alt}
                      width="30px"
                      height="200px"
                    />
                  }
                >
                  <div style={{ textAlign: "center" }}>
                    <Meta
                      title={
                        <Space>
                          <Title level={3} style={{ margin: 0 }}>
                            {item.title}
                          </Title>
                          <div>
                            <a href={item.homeURL}>
                              <HomeFilled className="snsProject" />
                            </a>
                            <a href={item.gitURL}>
                              <GithubOutlined className="snsProject git" />
                            </a>
                          </div>
                        </Space>
                      }
                      description={
                        <Text
                          style={{
                            fontSize: "17px",
                            lineHeight: "1",
                          }}
                        >
                          {item.description}
                        </Text>
                      }
                    />
                    <div style={{ marginTop: 10 }}>
                      <Space size={[0]} wrap style={{ lineHeight: 2 }}>
                        {item.skills.map((skillItem) => (
                          <Tag
                            key={item.skill}
                            style={{ fontSize: 13, padding: 2 }}
                            color={skillItem.color}
                          >
                            {skillItem.skill}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ProjectCards;
