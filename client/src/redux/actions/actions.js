import axios from "axios";
export const getHabitaciones = async () => {
  console.log("entra");
  try {
    const data = await axios.get("/habitaciones");
    console.log(data);
    return {
      type: "GET_HABITACIONES",
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};
