import CompaniesChart from "../CompaniesChart/CompaniesChart";
import GeneralInsight from "../GeneralInsight/GeneralInsight";
import LightBlueButton from "../LightBlueButton/LightBlueButton";
import YearlyIncome from "../YearlyIncome/YearlyIncome";
import ArrowRight from "/assets/icons/ArrowRight.svg";
import AvatarImage from "/assets/images/AvatarImage.png";

const Dashboard = () => {
  const onclick = () => {
    console.log("");
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={AvatarImage} alt="" />
          <div className="text-xl">Good Morning, Edward</div>
        </div>
        <LightBlueButton
          title="Get Report 2024"
          icon={ArrowRight}
          onclick={onclick}
        />
      </div>
      <div className="my-3 text-xs text-text-lightGray">
        Last login 10 May 2024
      </div>
      <div className="lg:flex w-full lg:space-x-4 space-y-4 lg:space-y-0 h-[268px]">
        <CompaniesChart />
        <GeneralInsight />
        <YearlyIncome/>
      </div>
    </div>
  );
};

export default Dashboard;
