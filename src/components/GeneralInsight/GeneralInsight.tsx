import Card from "antd/es/card/Card";
import ArrowUpDark from "/assets/icons/ArrowUpDark.svg";
import ArrowDownLight from "/assets/icons/ArrowDownLight.svg";

const GeneralInsight = () => {
  return (
    <Card className="min-w-[272px] px-4 flex flex-col space-y-4 py-4 lg:py-0  rounded-xl ">
      <div className="pt-3.5 ">General Insight</div>
      <div className="pt-2 pb-4 ">
        <div className="text-text-lightGray text-sm">Companies</div>
        <div className="flex border-b pb-4 space-y-3 items-baseline space-x-1">
          <img src={ArrowDownLight} alt="" />
          <div className="text-4xl">7204</div>
        </div>
      </div>
      <div className="">
        <div className="text-text-lightGray ">Proposal</div>
        <div className="flex space-y-3 items-baseline space-x-1 ">
          <img src={ArrowUpDark} alt="" />
          <div className="text-4xl">420</div>
        </div>
      </div>
    </Card>
  );
};

export default GeneralInsight;
