import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const CardComent = ({ comentario, onDelete }) => {
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
    <Card
      className="max-w-[500px] h-[250px] bg-cover bg-center relative mb-12 mx-2 md:mx-16 lg:mx-4 xl:mx-2  "
      style={{
        backgroundImage:
          'url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1")',
      }}
    >
      <div
        className="absolute inset-0 bg-negro opacity-20 rounded-lg"
        style={{ zIndex: 1 }}
      ></div>
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-10 flex items-center gap-4 pt-0 pb-4"
      >
        <Avatar
          size={window.innerWidth < 768 ? "sm" : "lg"}
          variant="circular"
          src={comentario.imagen}
          alt={comentario.nombre}
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography className="text-lg md:text-2xl font-medium text-gris font-inter">
             {comentario.nombre}
            </Typography>
            <div className="flex items-center gap-0">
              {renderStars(comentario.puntuacion)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-6 mx-10 p-0">
        <Typography className="text-xs md:text-base text-blanco font-medium font-inter">
          &quot;{comentario.contenido}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardComent;
