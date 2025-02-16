import { motion } from "framer-motion";
import { Image } from "./Cards";

type ModalProps = {
  piece: Image;
  open: boolean;
  onClose: () => void;
};
export const Modal: React.FC<ModalProps> = ({ piece, open, onClose }) => {
  return (
    <div className="modal-container">
      <motion.div
        className="modal-morion-div-container flex absolute md:top-48 top-36 left-1/4 -ml-124 w-1/2 bg-white rounded-lg px-8 pt-4 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex-row gap-12 px-2 h-full w-full">
          <button
            className="cross-close-button border-2 rounded-full w-8 h-8 shadow-md font-bold place-self-end mb-4"
            onClick={onClose}
          >
            X
          </button>
          <div className="flex md:flex-row flex-col gap-4 h-full">
            <img
              className="rounded-xl items-center md:w-1/2 w-full"
              src={`../images/${piece.image}`}
            />
            <div className="flex flex-col space-between gap-12">
              <div className="artwork-details flex flex-col items-start">
                <p className="title font-bold text-xl pb-4">{piece.title}</p>
                <p className="text-md">{piece.description}</p>
              </div>
              <div className="artwork-details flex flex-col items-start text-sm">
                {piece.year && piece.exhibitions && (
                  <p>
                    {piece.year}, {piece.exhibitions}
                  </p>
                )}
                {piece.dims && <p>{piece.dims} cm</p>}
                {piece.technique && <p>{piece.technique}</p>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
