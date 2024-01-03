import React from "react";

const Error404 = () => {
  return (
    <div
      className="flex items-center justify-center h-screen text-white text-center"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="Error404 relative">
        <div className="flex flex-row justify-center text-naranja text-[300px] font-bold font-inter mt-14">
          <div className="hidden md:block lg:block xl:block">4</div>
          <div className="perchero relative items-center justify-center mt-20">
            <svg
              width="350"
              height="450"
              viewBox="0 0 328 709"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline"
            >
              <path
                opacity="0.936"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M184.615 0C170.838 0 157.061 0 143.284 0C80.2128 10.989 35.8955 46.0698 10.3333 105.242C7.47861 112.925 5.18332 120.772 3.44464 128.783C2.31903 133.58 2.77921 138.196 4.82236 142.631C6.43567 144.56 8.50226 145.715 11.0221 146.093C33.9846 147.016 56.9458 147.016 79.9083 146.093C83.1432 145.614 85.6685 143.998 87.4858 141.246C101.764 106.371 127.713 87.9076 165.327 85.8555C205.752 90.1225 231.699 111.817 243.169 150.939C248.783 200.654 227.887 232.733 180.482 247.181C122.838 245.585 74.8479 266.126 36.51 308.803C16.5385 333.918 4.59778 362.537 0.689178 394.658C-0.229767 497.592 -0.229767 600.527 0.689178 703.461C1.63983 706.023 3.24625 707.87 5.51123 709C111.137 709 216.762 709 322.388 709C324.653 707.87 326.259 706.023 327.21 703.461C328.571 515.098 328.112 326.77 325.832 138.477C308.801 61.118 261.728 14.9592 184.615 0ZM168.083 20.7715C98.3147 23.5432 51.4721 57.7007 27.5548 123.244C41.7688 124.858 56.0062 125.089 70.2642 123.937C99.0504 73.0454 141.76 55.0435 198.393 69.9307C251.874 94.1143 273.688 135.426 263.834 193.867C252.807 229.877 229.614 254.11 194.259 266.567C173.693 269.999 153.027 272.768 132.262 274.876C86.5723 286.188 53.7371 313.191 33.7545 355.885C28.1486 368.728 24.4742 382.115 22.7328 396.043C22.0439 493.438 21.8138 590.832 22.0439 688.229C116.648 688.229 211.251 688.229 305.855 688.229C306.527 505.403 305.838 322.614 303.788 139.861C286.016 68.2054 240.781 28.5087 168.083 20.7715Z"
                fill="white"
              />
            </svg>
            <div className="absolute text-center items-center justify-center z-[1] flex flex-col top-1/2 mt-8">
              <span className="text-blanco text-3xl font-bold font-Inter mb-4">
                Oops!
              </span>
              <span className="text-blanco text-lg font-bold font-Inter mx-24 mb-4">
                Parece que tocaste en la puerta equivocada.
              </span>
              <a
                href="/"
                className="block w-[205px] h-[36px] text-center text-naranja text-xl font-bold font-inter leading-[35px] bg-blanco hover:uppercase hover:shadow-md hover:shadow-naranja "
              >
                VOLVER AL HOTEL
              </a>
            </div>
          </div>
          <div className="hidden md:block lg:block xl:block">4</div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
