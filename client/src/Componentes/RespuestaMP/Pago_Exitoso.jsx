// import{useEffect} from 'react';
// import {getReservas_usuario,getUsuarioById} from '../../redux/Actions/actions';
// import {useDispatch,useSelector} from 'react-redux';
const PagoExitoso = () => {
//  const userId = JSON.parse(localStorage.getItem('userId'));
//  const dispatch = useDispatch();
//  const usuario = useSelector((state) => state.usuarioById);
//  const reservas_usuario = useSelector((state) => state.reservasUsuario);
//  const idMail = usuario.email
//  const ultimareserva = reservas_usuario[reservas_usuario.length-1]
  // useEffect( () => {
  //    dispatch(getReservas_usuario(userId));
  //    dispatch(getUsuarioById(userId));
  // }, []);
  // const usuario = useSelector((state) => state.usuarioById);
  // const idMail = usuario.email;

  // const reservas_usuario = useSelector((state) => state.reservasUsuario);
  // const ultimaReserva = reservas_usuario.length - 1;

  // useEffect(() => {
  //   if (reservas_usuario.length > 0 && ultimaReserva >= 0) {
  //      dispatch(
  //       envioNotificion({
  //         destinatario: idMail,
  //         asunto: `Confirmacón Reserva N° ${reservas_usuario[ultimaReserva].id_reserva}`,
  //         mensaje: `<p>Queremos informarle que la reserva <strong>N° ${reservas_usuario[ultimaReserva].id_reserva}</strong> para las fechas desde <strong>${reservas_usuario[ultimaReserva].fecha_entrada}</strong> al <strong>${reservas_usuario[ultimaReserva].fecha_salida}</strong>, ha sido confirmada.</p>
  //       <p>Para más información, contáctenos a través de nuestro correo <a href="mailto:serenahotel25@gmail.com">serenahotel25@gmail.com</a>.</p>
  //       <br/>
  //       <br/>
  //       <p>Equipo Serena Hotel.</p>`,
  //       })
  //     );
  //   } else {
  //     console.error("No hay reservas o índice de reserva inválido");
  //   }
  // }, [ultimaReserva, dispatch]);


  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex flex-col items-center lg:h-auto bg-blanco lg:w-2/3 rounded-lg px-4 pt-3 py-20">
        <a
          href="/"
          className=" font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 md:w-1/6 mt-6 pl-4 md:pl-0 mr-auto "
        >
          🡰 Volver
        </a>
        <p className="flex font-inter text-4xl antialiased leading-normal text-center font-bold text-naranja justify-center mt-6 mb-10 lg:mb-20">
          ¡Gracias por Elegir Serena Hotel!
        </p>

        <p className="flex font-inter text-xl antialiased leading-normal text-center font-bold text-gris justify-center mb-8 lg:mb-16">
          Tu pago ha sido procesado con éxito a través de Mercado Pago.
        </p>
        <a
          href="/clienteReservas"
          className="lg:w-2/4 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
        >
          Tus Reservas
        </a>
      </div>
    </div>
  );
};

export default PagoExitoso;
