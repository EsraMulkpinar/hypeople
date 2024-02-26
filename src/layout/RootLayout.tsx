import { PropsWithChildren } from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/Header/Header";
import SidebarComponent from "./components/Sidebar/Sidebar";



const RootLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="w-screen h-screen">
      <Layout className="w-screen h-screen bg-bgWhite">
        <div className="overflow-auto h-screen fixed left-0 top-0 bottom-0">
          <HeaderComponent />
        </div>
        <Layout className="bg-bgWhite w-screen overflow-auto h-screen fixed left-0 top-[80px] bottom-0">
          <div className="sticky top-0 z-10">
            <SidebarComponent />
          </div>
          
          {children}
        </Layout>
      </Layout>
    </div>
  );
};

export default RootLayout;
