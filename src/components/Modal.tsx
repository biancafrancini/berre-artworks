import { motion } from "framer-motion";

type ModalProps = {
  piece: string;
  open: boolean;
  onClose: () => void;
};
export const Modal: React.FC<ModalProps> = ({ piece, open, onClose }) => {
  return (
    <div>
      <motion.div
        className="flex absolute top-96 left-1/4 -ml-124 w-1/2 bg-white rounded-lg px-8 pt-4 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex-row gap-12 px-2 h-full w-full">
          <button className="font-bold text-green-700 place-self-end pb-4" onClick={onClose}>
            X
          </button>
          <div className="flex w-1/2 gap-4 h-full">
            <img
              className="rounded-xl items-center"
              src={`../images/${piece}`}
            />
            <div className="flex">
              <h2>Title</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
