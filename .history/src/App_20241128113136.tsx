import React from 'react';
import { Button, Layout, Typography } from 'antd';
import DataTable from './components/DataTable';
// import AddPostForm from './components/AddPostForm';
import './App.css';
import PostForm from './components/PostForm';
const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          Posts
        </Title>
      </Header>
   
      <Content style={{ padding: '20px' }}>
         <div style={{ marginBottom: '20px' , display: 'flex', justifyContent: 'space-between' }}>
         <Button onClick={()=>{}} type="primary">Add Post</Button>
         </div>
        <div style={{ marginTop: '40px' }}>
          <DataTable />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
