import React, { useContext, useState, useEffect } from 'react';
import AvailableTokens from '../AvailableTokens';
import { Divider, Input } from 'antd';
// import Button from "../Button";
import { readContract } from '@wagmi/core';
import { getAccount } from '@wagmi/core';

import {
  converterABI,
  converterAddress,
  mudraABI,
  mudraAddress,
  vendorAddress,
  vendorABI,
} from '@/constants';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import { ethers } from 'ethers';

const BuyTokens = () => {
  const [tokens, setTokens] = useState();

  const [wtkBal, setWTKBal] = useState(0);
  const [wtkPrice, setWTKPrice] = useState(0);

  const { address } = getAccount();
  const getBalance = async () => {
    const data = await readContract({
      address: mudraAddress,
      abi: mudraABI,
      functionName: 'balanceOf',
      args: [address],
    });
    // console.log(data.toString())
    setWTKBal((data / 10 ** 18).toFixed(2));
  };

  const getPrice = async () => {
    const data = await readContract({
      address: converterAddress,
      abi: converterABI,
      functionName: 'getLatestPrice',
      // args: [BigNumber.from(1)],
    });
    setWTKPrice(Number(data) / 10 ** 18);
  };
  useEffect(() => {
    getBalance();
    getPrice();
  }, []);

  const mint = async (value) => {
    const config = await prepareWriteContract({
      address: vendorAddress,
      abi: vendorABI,
      functionName: 'mint',
      overrides: {
        value: ethers.utils.parseEther(value.toString()),
      },
    });
    const data = await writeContract(config);
  };

  return (
    <div className="w-screen">
      <div className="w-1/3 mx-auto">
        <AvailableTokens tokens={wtkBal} />
        <Divider>ADD TOKENS</Divider>
      </div>

      <div className="w-2/3 mx-auto flex justify-evenly gap-20 items-stretch">
        <div className="p-8 border border-black rounded-md flex flex-col items-center gap-10">
          <p className="text-8xl">🚀</p>
          <p className="text-center">100 $MUD + 5 Subscribed Bounties</p>
          {/* <Button text="Buy Now (85 MATIC)" arrow={0} /> */}
        </div>
        <div className="border border-black rounded-md ">
          <p className="w-full p-1 text-center text-white border border-black bg-[#8430AB]">
            Most Popular
          </p>
          <div className="p-8 flex flex-col items-center  gap-10">
            <p className="text-8xl">🚀</p>
            <p className="text-center">200 $MUD + 7 Subscribed Bounties</p>
            {/* <Button text="Buy Now (150 MATIC)" arrow={0} /> */}
          </div>
        </div>
        <div className="p-8 border border-black rounded-md flex flex-col items-center gap-10">
          <p className="text-8xl">🚀</p>
          <p className="text-center">300 $MUD + 10 Subscribed Bounties</p>
          {/* <Button text="Buy Now (200 MATIC)" arrow={0} /> */}
        </div>
      </div>
      <div className="w-2/3 mx-auto my-10">
        <Divider>ENTER THE AMOUNT OF TOKENS</Divider>

        <div className="w-2/3 my-5 mx-auto">
          <Input
            onChange={(e) => setTokens(e.target.value)}
            value={tokens}
            type="number"
            style={{
              height: '3rem',
              border: '2px solid black',
              fontSize: '1rem',
              backgroundColor: '#CFB0FF',
              backgroundOpacity: '0.2',
            }}
          />
          <p className="text-center mt-5 font-semibold flex justify-evenly px-10 text-2xl">
            <span>{tokens || 1} $MUD</span> <span>=</span>{' '}
            <span>
              {tokens ? (tokens * wtkPrice).toFixed(3) : wtkPrice} USD
            </span>
          </p>

          <div className="w-[12rem] mx-auto my-5">
            <button
              className="bg-[#6200C5] px-4 py-2 text-white rounded-lg transition active:scale-75"
              onClick={() => mint(tokens * wtkPrice)}
            >
              Mint Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTokens;
