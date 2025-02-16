import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "./Modal";

export interface Image {
  id: number;
  title: string;
  year: string;
  dims: string;
  technique: string;
  description: string;
  exhibitions: string[];
  image: string;
}
type CardsProps = {
  images: Image[];
};

export const Cards: React.FC<CardsProps> = ({ images }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [pic, setPic] = useState({
    id: 0,
    title: "",
    year: "",
    dims: "",
    technique: "",
    description: "",
    exhibitions: [] as string[], // explicitly specify the type as string[]
    image: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="cards-container flex md:w-74 w-full flex-wrap gap-2 justify-center">
        {images?.map((image: Image, index: number) => (
          <div className="card flex" key={index}>
            <motion.button
              whileHover={{ scale: 0.9, opacity: 0.9 }}
              className="rounded-full"
              onClick={() => {
                setPic({
                  id: image.id,
                  title: image.title,
                  year: image.year,
                  dims: image.dims,
                  technique: image.technique,
                  description: image.description,
                  exhibitions: image.exhibitions,
                  image: image.image,
                });
                setOpen(true);
              }}
            >
              <div className="card-image flex justify-center">
                  <img
                    className="rounded-xl px-2"
                    src={`../images/${image.image}`}
                  />
              </div>
            </motion.button>
          </div>
        ))}{" "}
      </div>
      {open && (
        <div className="overlay" onClick={handleClose}>
          <Modal piece={pic} open={open} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};
