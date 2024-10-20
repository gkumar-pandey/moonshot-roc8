import { useEffect, useState } from "react";
import { Navbar } from "../../components/dataDashboard";
import FilterBar from "../../components/dataDashboard/FilterBar/FilterBar";
import { fetchDataApi } from "../../services/dashboardServices/dashboardServices";
import { setData, setFilter } from "../../store/features/dashboard/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BarChart from "../../components/dataDashboard/BarChart/BarChart";
import { Container } from "../../components/EmailApp";
import LineChart from "../../components/dataDashboard/LineChart/LineChart";
import { extractStartAndEndDate } from "../../utils/dataDashboard";
import Cookies from "js-cookie";

const DashboardPage = () => {
  const { data } = useAppSelector(state => state.data);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res: any = await fetchDataApi();
      if (res.status === 200) {
        dispatch(setData(res.data?.data));
      } else {
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <FilterBar />
      <Container>
        {isLoading && (
          <h2 className="text-xl font-medium text-center ">Loading...</h2>
        )}
        {data.length > 0 && (
          <div className="">
            <BarChart data={data} />
            <LineChart />
          </div>
        )}
      </Container>
    </div>
  );
};

export default DashboardPage;
