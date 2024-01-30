import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getReservas_Admin } from "../../redux/Actions/actions";
import { useVerificarIsAdmin } from "../AutenticadorToken/autenticadorLocalStIsAdmin";

defaults.maintainAspectRatio=false; 
defaults.responsive=true;

defaults.plugins.title.display= true;
defaults.plugins.title.align="start";
defaults.plugins.title.size=2000;
defaults.plugins.title.color="#FB350C"
const GraficosAdmin = () => {
  useVerificarIsAdmin()
  const dispatch = useDispatch();
  const reservas = useSelector((state) => state.reservasTodasAdmin);
  const [nombresHabitaciones, setNombresHabitaciones] = useState([])
  const [preciosHabitaciones, setPreciosHabitaciones] = useState([])
  const uniqueNombres = new Set(nombresHabitaciones);
  const uniquePrecios = new Set(preciosHabitaciones);
  const colors = [];
  const handleDataGrafico = () => {
    reservas.forEach((reserva) => {
      uniqueNombres.add(reserva.nombre_habitacion);
      uniquePrecios.add(reserva.precio);
      setNombresHabitaciones([...uniqueNombres]);
      setPreciosHabitaciones([...uniquePrecios]);
    });
  }

  for (let i = 0; i < preciosHabitaciones.length; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log("color",randomColor); 
    colors.push(randomColor);
    }
  
  useEffect(() => {
    console.log("entre al useEffect");
    dispatch(getReservas_Admin())
  }, [])

  useEffect(() => {
    handleDataGrafico()
  }, [reservas])

  console.log("acaaaaaaaaaaaa", reservas)
  console.log("plis", nombresHabitaciones, preciosHabitaciones, colors)
  return (
    <div>
      {/* <div>
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
      </div> */}
      {/* <div>
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
      </div> */}
      <div>
      <Doughnut
      data={{
        labels: nombresHabitaciones,
        datasets: [
            {
                label: "Ganancias",
                data: preciosHabitaciones,
                backgroundColor: colors,
            }
        ]
      }}
      options={{
        radius: "100%",
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