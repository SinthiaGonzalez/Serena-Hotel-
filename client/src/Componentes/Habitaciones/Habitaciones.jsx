import {
  Select,
  Option,
  Input,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import NavBarHome from "../NavBarHome/NavBarHome";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHabitaciones } from "../../redux/actions/actions";
import CardsShopHabitaciones from "../Cards/Cards";

const Habitaciones = () => {

  const dispatch = useDispatch();
  const habitacionesShop = useSelector((state) => state.habitaciones);

  useEffect(() => {
    dispatch(getHabitaciones());
  }, [dispatch]);

  console.log("estoy en habitaciones");
  console.log(habitacionesShop);
  return (
    <>
      <NavBarHome />
      <div className="flex bg-blanco p-5 h-screen">
        <div className="bg-verde w-72 rounded-xl">
          <div className="w-72 p-2">
            <Input
              type="email"
              color="white"
              className="cursor-pointer"
              label="BUSCAR:"
            />
          </div>
          <div className="w-72 p-2">
            <Select color="orange" label="ORDENAR:">
              <Option>A-Z</Option>
              <Option>Z-A</Option>
            </Select>
          </div>

          <Card className="w-72 bg-verde rounded-xs">
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-react"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="white" className="font-medium">
                    1
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-vue"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-vue"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="white" className="font-medium">
                    2
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="white" className="font-medium">
                    3
                  </Typography>
                </label>
              </ListItem>
            </List>
          </Card>
        </div>
        <CardsShopHabitaciones habitacionesShop={habitacionesShop} />
      </div>
    </>
  );
};
export default Habitaciones;
