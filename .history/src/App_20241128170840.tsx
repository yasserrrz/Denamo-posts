import React, { useState } from "react";
import { Button, Form, Layout, Modal, Typography, Card } from "antd";
import DataTable from "./components/DataTable";
import PostForm from "./components/PostForm";
import { ReactComponent as AddIcon } from "./assets/add-277.svg";
import "./App.css";

const { Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <Content >
          <Card
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Title
                level={2}
                style={{
                  margin: 0,
                  fontSize: "28px",
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
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 20px",
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
        width={800}
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
