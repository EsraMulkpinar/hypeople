import { Breadcrumb } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import CompaniesForm from "../components/Form/CompaniesForm";

const CompaniesAdd = () => {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/add", label: "Add Company" },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex-1 mx-auto w-full h-screen flex flex-col justify-center items-center mb-20">
    <div className="overflow-auto">
      <Breadcrumb className="text-xs" separator={<RightOutlined />}>
          {breadcrumbItems.map((item) => (
            <Breadcrumb.Item key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className="flex items-center ">
          <ArrowLeftOutlined
            onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer"
          />
          <h2 className="text-text-darkGray text-lg">Add a New Company</h2>
        </div>
        
        <span className="text-xs text-text-lightGray ">
          You can edit new company information.
        </span>
        <CompaniesForm />
      </div>
    </div>
  );
};

export default CompaniesAdd;
