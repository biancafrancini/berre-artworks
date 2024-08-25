import { motion } from "framer-motion";

type ModalProps = {
    piece: string;
    open: boolean;
    onClose: () => void;
}
export const Modal: React.FC<ModalProps> = ({ piece, open, onClose}) => {

  return (
    <div>
      <motion.div
        className="flex flex-col justify-center items-center absolute top-1/4 left-1/4 right-1/2 h-screen w-1/2 bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex gap-10">
        <h2>Hello!!</h2>
        <button className="font-bold text-green-700" onClick={onClose}>X</button>
        </div>
        <img className="w-72 h-72 rounded-xl items-center" src={`../images/${piece}`} />
      </motion.div>
    </div>
  );
};
