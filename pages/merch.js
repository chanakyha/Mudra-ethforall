import HeaderTabs from '@/components/merch/HeaderTabs';
import React, { useEffect, useState } from 'react';
import { dummyMerch as data } from '@/dummyMerch';
import Image from 'next/image';

const Merch = () => {
  const [activeTabs, setActiveTabs] = useState(1);

  var dummyMerch = [];

  if (activeTabs === 1) {
    dummyMerch = data.filter((item) => item.category[0] === 'Merch');
  }

  if (activeTabs === 2) {
    dummyMerch = data.filter((item) => item.category[0] === 'Accessories');
  }

  if (activeTabs === 3) {
    dummyMerch = data.filter((item) => item.category[0] === 'NFT Tickets');
  }

  return (
    <div className="min-h-screen w-screen">
      <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />

      <div className="flex justify-center items-center space-x-2 flex-wrap p-5 gap-10">
        {dummyMerch?.map((item, key) => {
          return (
            <div className="bg-[#EAD4F4] p-5 rounded-sm">
              <img
                className="object-cover object-center h-72 border border-black"
                src={item.image}
              />
              <div className="flex justify-center">
                <p className="bg-yellow-500 border-2 border-black inline px-4 py-2 rounded-md font-bold relative -top-5">
                  {item.price} $MUN
                </p>
              </div>
              <p className="text-center font-bold text-xl">"{item.name}"</p>
              <p className="text-center mt-4 text-xs text-[#8430AB]">
                {item.category[0]} • {item.category[1]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Merch;
