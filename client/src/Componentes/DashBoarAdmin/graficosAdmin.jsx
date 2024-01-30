import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import { useDispatch, useSelector } from "react-redux"

defaults.maintainAspectRatio=false; 
defaults.responsive=true;

defaults.plugins.title.display= true;
defaults.plugins.title.align="start";
defaults.plugins.title.size=20;
defaults.plugins.title.color="#FB350C"
const GraficosAdmin = () => {

const reservas = useSelector((state) => state.reservasTodasAdmin);
  return (
    <div>
      <div>
      <Bar
      data={{
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Ganancias",
                data: [100,200,300,400,500,600,700,800,900,1000,1100,1200],
                backgroundColor: [
                  "#FB350C",
                ]
            }
        ]
        
      }}
      options={{
        plugins: {
          title:{
            text: "Ganancias",
          }
        }
      }}
      >
      </Bar>
      </div>
      <div>
      <Line
      data={{
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Ganancias",
                data: [100,200,300,400,500,600,700,800,900,1000,1100,1200],
                backgroundColor: [
                  "#FB350C",
                ]
            }
        ]
      }}
      options={{
        plugins: {
          title:{
            text: "Ganancias",
          }
        }
      }}
      >
      </Line>
      </div>
      <div>
      <Doughnut
      data={{
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Ganancias",
                data: [100,200,300,400,500,600,700,800,900,1000,1100,1200]
            }
        ]
      }}
      options={{
        plugins: {
          title:{
            text: "Ganancias",
          }
        }
      }}
      >
      </Doughnut>
      </div>
    </div>
  );
};
export default GraficosAdmin;