import "./App.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import Form from "./components/Form";
import Instructions from "./components/Instructions";

function App() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-screen h-screen text-gray-500"
      >
        <p className="text-3xl lg:text-4xl font-bold text-stone-950">
          @ctrpdev/cl-rut-validator
        </p>
        <div className="grid grid-cols-1 place-content-center max-h-96 border border-2 border-stone-100/80 px-10 bg-white/40 dark:bg-black/40 rounded-lg shadow-lg backdrop-blur-md border border-white/20 dark:border-black/20 py-10">
          <Form />
          <Instructions />
        </div>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Descarga la librería{" "}
            <a
              href="https://www.npmjs.com/package/@ctrpdev/cl-rut-validator"
              className="!font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquí
            </a>.
          </p>
        </footer>
      </motion.div>
    </AuroraBackground>
  );
}

export default App;
