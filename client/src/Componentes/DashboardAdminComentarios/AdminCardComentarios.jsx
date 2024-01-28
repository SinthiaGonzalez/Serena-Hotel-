import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const AdminCardComentarios = ({ comentario, onDelete }) => {
  const StarIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-naranja"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  const renderStars = (puntuacion) => {
    const stars = [];
    for (let i = 0; i < puntuacion; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };

  return (
    <Card className=" flex flex-col bg-gris relative mb-4">
      <div
        className="absolute inset-0 bg-negro opacity-20 rounded-lg"
        style={{ zIndex: 1 }}
      ></div>

      <CardHeader
        className="mx-2 md:mx-10 lg:mt-10 flex-col lg:flex lg:flex-row items-center"
        color="transparent"
        floated={false}
        shadow={false}
      >
        <div className="flex gap-6 lg:w-1/3 justify-center lg-justify-non">
          <Avatar
            size={window.innerWidth < 768 ? "sm" : "lg"}
            variant="circular"
            src={comentario.imagen}
            alt={comentario.nombre}
          />
          <div className="flex items-center">
            <Typography className="text-lg md:text-2xl font-medium text-blanco font-inter">
              {comentario.nombre}
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-1/3 pt-3 lg:pt-0">
          {renderStars(comentario.puntuacion)}
        </div>

        <div className="flex items-center justify-end lg:w-1/3">
          <span
            className="-mt-24 lg:mt-0 material-symbols-outlined w-10 h-16 flex items-center justify-end text-blanco opacity-40 hover:opacity-100 transition-opacity cursor-pointer z-10"
            onClick={() => onDelete(comentario.id)}
          >
            Delete
          </span>
        </div>
      </CardHeader>

      <CardBody className="mx-12 pt-2 pb-8 justify-center">
        <Typography className="text-xs md:text-base text-blanco text-center font-medium font-inter">
          &quot;{comentario.contenido}&quot;
        </Typography>
      </CardBody>

    </Card>
  );
};

export default AdminCardComentarios;
