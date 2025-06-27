import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface Props {
  range: "today" | "week" | "month" | "year";
}

const getChartDataByRange = (range: Props["range"]) => {
  switch (range) {
    case "today":
      return {
        categories: ["Pagi", "Siang", "Sore", "Malam"],
        data: [200, 350, 150, 300],
      };
    case "week":
      return {
        categories: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
        data: [500, 700, 400, 900, 300, 600, 450],
      };
  case "month":
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-11

  const totalDays = new Date(year, month + 1, 0).getDate();

  return {
    categories: Array.from({ length: totalDays }, (_, i) => `${i + 1}`), // ["1", "2", ..., "30"]
    data: Array.from({ length: totalDays }, () => Math.floor(Math.random() * 1000)),
  };
    case "year":
      return {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
          "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
        ],
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 3000)),
      };
    default:
      return { categories: [], data: [] };
  }
};

export default function SpendingChart({ range }: Props) {
  const { categories, data } = getChartDataByRange(range);

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
    rotate: -45, // miringkan agar tidak tabrakan
    style: {
      fontSize: "10px",
    },
  },
  tickAmount: 10, // jumlah label yang ditampilkan secara merata
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
