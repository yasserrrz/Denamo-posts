import React from 'react';
import { Layout, Typography } from 'antd';
import DataTable from './components/DataTable';
// import AddPostForm from './components/AddPostForm';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          React + TypeScript + Ant Design
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        {/* <AddPostForm /> */}
        <div style={{ marginTop: '40px' }}>
          <DataTable />
        </div>
      </Content>
    </Layout>
  );
};

export default App;