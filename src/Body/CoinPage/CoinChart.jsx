import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import ModalChart from "../ModalChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function CoinChart({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#1B2A41",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {" "}
      {/* Текущий фон */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* Сетка с линиями */}
          <CartesianGrid stroke="#3A506B" strokeDasharray="3 3" />

          {/* Оси с яркими цветами */}
          <XAxis dataKey="timestamp" stroke="#A6E3E9" />
          <YAxis dataKey="price" stroke="#A6E3E9" />

          {/* Настройка тултипа */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#172A3A",
              borderColor: "#444",
              color: "#fff",
            }}
            itemStyle={{ color: "#FFD700" }}
          />

          {/* Яркая линия и немного более насыщенная заливка под кривой */}
          <Area
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            fillOpacity={0.3}
            fill="rgba(255, 215, 0, 0.3)" /* Более яркая заливка */
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CoinChart;
