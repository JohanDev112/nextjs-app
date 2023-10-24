import Container from "./Container";
import { motion } from "framer-motion";

interface Props {
  title: string;
}
const BannerText = ({ title }: Props) => {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-black"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-slate-950"
        >
          ¡Transforma tu hogar con los productos de primera calidad <br /> que tenemos
          para ti! Descubre una amplia gama de <br />marcas y estrena tu espacio con estilo.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2"
        >
          <button value={'Ve más'} className="text-black hover:text-white py-3 px-6 rounded-full bg-white hover:bg-black duration-200 text-sm uppercase font-semibold">Ve más</button>
          <button className="text-black hover:text-white py-3 px-6 rounded-full bg-white hover:bg-black duration-200 text-sm uppercase font-semibold">Compra ahora</button>
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
