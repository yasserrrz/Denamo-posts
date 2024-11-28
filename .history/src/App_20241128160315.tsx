import React, { useState } from 'react';
import { Button, Layout, Modal, Typography } from 'antd';
import DataTable from './components/DataTable';
// import AddPostForm from './components/AddPostForm';
import './App.css';
import PostForm from './components/PostForm';
import {ReactComponent as AddIcon} from "./assets/add-277.svg";
const { Header, Content } = Layout;
const { Title } = Typography;


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (<>
    <Layout style={{ minHeight: '100vh' }}>
      <Header  style={{ color: 'white', textAlign: 'center'   }}>
       
      </Header>
   
      <Content style={{ padding: '20px' }}>
         <div style={{marginTop: '20px ' , marginBottom: '20px' , display: 'flex', justifyContent: 'space-between' , alignItems: 'center' }}>
         <Title level={2} style={{ color: 'white' , textAlign: 'center' , marginBottom:"0px" , marginTop:"0px" , fontSize: '32px' , fontWeight: '600' , textTransform: 'uppercase' , color: }}>
          Posts
        </Title>
         <Button onClick={()=>{setIsModalOpen(true)}} style={{fontSize: '16px' , fontWeight: '500' , padding: '15px'}} type="primary"><AddIcon/> Add Post</Button>
         </div>
        <div style={{ marginTop: '40px' }}>
          <DataTable />
        </div>
      </Content>
    </Layout>
    <Modal open={isModalOpen} title="Add New Post" centered width={800} onCancel={() => setIsModalOpen(false)} footer={null}>
      <PostForm  setIsModalOpen={setIsModalOpen} />
    </Modal>
  </>
  );
};

export default App;
