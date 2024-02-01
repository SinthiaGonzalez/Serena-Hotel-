import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getReservas_Admin } from "../../redux/Actions/actions";
import { useVerificarIsAdmin } from "../AutenticadorToken/autenticadorLocalStIsAdmin";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.size = 2000;
defaults.plugins.title.color = "#FB350C";
const GraficosAdmin = () => {
  useVerificarIsAdmin();
  const dispatch = useDispatch();
  const reservas = useSelector((state) => state.reservasTodasAdmin);
  const [nombresHabitaciones, setNombresHabitaciones] = useState([]);
  const [preciosHabitaciones, setPreciosHabitaciones] = useState([]);
  const colors = [];
  const cumulativePrices = {};

  const handleDataGrafico = () => {
    const newNombres = reservas.map((reserva) => reserva.nombre_habitacion);
    const newPrecios = reservas.map((reserva) => reserva.precio);
    setNombresHabitaciones(newNombres);
    setPreciosHabitaciones(newPrecios);
  };

  reservas.forEach((reserva) => {
    const { nombre_habitacion, precio } = reserva;
    cumulativePrices[nombre_habitacion] =
      (cumulativePrices[nombre_habitacion] || 0) + precio;
  });
  const namesArray = Object.keys(cumulativePrices);
  const pricesArray = Object.values(cumulativePrices);

  for (let i = 0; i < preciosHabitaciones.length; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log("color", randomColor);
    colors.push(randomColor);
  }

  useEffect(() => {
    console.log("entre al useEffect");
    dispatch(getReservas_Admin());
  }, []);

  useEffect(() => {
    handleDataGrafico();
  }, [reservas]);

  console.log("acaaaaaaaaaaaa", namesArray, pricesArray);
  console.log(
    "plis",
    nombresHabitaciones,
    preciosHabitaciones,
    colors,
    cumulativePrices
  );
  return (
    <div>
      <div className="items-center justify-center bg-cover bg-center text-white text-center p-8 xl:mx-28 ">
        <div className="flex-col items-center justify-center">
          <div className="bg-verde p-20 rounded-md">
            <h2 className="text-center text-3xl font-bold">Ganancias</h2>
            <div className="!w-full h-[30rem]">
              <Doughnut
                className="!w-full h-[30rem] mb-2 text-white"
                data={{
                  labels: namesArray,
                  datasets: [
                    {
                      label: "Ganancias",
                      data: pricesArray,
                      backgroundColor: colors,
                    },
                  ],
                }}
                options={{
                  radius: "100%",
                  plugins: {
                    title: {
                      // text: "|GANANCIAS",
                      font: {
                        size: 10,
                        weight: "bold",
                        color: "white",
                      },
                      padding: 20,
                    },
                  },
                }}
              ></Doughnut>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GraficosAdmin;
