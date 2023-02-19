import { Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
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

import AvailableTokens from '../AvailableTokens';

const SetupTasks = ({ setActiveTabs }) => {
  const [wtkBal, setWTKBal] = useState(0);
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

  useEffect(() => {
    getBalance();
    // getPrice();
  }, []);
  return (
    <div className="w-screen">
      <div className="w-2/3 flex mx-auto m-10 rounded-lg border border-black p-10 bg-white">
        <div className="flex w-1/2 flex-col items-center justify-center space-y-5">
          <img src={require('../../images/eth-person.png')} alt="" />
          <div className="space-y-3">
            <AvailableTokens tokens={wtkBal} />
            <p className="text-center">Running Low on Tokens ?</p>
            <div className="w-[15rem] mx-auto">
              {/* <Button
                text="Buy Now"
                arrow={0}
                onClick={() => setActiveTabs(2)}
              /> */}
              <button
                className="bg-[#6200C5] px-4 py-2 text-white rounded-lg transition active:scale-75 "
                onClick={() => setActiveTabs(2)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-1">
            <p className="text-xl">Enter Task Name</p>
            <Input
              style={{
                width: '25rem',
                border: '2px solid #D1B0FC',
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl">Task Description</p>
            <textarea
              className="rounded-lg p-3"
              style={{
                resize: 'none',
                outline: 'none',
                width: '25rem',
                height: '8rem',
                border: '2px solid #D1B0FC',
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl">Bounty Offered</p>
            <Input
              style={{
                width: '25rem',
                border: '2px solid #D1B0FC',
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-5 m-5 text-center">
        <p>
          You have <span className="text-gray-400">0</span> Posts Available
        </p>
        <div className="w-[15rem] mx-auto">
          {/* <Button text="Activate Task" /> */}
        </div>
      </div>
    </div>
  );
};

export default SetupTasks;
