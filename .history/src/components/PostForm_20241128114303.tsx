import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { Post } from "../types/Post";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const PostForm: React.FC<Props> = ({ setIsModalOpen }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Post>({
    title: "",
    body: "",
    id: 0,
  });
  const handleFormSubmit = async (values: Post) => {
    setLoading(true);
    try {
      const response = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: values.title,
          body: values.body,
        }
      );
      notification.success({
        message: "Post Added",
        description: `Post titled "${response.data.title}" was added successfully.`,
      });
      setIsModalOpen(false);
      setInputs({ title: "", body: "" ,  });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to add the post.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={()=>{handleFormSubmit(inputs)}}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input value={inputs.title} onChange={(e) => setInputs({ ...inputs, title: e.target.value })} placeholder="Enter post title" />
      </Form.Item>
      <Form.Item
        name="body"
        label="Body"
        rules={[{ required: true, message: "Please input the body!" }]}
      >
        <Input.TextArea value={inputs.body} rows={4} placeholder="Enter post body" onChange={(e) => setInputs({ ...inputs, body: e.target.value })} />
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
