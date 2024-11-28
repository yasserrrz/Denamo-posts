import React, { useState } from "react";
import { Button, Form, Layout, Modal, Typography, Card, Grid } from "antd";
import DataTable from "./components/DataTable";
import PostForm from "./components/PostForm";
import { ReactComponent as AddIcon } from "./assets/add-277.svg";
import "./App.css";

const { Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const screens = useBreakpoint(); // Responsive grid breakpoints

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: screens.xs ? "10px" : "20px",
        }}
      >
        <Content>
          <Card
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: screens.xs ? "px" : "20px",
            }}
          >
            <div
              style={{
                marginBottom: screens.xs ? "10px" : "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: screens.xs ? "8px" : "10px",
              }}
            >
              <Title
                level={2}
                style={{
                  margin: 0,
                  fontSize: screens.xs ? "20px" : "28px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "#333",
                }}
              >
                Posts
              </Title>
              <Button
                onClick={() => setIsModalOpen(true)}
                type="primary"
                style={{
                  fontSize: screens.xs ? "14px" : "16px",
                  fontWeight: "500",
                  padding: screens.xs ? "8px 12px" : "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <AddIcon style={{ width: "18px", height: "18px" }} /> Add Post
              </Button>
            </div>
            <div>
              <DataTable />
            </div>
          </Card>
        </Content>
      </Layout>
      <Modal
        open={isModalOpen}
        title="Add New Post"
        centered
        width={screens.xs ? "90%" : 800}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        footer={null}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <PostForm setIsModalOpen={setIsModalOpen} form={form} />
      </Modal>
    </>
  );
};

export default App;
