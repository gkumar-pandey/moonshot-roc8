import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

import zoomPlugin from "chartjs-plugin-zoom";
import { Data } from "../../../types/dashboard/DashboardTypes";
import { formatDate, getFilteredData } from "../../../utils/dataDashboard";
import { useAppSelector } from "../../../store/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const LineChart = () => {
  const { data, selectedFeature, filters } = useAppSelector(
    state => state.data
  );
  const filteredData = getFilteredData(data, filters);

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
  };

  const featureData: any = filteredData?.map((ele: Data) => {
    if (selectedFeature) {
      return ele[selectedFeature as keyof typeof ele];
    }
  });

  const labels = filteredData?.map(ele => formatDate(ele.date));

  const chartData: ChartData<"line"> = {
    labels: labels,
    datasets: [
      {
        label: "Time Spent",
        data: featureData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (!selectedFeature) {
    return null;
  }

  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
