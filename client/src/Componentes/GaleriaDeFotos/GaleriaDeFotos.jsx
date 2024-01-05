const GaleriaDeFotos = () => {
  const data = [
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283384658.jpg?k=2aeaf188b3885dc56bd2e2f663bc480961545e397af4ef10e68513f0713ef775&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283386255.jpg?k=eb27a7e8573da8ef768322217f1b42b6c5be3a2b798d7fe7ed1562f8856e3e99&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283386242.jpg?k=4fba1a260c2560d019a8ddd5c3d14574580e3723e95d09cdc41b6f518b9152b2&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283383052.jpg?k=521e491ee78b3913f2c552db2596eb747a7fd5f7cc852331ba44ff443bbc2e01&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283386290.jpg?k=076307a954ed5cd9c8f0d24e5154c55196280953b5b37f1aae76d6a1008e3891&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283383307.jpg?k=12c5e34a3700c80fbb452a6113f34f6dfa5659d66a1c73cc3fbf479f208ccd50&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283386297.jpg?k=9ae9ef7f483cfbaed5aca3c30b531bfd49a921b1a46659ad9a2a2028a854588c&o=&hp=1",
    },
    {
      imageLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
    },
  ];

  return (
    <div className="mt-4 mb-8 ml-4">
      <div className="flex items-center mb-8 ml-6">
        <div className="h-30 border-l-4 border-negro">
          <span className="text-3xl font-inter font-medium block mb-2 ml-4 text-negro">GALERIA DE</span>
          <span className="text-3xl font-inter font-medium ml-4 text-negro">FOTOS</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-4 mr-8">
        {data.map(({ imageLink }, index) => (
          <div
            key={index}
            className="mb-0 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaDeFotos;
