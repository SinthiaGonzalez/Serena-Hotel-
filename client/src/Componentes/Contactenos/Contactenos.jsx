import { useState } from "react";
import { useDispatch } from "react-redux";
import { enviarConsulta } from "../../redux/Actions/actions";
import validation from "./validations";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import NavBarHome from "../NavBarHome/NavBarHome";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import Swal from "sweetalert2";

const Contactenos = () => {
  const dispatch = useDispatch();

  const [infoFormulario, setInfoFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (e) => {
    setInfoFormulario({ ...infoFormulario, [e.target.name]: e.target.value });
    setErrors(
      validation({ ...infoFormulario, [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(enviarConsulta(infoFormulario));
      resetTouchedFields();
    } else {
      Swal.fire("Error de validacion", "", "error");
    }
  };

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });

    // Actualiza habitacionData con el campo específico que se ha tocado
    setInfoFormulario({
      ...infoFormulario,
      [fieldName]: infoFormulario[fieldName],
    });

    // Vuelve a validar con la actualización de habitacionData
    setErrors(validation(infoFormulario));
  };

  const resetTouchedFields = () => {
    const resetFields = {};
    Object.keys(touchedFields).forEach((fieldName) => {
      resetFields[fieldName] = "";
    });
    setInfoFormulario({
      ...infoFormulario,
      ...resetFields,
    });
  };

  const isSubmitDisabled = () => {
    // Verifica si hay algún campo obligatorio sin completar

    if (Object.keys(errors).length === 0) return false;
    else return true;
  };

  return (
    <div className="bg-verde">
      <ScrollToTop />
      <NavBarHome />
      <div className="my-10 ml-4 bg-verde">
        <div className="flex flex-col lg:flex-row items-center ml-6 mr-8">
          <div className="w-full lg:w-1/2 mt-8 mb-8 lg:mb-0 lg:mr-4">
            <div className="h-30 border-l-4 border-blanco text-left p-4 mb-10">
              <span className="text-3xl font-inter font-medium block text-blanco">
                Contáctenos
              </span>
            </div>

            <div>
              <p className="font-inter mb-6 ml-4 text-blanco">
                Gracias por tu interés en el Hotel Serena. Si tienes alguna
                pregunta o deseas obtener información sobre nuestras
                instalaciones forestales, estaremos encantados de ayudarte.
                Nuestro dedicado equipo está aquí para asistirte con cualquier
                información que puedas necesitar para planificar tu encantadora
                estadía en medio de la naturaleza.
              </p>

              <Card
                color="transparent"
                shadow={false}
                className="ml-6 md:ml-20 mb-20"
              >
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
                >
                  <div className="mb-1 flex flex-col gap-2">
                    <a className="font-inter font-medium text-blanco">
                      Nombre:
                    </a>
                    <Input
                      type="text"
                      name="nombre"
                      size="lg"
                      color="white"
                      placeholder="Nombre"
                      value={infoFormulario.nombre}
                      onChange={handleChange}
                      onBlur={() => handleBlur("nombre")}
                      className="font-inter text-blanco border-t-blanco focus:border-t-blanco"
                      labelProps={{
                        className:
                          "before:content-none after:content-none font-inter text-blanco",
                      }}
                    />
                    <p className="my-4 text-base text-center text-naranja">
                      {touchedFields.nombre && errors.nombre}
                    </p>

                    <a className="font-inter font-medium text-blanco">
                      Correo:
                    </a>
                    <Input
                      type="text"
                      name="correo"
                      size="lg"
                      color="white"
                      placeholder="Correo"
                      value={infoFormulario.correo}
                      onChange={handleChange}
                      onBlur={() => handleBlur("correo")}
                      className="border-t-blanco focus:border-t-blanco"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <p className="my-4 text-base text-center text-naranja">
                      {touchedFields.correo && errors.correo}
                    </p>

                    <a className="font-inter font-medium text-blanco">
                      Teléfono:
                    </a>
                    <Input
                      type="tel"
                      name="telefono"
                      size="lg"
                      color="white"
                      placeholder="Teléfono"
                      value={infoFormulario.telefono}
                      onChange={handleChange}
                      onBlur={() => handleBlur("telefono")}
                      className="border-t-blanco focus:border-t-blanco"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <p className="my-4 text-base text-center text-naranja">
                      {touchedFields.telefono && errors.telefono}
                    </p>

                    <a className="font-inter font-medium text-blanco">
                      Mensaje:
                    </a>

                    <Textarea
                      type="text"
                      name="mensaje"
                      color="orange"
                      placeholder="Mensaje"
                      value={infoFormulario.mensaje}
                      onChange={handleChange}
                      onBlur={() => handleBlur("mensaje")}
                      className="border-t-blanco focus:border-t-blanco"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      style={{ color: "white" }}
                    />
                    <p className="my-4 text-base text-center text-naranja">
                      {touchedFields.mensaje && errors.mensaje}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="mt-6 bg-naranja"
                    fullWidth
                    disabled={isSubmitDisabled()}
                  >
                    Contáctenos
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              className="hidden lg:block w-auto h-85 rounded-lg lg:mt-0 lg:ml-auto lg:w-2/3"
              src="https://i.postimg.cc/pryXnDhw/732068464-1.png"
              alt="Hotel Serene"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactenos;
