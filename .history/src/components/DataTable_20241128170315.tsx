import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, notification, Tooltip } from "antd";
import axios from "axios";
import { Post } from "../types/Post";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete-icon-1.svg";

const DataTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

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

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleUpdatePost = async (values: Omit<Post, "id">) => {
    if (!editingPost) return;

    try {
      const response = await axios.put<Post>(
        `https://jsonplaceholder.typicode.com/posts/${editingPost.id}`,
        values
      );
      setPosts((prev) =>
        prev.map((post) =>
          post.id === editingPost.id ? { ...post, ...response.data } : post
        )
      );
      notification.success({
        message: "Post Updated",
        description: `Post with ID ${editingPost.id} was updated successfully.`,
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to update the post.",
      });
    } finally {
      setIsModalOpen(false);
      setEditingPost(null);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      notification.success({
        message: "Post Deleted",
        description: `Post with ID ${id} was deleted successfully.`,
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to delete the post.",
      });
    }
    setDeleteModalOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "8%",
      render: (text: string) => (
        <span style={{ fontSize: "12px", color: "#888" }}>{text}</span>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      width: "40%",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      width: "12%",
      render: (text: any, record: Post) => (
        <div className="table-actions" style={{ display: "flex", gap: "8px" }}>
          <Tooltip title="Edit">
            <Button
              type="primary"
              shape="circle"
              icon={<EditIcon />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteIcon />}
              style={}
              onClick={() => {
                setEditingPost(record);
                setDeleteModalOpen(true);
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        loading={loading}
        scroll={{ y: "calc(100vh - 250px)", x: 700 }}
        pagination={{ pageSize: 10 }}
      />

      {/* edit modale */}
      <Modal
        title="Edit Post"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <Form
          initialValues={{ title: editingPost?.title, body: editingPost?.body }}
          onFinish={handleUpdatePost}
          layout="vertical"
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input placeholder="Enter post title" />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: "Please input the body!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter post body" />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Update Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* delete modal */}
      <Modal
        title="Delete Post"
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        centered
        footer={[
          <Button
            key="cancel"
            onClick={() => setDeleteModalOpen(false)}
            style={{ marginRight: "8px" }}
          >
            No
          </Button>,
          <Button
            key="delete"
            type="primary"
            danger
            onClick={() => handleDelete(editingPost?.id || 0)}
          >
            Yes
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this post?</p>
      </Modal>
    </>
  );
};

export default DataTable;
