import {
  useSuiWallet,
  SuiConnectModal,
  useSuiAccountBalance,
  addressEllipsis,
  SuiConnectButton,
  AptosConnectButton,
} from "@razorlabs/wallet-kit";
import { useState } from "react";
import Modal from "./Modal";

export default function ConnectWallet({ children }) {
  const {
    connected,
    disconnect,
    account,
    select, // select
    configuredWallets, // default wallets
    detectedWallets, // Movement-standard wallets detected from browser env
    allAvailableWallets, // all the installed Movement-standard wallets
  } = useSuiWallet();
  const { balance } = useSuiAccountBalance();

  const [showModal, setShowModal] = useState(false);

  if (connected) {
    if (children) {
      return children;
    }
    return (
      <>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="bg-primary-500 hover:bg-primary-600 hover:text-white px-5 py-3 rounded-md text-sm cursor-pointer "
        >
          {addressEllipsis(account.address)}
        </button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Wallet Settings"
        >
          <div className="py-4 mt-5">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex w-[64px] h-[64px] bg-yellow-400 items-center justify-center rounded-full text-4xl">
                🤑
              </div>
              <div className="text-lg font-semibold">
                {addressEllipsis(account.address)}
              </div>
              <span>
                {(parseFloat(balance || 0) / 1000000000).toFixed(3)} MOVE
              </span>
            </div>
          </div>
          <hr className="my-3" />

          <button
            onClick={async () => {
              await disconnect();
              setShowModal(false);
            }}
            className={
              " rounded-md text-red-600 flex bg-gray-100 w-full font-semibold justify-center p-3 hover:bg-red-200"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            Disconnect Connection
          </button>
        </Modal>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-primary-500 hover:bg-primary-600 hover:text-white px-5 py-3 rounded-md text-sm cursor-pointer "
      >
        Connect Wallet
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Connect Wallet"
      >
        <ul className="space-y-3 my-5 mt-8">
          {[...configuredWallets, ...detectedWallets].map((wallet) => (
            <li
              className="flex items-center "
              key={wallet.name}
              onClick={() => {
                // check if user installed the wallet
                if (!wallet.installed) {
                  // do something like guiding users to install
                  return;
                }
                select(wallet.name);
                setShowModal(false);
              }}
            >
              <img
                src={wallet.iconUrl}
                className=" size-[32px] rounded-full mr-3"
              />{" "}
              {wallet.name}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}

// export default function ConnectWallet() {
//   const { connected, connecting, account } = useSuiWallet();
//   // const { error, loading, balance } = useSuiAccountBalance();
//   const [showModal, setShowModal] = useState(false);

//   if (connected) {
//     return (
//       <>
//         <button
//           onClick={() => {
//             // disconnect();
//           }}
//           className="bg-primary-500 hover:bg-primary-600 hover:text-white px-5 py-3 rounded-md text-sm cursor-pointer "
//         >
//           {loading && balance}
//           {addressEllipsis(account.address)}
//         </button>
//       </>
//     );
//   }

//   return (
//     <SuiConnectModal
//       open={showModal}
//       onOpenChange={(open) => setShowModal(open)}
//       onConnectSuccess={() => setShowModal(false)}
//     >
//       <button
//         onClick={() => setShowModal(true)}
//         className="bg-primary-500 hover:bg-primary-600 hover:text-white px-5 py-3 rounded-md text-sm cursor-pointer "
//       >
//         Connect WalletX
//       </button>
//     </SuiConnectModal>
//   );
// }
