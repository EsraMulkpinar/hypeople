import { Card } from "antd";
import ArrowDownWhite from "/assets/icons/ArrowDownWhite.svg";

const YearlyIncome = () => {
  return (
    <Card className="min-w-[272px] rounded-xl overflow-hidden shadow-lg relative bg-card text-white">
      <img
        src="../public/assets/images/Card.png"
        className="absolute w-full h-full object-fill lg:object-cover"
        alt="Card background"
      />
      <div className="h-[268px] relative z-10 p-4 flex flex-col justify-between">
        <div className="font-bold text-xl mb-2">Yearly Income</div>
        <div className="flex flex-col pb-4 space-y-3 items-baseline">
          <div className="flex items-baseline space-x-1">
          <img src={ArrowDownWhite} alt="" />
          <div className="text-4xl">£216.034</div>
          </div>
          <div className="">
            <div className="relative z-10 text-base">Until 2024 Q4</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default YearlyIncome;
