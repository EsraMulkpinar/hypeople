import DataTable from "../components/DataTable/DataTable";
import Dashboard from "../components/Dasboard/Dashboard";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getCompany } from "../reducers/company";
import { useEffect } from "react";

const Home = () => {
  const { companies } = useAppSelector((state) => state.company);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  console.log(companies);
  
  return (
    <div className="flex-1 mx-auto w-full h-screen flex flex-col justify-center items-center mb-20">
     <div className="overflow-auto">
     <Dashboard />
      <div className="">
        <DataTable companies={companies} />
      </div>
     </div>
    </div>
  );
};

export default Home;
