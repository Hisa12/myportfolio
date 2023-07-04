import React from "react";
import { LinkedinFilled, GithubOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./SNSIcons.css";

function SNSIcons() {
  return (
    <Space wrap className="snsComp">
      <a
        href="https://www.linkedin.com/in/hisano-sato-501a42205"
        className="LinkedInLink"
      >
        <LinkedinFilled className="sns" />
      </a>
      <a href="https://github.com/Hisa12/portfolio">
        <GithubOutlined className="sns" />
      </a>
    </Space>
  );
}

export default SNSIcons;
