import Header from "@/components/Header";
import "@/styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Mudra",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div className="bg-gradient-to-tr from-[#3E1D7D] to-[#F029CF]/40">
            <Header />
            <Component {...pageProps} />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
