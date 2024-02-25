import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { Company } from "../../reducers/company";


interface Props{
    companies: Company[] | null
}

const columns: TableColumnsType<Company> = [
  {
    title: "Name",
    dataIndex: "name",
    filterMode: "tree",
    filterSearch: true,
    // onFilter: (value: string, record) => record.name.startsWith(value),
    width: "30%",
  },
 
];

const onChange: TableProps<Company>["onChange"] = (filters, sorter, extra) => {
  console.log("params", filters, sorter, extra);
};

const DataTable = ({companies}:Props) => {
    console.log(companies);
    
 
  return (
    <div>
      <Table columns={columns} dataSource={companies? companies: []} onChange={onChange} />
    </div>
  );
};

export default DataTable;
