import React from "react";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";

function EmpButtons() {
  return (
    <>
      <Space wrap>
        <Tooltip
          title="I'm seeking a grad position for Software Development"
          trigger="click"
          placement="bottomLeft"
          defaultOpen
        >
          <Button
            style={{
              color: "white",
              fontSize: "17px",
              borderColor: "#3bcbab",
              backgroundColor: "#3bcbab",
            }}
            href="mailto:info.hisa321@gmail.com"
            type="primary"
            size="large"
            icon={<MailOutlined />}
          >
            Hire Me
          </Button>
        </Tooltip>

        <Button
          size="large"
          type="primary"
          href="https://drive.google.com/file/d/1eU-7AaEaFn6LZ251lJHxfw8v6DmePmzw/view?usp=sharing"
          style={{
            color: "white",
            fontSize: "17px",
            borderColor: "#3bcbab",
            backgroundColor: "#3bcbab",
          }}
          icon={<DownloadOutlined />}
        >
          See Resume
        </Button>
      </Space>
    </>
  );
}

export default EmpButtons;
