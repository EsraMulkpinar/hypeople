// ContentComponent.js
import { Layout } from 'antd';
import DataTable from '../../../components/DataTable/DataTable';

const { Content } = Layout;

const ContentComponent = () => {
  return (
    <Layout className="bg-white flex justify-center items-center  mx-44  ">
      <Content className='w-full h-full bg-red-400'>

      </Content>
    </Layout>
  );
};

export default ContentComponent;

