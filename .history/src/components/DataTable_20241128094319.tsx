import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, notification, Flex } from 'antd';
import axios from 'axios';
import { Post } from '../types/Post';

const DataTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then(res => {
        setPosts(res.data)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
    }
    fetchData()
  }, []);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleUpdatePost = async (values: Omit<Post, 'id'>) => {
    if (!editingPost) return;

    try {
      const response = await axios.put<Post>(
        `https://jsonplaceholder.typicode.com/posts/${editingPost.id}`,
        values
      );
      setPosts((prev) =>
        prev.map((post) => (post.id === editingPost.id ? { ...post, ...response.data } : post))
      );
      notification.success({
        message: 'Post Updated',
        description: `Post with ID ${editingPost.id} was updated successfully.`,
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to update the post.',
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
        message: 'Post Deleted',
        description: `Post with ID ${id} was deleted successfully.`,
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to delete the post.',
      });
    }
  };
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: Post) => (
        <Flex style={{ gap: '10px' }}>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => setDeleteModalOpen(true)}>
            Delete
          </Button>
        </Flex>
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
        pagination={{ pageSize: 10 }} 
      />
      <Modal
        title="Edit Post"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          initialValues={{ title: editingPost?.title, body: editingPost?.body }}
          onFinish={handleUpdatePost}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input placeholder="Enter post title"  />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: 'Please input the body!' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter post body" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal 
       title="Delete Post" 
       open={deleteModalOpen} 
       onCancel={() => setDeleteModalOpen(false)} 
       footer={null}
      >
        <p>Are you sure you want to delete this post?</p>
        <Button type="primary" onClick={() => handleDelete(editingPost?.id || 0)}>
          Yes
        </Button>
        <Button onClick={() => setDeleteModalOpen(false)}>No</Button>
        </Modal>
    </>
  );
};

export default DataTable;
