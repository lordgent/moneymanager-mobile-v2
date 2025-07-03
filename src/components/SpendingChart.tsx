import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface Props {
  range: "today" | "week" | "month" | "year";
}

interface ChartResponse {
  time: string;
  total: number;
}

export default function SpendingChart({ range }: Props) {
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

useEffect(() => {
  const fetchChartData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8080/api/v1/user/transaction-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ range }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const res = await response.json();
      const chartData: ChartResponse[] = res.data; // ✅ akses res.data

      setCategories(chartData.map((item) => item.time));
      setData(chartData.map((item) => item.total));
    } catch (error) {
      console.error("Fetch error:", error);
      setCategories([]);
      setData([]);
    }
  };

  fetchChartData();
}, [range]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#7F3DFF"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        style: {
          fontSize: "10px",
        },
      },
      tickAmount: 10,
    },
    yaxis: {
      labels: { show: false },
    },
    grid: { show: false },
  };

  const series = [
    {
      name: "Expenses",
      data,
    },
  ];

  return <Chart options={options} series={series} type="area" height={200} />;
}
