"use client";
import { useState } from "react";
import { gql } from "graphql-tag";

import { LINK, COMPANY_LINK } from "@/lib/data";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { toast } from "react-toastify";

const ADD_SUBSCRIBER = gql`
  mutation AddSubscriber($input: SubscribersInput!) {
    addSubscribers(input: $input) {
      id
      email
    }
  }
`;

export default function Footer() {
  const [email, setEmail] = useState("");

  const [addSubscriber, { data, loading, error: mutationError }] =
    useMutation(ADD_SUBSCRIBER);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await addSubscriber({
        variables: {
          input: { email },
        },
      });
      setEmail(""); // Clear the input field after successful submission
      toast.success("Subscription successful!");
    } catch (err) {
      console.log("err:", err);
      toast.error("Failed to add subscriber.");
    }
  };

  return (
    <footer className=" bg-[#16140d]  p-16 text-white ">
      <div className="container mx-auto flex flex-row gap-24  ">
        <div className="w-1/4">
          <img src="/images/logo-light.svg" className="w-32 h-auto mb-4" />
          <p className="p-0 text-sm opacity-60">
            Start with free Farmer and Shovel NFTs in Gmover, earning daily
            GMOVER tokens. Invest in Wheelbarrow and Tractor NFTs to boost your
            earnings
          </p>
        </div>
        <div className="flex-1 flex gap-14  justify-center">
          <div>
            <h3 className="text-xl font-bold mb-3">Resoureces</h3>
            <ul className=" space-y-1">
              {LINK.map(({ href, title, ...props }, index) => (
                <li key={index}>
                  <a
                    className=" cursor-pointer opacity-70 hover:opacity-100"
                    href={href}
                    {...props}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Company</h3>

            <ul className=" space-y-1">
              {COMPANY_LINK.map(({ href, title, ...props }, index) => (
                <li key={index}>
                  <Link
                    className=" cursor-pointer opacity-70 hover:opacity-100"
                    href={href}
                    {...props}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  flex-col items-end justify-between">
          <h3>Sucribe To Our Newsletter.</h3>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-row border border-white border-opacity-30 rounded-md overflow-hidden mt-2 mb-5">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 bg-transparent text-white text-opacity-80 placeholder-opacity-60 placeholder-white outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-primary-500 px-5 text-sm text-gray-950"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>

          <ul className=" flex gap-8 mt-4">
            <li>
              <Link target="_blank" href={"https://t.me/Gmoverxyz"}>
                <img
                  src="/images/send-plane-fill-light.svg"
                  className=" size-8 opacity-70 hover:opacity-100 "
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={"https://x.com/Gmover_xyz"}>
                <img
                  src="/images/twitter-x-line-light.svg"
                  className=" size-8 opacity-70 hover:opacity-100"
                />
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toast.warn(() => (
                    <div>
                      <span className=" font-semibold">Not now!</span>
                      <br /> Being OG is not that easy!
                    </div>
                  ));
                }}
                className="!text-red-600"
              >
                <img
                  src="/images/discord-fill-light.svg"
                  className=" size-8 opacity-70 hover:opacity-100"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
