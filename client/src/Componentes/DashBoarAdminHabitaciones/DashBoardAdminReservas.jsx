import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
const DashBoardAdminReservas = () => {
  useVerificarToken();
  return (
    <>
      <NavBarAdmin />

      <div className="h-[120vh] flex flex-col items-center pt-5">
        <div className="border-2 border-verde h-[20%] w-[55%] rounded-3xl flex p-5 m-5">
          <div className="flex-1 border-r-2 border-verde flex items-center justify-center">
            <div className="mr-4 text-verde">Icono</div>

            <div>
              <p className="text-verde ">Total Habitaciones</p>
              <p className="text-verde font-extrabold  text-4xl">70</p>
            </div>
          </div>

          <div className="flex-1 border-r-2 border-verde flex items-center justify-center">
            <div className="mr-4 text-verde">Icono</div>

            <div>
              <p className="text-verde  ">Ocupados</p>
              <p className="text-verde font-extrabold  text-4xl">40</p>
            </div>
          </div>
          <div className="flex-1  flex items-center justify-center">
            <div className="mr-4 text-verde">Icono</div>

            <div>
              <p className="text-verde ">Libres</p>
              <p className="text-verde font-extrabold  text-4xl">30</p>
            </div>
          </div>
        </div>

        <div className="bg-verde p-4 rounded-md w-[95%]">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white p-2 rounded-md mr-4"
              />

              <select className="bg-white p-2 rounded-md mr-3">
                <option value="filtro1">Filtro 1</option>
                <option value="filtro2">Filtro 2</option>
                <option value="filtro3">Filtro 3</option>
              </select>
              <select className="bg-white p-2 rounded-md">
                <option value="filtro1">Filtro 1</option>
                <option value="filtro2">Filtro 2</option>
                <option value="filtro3">Filtro 3</option>
              </select>
            </div>
          </div>

          <div>
            <div className="p-0 rounded-md shadow-md mb-4 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                  <tr>
                    <th className="py-2 px-2 text-left ">N. de Reserva</th>
                    <th className="py-2 px-2 text-left">ID</th>
                    <th className="py-2 px-2 text-left">Nombre y apellido</th>
                    <th className="py-2 px-2 text-left">Correo</th>
                    <th className="py-2 px-2 text-left">Telefono</th>
                    <th className="py-2 px-2 text-left">Check-in</th>
                    <th className="py-2 px-2 text-left">Check-out</th>
                    <th className="py-2 px-2 text-left">Habitacion</th>
                    <th className="py-2 px-2 text-left">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-2 text-left">123456</td>
                    <td className="py-4 px-2 text-left">5141841</td>
                    <td className="py-4 px-2 text-left">
                      Emilio Orlando fernandez
                    </td>
                    <td className="py-4 px-2 text-left">
                      Emilio-Orlando@gmail.com
                    </td>
                    <td className="py-4 px-2 text-left">0810-888-444</td>
                    <td className="py-4 px-2 text-left">10-01-24</td>
                    <td className="py-4 px-2 text-left">10-02-2024</td>
                    <td className="py-4 px-2 text-left">
                      Suit Ejecutiva del Bosque
                    </td>
                    <td className="py-4 px-2 text-left">
                      <div className="bg-green-800 text-white py-2 px-4 rounded border border-green-500 text-center">
                        Reservada
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardAdminReservas;
