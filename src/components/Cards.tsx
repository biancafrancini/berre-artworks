import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "./Modal";

type CardsProps = {
  images: string[];
};

export const Cards: React.FC<CardsProps> = ({ images }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [pic, setPic] = useState({
    picture: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="cards-container flex w-76 flex-wrap gap-2 mx-24 justify-center ">
        {images?.map((image: string, index: number) => (
          <div className="card flex" key={index + image[index]}>
            <motion.button
              whileHover={{ scale: 0.9, opacity: 0.9 }}
              className="rounded-full"
              onClick={() => {
                setPic({ picture: image });
                setOpen(true);
              }}
            >
              <div className="card-image flex">
                <img className="rounded-xl" src={`../images/${image}`} />
              </div>
            </motion.button>
          </div>
        ))}{" "}
      </div>
      {open && (
        <Modal piece={pic.picture} open={open} onClose={handleClose} />
      )}
    </div>
  );
};
