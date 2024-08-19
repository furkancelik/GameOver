// components/HowItWorks.js
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className="container mx-auto mt-24 dark:text-white">
      <h3 id={"how-it-works"} className="text-5xl text-center font-bold">
        How It Works
      </h3>
      <p className="mt-5 w-1/2 mx-auto text-center text-sm opacity-80">
        Gmover is a fun gaming platform where you earn GMOVER tokens with NFTs.
        Start with free NFTs, increase your earnings and grow your collection.
      </p>

      <div className="mx-auto flex mt-8 w-full justify-center items-center">
        <div className="w-1/3">
          <motion.img
            src="/images/farmer.png"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          />
        </div>
        <div className="w-1/2 p-5 px-14">
          <h3 className="text-3xl font-semibold">
            Get your Farmer and
            <br />
            Shovel NFTs for Free
          </h3>
          <p className="mt-5">
            Welcome to Gmover! As our first gift to start your journey, we offer
            you a Farmer NFT and a Shovel NFT. These two NFTs are your first
            step in your farming career. The Farmer is the most basic tool to
            work the land and the Shovel is the most basic tool to provide you
            with daily earnings.
          </p>
          <p className="mt-5">
            Add these NFTs to your wallet to start working in your fields and
            take your first step towards earning GMOVER tokens.
          </p>
        </div>
      </div>

      <div className="mx-auto flex mt-10 w-full justify-center items-center">
        <div className="w-1/2 p-5 px-14">
          <h3 className="text-3xl font-semibold">
            Earn GMOVER Daily with Shovel NFT
          </h3>
          <p className="mt-5">
            Start earning 0.1 GMOVER regularly every day with your first Shovel
            NFT. These earnings will help you take your first steps on your farm
            and invest in other NFTs in the game. As you accumulate GMOVER
            tokens with Shovel, you will also be preparing for bigger earning
            opportunities.
          </p>
        </div>
        <div className="w-1/3">
          <motion.img
            src="/images/8828d0126026071.61252d543f5d7.png"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          />
        </div>
      </div>

      <div className="mx-auto flex mt-10 w-full justify-center items-center">
        <div className="w-1/3">
          <motion.img
            src="/images/tractor.png"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          />
        </div>
        <div className="w-1/2 p-5 px-14">
          <h3 className="text-3xl font-semibold">
            Invest and Increase Your Earnings
          </h3>
          <p className="mt-5">
            As you accumulate your GMOVER tokens, it's time to expand your farm.
            With your GMOVERs in hand, you can invest in more efficient
            vehicles. For example, you can buy a Wheelbarrow NFT and increase
            your earnings to 5 GMOVER per day, or invest in a Tractor NFT and
            earn 15 GMOVER per day. These investments will increase your
            productivity on the farm and your earnings will skyrocket.
          </p>
        </div>
      </div>
    </div>
  );
}
