import React, { useState } from 'react';
import { Button, Form, Layout, Modal, Typography } from 'antd';
import DataTable from './components/DataTable';
// import AddPostForm from './components/AddPostForm';
import './App.css';
import PostForm from './components/PostForm';
import {ReactComponent as AddIcon} from "./assets/add-277.svg";
const { Header, Content } = Layout;
const { Title } = Typography;


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  return (<>
    <Layout style={{ minHeight: '100vh' }}> 
      <Content style={{ padding: '20px' }}>
         <div style={{marginTop: '20px ' , marginBottom: '20px' , display: 'flex', justifyContent: 'space-between' , alignItems: 'center' }}>
         <Title level={2} style={{ textAlign: 'center' , marginBottom:"0px" , marginTop:"0px" , fontSize: '32px' , fontWeight: '700' , textTransform: 'uppercase' , color: '#000' }}>
          Posts
        </Title>
         <Button onClick={()=>{setIsModalOpen(true)}} style={{fontSize: '16px' , fontWeight: '500' , padding: '15px'}} type="primary"><AddIcon/> Add Post</Button>
         </div>
        <div style={{ marginTop: '40px' }}>
          <DataTable />
        </div>
      </Content>
    </Layout>
    <Modal open={isModalOpen} title="Add New Post" centered width={800} onCancel={() => {setIsModalOpen(false) ; 
      form.resetFields();
    }} footer={null}>
      <PostForm  setIsModalOpen={setIsModalOpen}  form={form} />
    </Modal>
  </>
  );
};

export default App;
