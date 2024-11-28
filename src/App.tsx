import React, { useEffect, useState } from "react";
import { Button, Form, Layout, Modal, Typography, Card, Grid } from "antd";
import DataTable from "./components/DataTable";
import PostForm from "./components/PostForm";
import { ReactComponent as AddIcon } from "./assets/add-277.svg";
import "./App.css";
import { Post } from "./types/Post";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [form] = Form.useForm();
  const screens = useBreakpoint();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Layout
        style={{
          height: "100vh",
          minHeight: "80vh",
          backgroundColor: "#f5f5f5",
          padding: screens.xs
            ? "5px"
            : screens.sm
            ? "10px"
            : screens.md
            ? "15px"
            : "20px",
        }}
      >
        <Content>
          <Card
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: screens.xs ? "10px 5px " : screens.sm ? "10px" : "20px",
            }}
          >
            <div
              style={{
                marginBottom: screens.xs ? "10px" : "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: screens.xs ? "5px" : "10px",
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
                  padding: screens.xs ? "15px 10px" : screens.sm ? "15px 10px" : "20px 15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <AddIcon /> Add Post
              </Button>
            </div>
            <div>
              <DataTable
                posts={posts}
                setPosts={setPosts}
                loading={loading}
                setLoading={setLoading}
              />
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
        <PostForm
          setIsModalOpen={setIsModalOpen}
          form={form}
          setPosts={setPosts}
        />
      </Modal>
    </>
  );
};

export default App;
