import { TEAM } from "@/lib/data";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <div className=" container mx-auto mt-52">
      <h3
        id={"team"}
        className="text-5xl text-center font-bold dark:text-white"
      >
        Our Team
      </h3>

      <div className="flex items-center justify-evenly mt-16  ">
        {TEAM.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            key={index}
            className="flex flex-col items-center  bg-[url('/images/wooden-team-post-icon.png')] bg-center bg-contain bg-no-repeat min-h-[380px] w-full "
          >
            <img
              src={`/images/${item.image}`}
              className=" size-24 mt-14 rounded-full bg-[url('/images/rope-border.png')] bg-contain p-2"
            />
            <h3 className=" text-lg font-bold mt-2">{item.name}</h3>
            <p
              className="font-semibold text-sm opacity-80 text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
