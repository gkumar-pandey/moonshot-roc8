import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

import {
  BarChartProps,
  HandleBarClick,
} from "../../../types/dashboard/DashboardTypes";
import { getFilteredData, totalTimeSpent } from "../../../utils/dataDashboard";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedFeature } from "../../../store/features/dashboard/dataSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: FC<BarChartProps> = ({ data }) => {
  const { filters } = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();
  const handleBarClick: HandleBarClick = (event, element) => {
    if (element.length > 0 && chartData.labels && chartData.labels.length > 0) {
      const index = element[0].index;
      const label = chartData?.labels[index];

      if (typeof label === "string") {
        dispatch(setSelectedFeature(label));
      }
    }
  };

  const filteredData = getFilteredData(data, filters);

  const labels = ["A", "B", "C", "D", "E", "F"];
  const chartData: ChartData<"bar"> = {
    labels: labels,
    datasets: [
      {
        label: "Time Spent",
        data: totalTimeSpent(filteredData),
        backgroundColor: [
          "#f72585",
          "#7209b7",
          "#3a0ca3",
          "#4361ee",
          "#4cc9f0",
          "#fb8500",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "Total Time Spent",
        },
      },
      y: {
        title: {
          display: true,
          text: "Features",
        },
      },
    },
    onClick: handleBarClick,
  };

  return (
    <div className="w-full">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default BarChart;
