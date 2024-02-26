import { Card } from "antd";
import DotDarkBlue from "/assets/icons/DotDarkBlue.svg";
import DotLightBlue from "/assets/icons/DotLightBlue.svg";
import ColumnChart from "../ColumnChart/ColumnChart";

const CompaniesChart = () => {
  return (
    <Card className="p-4 leading-none  rounded-xl ">
      <div className="pb-4">Number of Companies</div>
     <div className="flex items-center justify-between">
     <div className="flex items-baseline space-x-2">
        <img src={DotLightBlue} alt="" />
        <div className="flex flex-col items-end ">
          <div className="text-text-lightGray">Last Month</div>
        <div className="text-4xl">80%</div>
        </div>
      </div>
      <div className="flex items-baseline space-x-2">
        <img src={DotDarkBlue} alt="" />
        <div className="flex flex-col items-end ">
          <div className="text-text-lightGray">This Month</div>
        <div className="text-4xl">72%</div>
        </div>
      </div>
     
     </div>
      <ColumnChart />
    </Card>
  );
};

export default CompaniesChart;
