import { Checkbox, Card, List, ListItem, ListItemPrefix, Typography,} from "@material-tailwind/react";
import {useDispatch} from "react-redux";
import {fiteryOrder} from "../../redux/Actions/actions.js";
const data = [
    { id: 'personas1', label: 'pers1', string: "cantidad de personas 1", value: "1"  },
    { id: 'personas2', label: 'pers2', string: "cantidad de personas 2", value: "2"},
    { id: 'personas3', label: 'pers3', string: "cantidad de personas 3", value: "3"},
    { id: 'personas4', label: 'pers4', string: "cantidad de personas 4", value: "4"},
    { id: 'ejecutva5', label: 'ejecu5', string: "Ejecutiva" },
    { id: 'Delux6', label: 'delu6', string: "Delux" },
    { id: 'presidencial7', label: 'presidenci7', string: "Suite Presidencial" },
 ];

const Filtrocheckbox = () => {
  const dispatch = useDispatch();
  const handleCheckboxChange = (itemId, itemValue, event) => {
    const isChecked = event.target.checked;
    dispatch(fiteryOrder({ id: itemId, value: itemValue, isChecked }));
  };
  
  return (
    <Card className="bg-verde rounded-xs w-full p-4">
      <List>
        {data.map((item) => (
          <ListItem key={item.id} className="p-0">
            <label
              htmlFor={item.id}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={item.id}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  value={item.value}
                  onChange={(event) => handleCheckboxChange(item.id, item.value, event)}
                />
              </ListItemPrefix>
              <Typography color="white" className="font-medium">
                {item.string}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Filtrocheckbox;