import React from 'react';
import { Layout, Typography } from 'antd';
import DataTable from './components/DataTable';
// import AddPostForm from './components/AddPostForm';
import './App.css';
import PostForm from './components/PostForm';
const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          Posts
        </Title>
      </Header>
   
      <Content style={{ padding: '20px' }}>
         <div
        <div style={{ marginTop: '40px' }}>
          <DataTable />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
