import { Layout } from "antd";
// import FooterComponent from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/Header";
import SidebarComponent from "./components/Sidebar/Sidebar";
import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getCompany } from "../reducers/company";
import DataTable from "../components/DataTable/DataTable";
import Dashboard from "../components/Dasboard/Dashboard";

const RootLayout = ({ children }: PropsWithChildren) => {
  const { companies } = useAppSelector((state) => state.company);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen ">
      <Layout className="w-screen h-screen bg-bgWhite ">
        <HeaderComponent />
        <Layout className="bg-bgWhite">
          <div className="sticky top-0">
          <SidebarComponent />
          </div>
          <div className="  mx-auto">
            <Dashboard/>
            <DataTable companies={companies} />
          </div>
          {children}
        </Layout>
      </Layout>
    </div>
  );
};

export default RootLayout;
