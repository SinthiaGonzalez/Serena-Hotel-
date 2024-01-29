  import { Button, IconButton } from "@material-tailwind/react";
  import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

  const Paginacion = ({ active, setActive, totalItems, itemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    

    const getItemProps = (index) => ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    });

    const next = () => {
      if (active === totalPages) return;

      setActive(active + 1);
    };

    const prev = () => {
      if (active === 1) return;

      setActive(active - 1);
    };

    return (
      <div className="flex flex-col lg:flex-row items-center justify-center my-2 gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton key={index + 1} {...getItemProps(index + 1)}>
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPages}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  export default Paginacion