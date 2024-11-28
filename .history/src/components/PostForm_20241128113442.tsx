import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { Post } from "../types/Post";

const PostForm: React.FC = ({setIsModalOpen :}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (values: Omit<Post, "id">) => {
    setLoading(true);
    try {
      const response = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        values
      );
      notification.success({
        message: "Post Added",
        description: `Post titled "${response.data.title}" was added successfully.`,
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to add the post.",

      } );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleFormSubmit}>
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
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
