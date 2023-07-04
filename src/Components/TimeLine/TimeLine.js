import React from "react";
import { Timeline, Card, Typography } from "antd";
import { ReadOutlined } from "@ant-design/icons";

const { Text } = Typography;
const TimeLineComp = () => (
  <Card
    title={<h2>Education </h2>}
    fontSize="20"
    style={{
      width: 300,
      maxHeight: 270,
      textAlign: "center",
      marginBottom: 20,
      boxShadow: "5px 10px 0px 0px rgb(102, 51, 153), 5px 10px",
      borderColor: "#663399",
    }}
  >
    <Timeline
      items={[
        {
          color: "purple",
          dot: <ReadOutlined style={{ fontSize: "18px" }} />,
          children: (
            <>
              <Text strong style={{ fontSize: "20px" }}>
                Plan to Graduate
              </Text>
              <br />
              <Text style={{ fontSize: "20px" }}>-Mar.2024</Text>
            </>
          ),
        },
        {
          color: "purple",
          dot: <ReadOutlined style={{ fontSize: "18px" }} />,
          children: (
            <>
              <Text strong style={{ fontSize: "20px" }}>
                Enrolled in QUT
              </Text>
              <br />
              <Text style={{ fontSize: "20px" }}>-Feb.2021</Text>
            </>
          ),
        },
      ]}
    />
  </Card>
);

export default TimeLineComp;
