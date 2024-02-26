import { useEffect, useState } from "react";
import { Avatar, Button, Card, Input, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { Company } from "../../reducers/company";
import AvatarImage from "/assets/images/AvatarImage.png";
import Dot from "/assets/icons/Dot.svg";
import DownIcon from "/assets/icons/DownIcon.svg";
import SearchIcon from "/assets/icons/SearchIcon.svg";
import LightBlueButton from "../LightBlueButton/LightBlueButton";
import { Link } from "react-router-dom";

interface Props {
  companies: Company[] | null;
}

const DataTable = ({ companies }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedCompanies, setSortedCompanies] = useState<Company[] | null>(
    null
  );
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (isSorted && companies) {
      const sorted = [...companies].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortedCompanies(sorted);
    } else {
      setSortedCompanies(companies);
    }
  }, [companies, isSorted]);

  const onFilterClick = () => {
    setIsSorted(!isSorted);
  };

  const filteredAndSortedCompanies = sortedCompanies?.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.descriptionShort
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (company.industries?.some((industry) =>
        industry.toLowerCase().includes(searchTerm.toLowerCase())
      ) ??
        false)
  );
  console.log(companies);

  const columns: TableColumnsType<Company> = [
    {
      title: undefined,
      key: "details",
      render: (_, record) => (
        <div className="flex justify-between lg:items-center items-start lg:space-x-[230px] w-full space-y-4 pt-2 lg:flex-row flex-col">
          <div className="flex items-center ">
            <div className="w-16 h-16 mr-4 border rounded-xl">
              {record.logo ? (
                <img
                  src={record.logo}
                  alt="logo"
                  className="lg:p-4 p-2 object-fill"
                />
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col justify-around ">
              <div className="text-xs text-text-midGray font-light">
                {record.industries?.length > 0 ? record.industries[0] : ""}
              </div>
              <div className="text-lg text-text-darkGray"> {record.name}</div>
              <div className="text-xs text-text-lightGray ">
                {record.descriptionShort.length > 35
                  ? `${record.descriptionShort.substring(0, 35)}`
                  : record.descriptionShort}
              </div>
            </div>
          </div>
          <div className="flex lg:w-auto w-full lg:items-center items-start space-y-2 space-x-0  lg:space-x-8 lg:flex-row flex-col">
            <div className="flex space-x-2 items-center">
              <Avatar
                className="border-none"
                size={32}
                icon={<img className="object-contain" src={AvatarImage} />}
              />
              <div className="">Marvin McKinney</div>
            </div>
            <div className="">19/12/2023</div>
            <div className="flex space-x-2 items-center">
              <img className="object-contain" src={Dot} />
              <div className="">Success</div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const onChange: TableProps<Company>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("params", pagination, filters, sorter);
  };

  return (
    <Card className="rounded-2xl  ">
      <div className="py-4">
        <div className="px-4 flex justify-between items-center lg:flex-row flex-col">
          <div>Companies</div>
          <div className="flex lg:flex-row flex-col  items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <Input
              prefix={<img src={SearchIcon} alt="Search" />}
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="lg:w-[216px] w-full"
            />
              <LightBlueButton
              title="Filter"
              onclick={onFilterClick}
              icon={DownIcon}
            />

            <Link to={"/add"}>
              <Button className="bg-blueButton text-white"> Add Company</Button>
            </Link>
          </div>
        </div>
        <div className="no-border-between-rows custom-table flex flex-col w-full justify-center">
          <Table
            key={0}
            pagination={{ pageSize: 6, hideOnSinglePage: true }}
            columns={columns}
            dataSource={filteredAndSortedCompanies}
            onChange={onChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default DataTable;
