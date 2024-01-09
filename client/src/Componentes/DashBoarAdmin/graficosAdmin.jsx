import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"
const GraficosAdmin = () => {
  return (
    <div>
      <Bar
      data={{
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Ganancia",
                data: [100,200,300,400,500,600,700,800,900,1000,1100,1200]
            }
        ]
      }}
      >

      </Bar>
    </div>
  );
};
export default GraficosAdmin;