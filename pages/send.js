import { Input } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SendNft = () => {
  const router = useRouter();
  return (
    <div className="w-screen min-h-screen">
      <h1 className="text-center mt-5 text-white text-4xl font-bold">
        Send NFT
      </h1>
      <div className="w-2/3 flex mx-auto m-10 rounded-lg border border-black p-10 bg-white">
        <div className="flex w-1/2 flex-col items-center justify-center space-y-5">
          <img src={require("../images/eth-person.png")} alt="" />
          <div className="space-y-3">
            <div className="border-4 border-[#D1B0FC] rounded-md w-64 h-64 p-3">
              <h2 className="font-bold">Preview NFT</h2>
              <div className="p-3"></div>
            </div>
            <p className="text-center">Running Low on Tokens ?</p>
            <div className="w-[15rem] mx-auto">
              <button
                className="bg-[#6200C5] px-4 py-2 text-white rounded-lg transition active:scale-75 "
                onClick={() => router.push("/tasks?tab=2")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-1">
            <p className="text-xl">From Address</p>
            <Input
              style={{
                width: "25rem",
                border: "2px solid #D1B0FC",
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl">To Address</p>
            <Input
              style={{
                width: "25rem",
                border: "2px solid #D1B0FC",
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl">Expected Gas Fee</p>
            <Input
              value={0}
              style={{
                width: "25rem",
                border: "2px solid #D1B0FC",
              }}
            />
          </div>
          <div className="space-y-1">
            <button className="bg-[#350368] px-4 py-2 text-white font-bold rounded-lg transition active:scale-75 ">
              Send NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNft;
