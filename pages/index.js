import { Modal } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

export default function Home() {
  const [handleModal, setHandleModal] = useState(false);
  const [userType, setUserType] = useState({ type: 'none' });

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Mudra</title>
        <meta name="description" content="Mudra: DAO Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[calc(100vh-71px)] flex flex-col items-center justify-center space-y-3 text-white">
        <img src="/mudra3.png" alt="" />
        <h1 className="text-9xl">Mudra</h1>
        <p className="text-lg">
          The Only DAO / Community product you will need.
        </p>
        <button
          onClick={() => setHandleModal(true)}
          className="bg-[#6200C5] px-4 py-2 text-white rounded-lg transition active:scale-75"
        >
          Get Started
        </button>

        <Modal
          open={handleModal}
          closable={false}
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{ style: { display: 'none' } }}
          width={800}
          onOk={() => setHandleModal(false)}
          onCancel={() => setHandleModal(false)}
          style={{ backgroundColor: '#1B092C', padding: 0 }}
        >
          <div className="flex justify-between items-center bg-white/30">
            <p className="font-bold text-xl">Getting Started</p>
            <RxCrossCircled
              onClick={() => setHandleModal(false)}
              className="active:scale-75 duration-100 ease-out cursor-pointer w-7 h-7"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between space-x-5">
              <p className="text-lg font-semibold">Name:</p>
              <div className="border flex-1 border-black rounded-md">
                <input
                  className="outline-none py-1 flex-1 w-full bg-transparent px-4"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-evenly mt-20 mb-10">
              <div
                onClick={() => setUserType({ type: 'admin' })}
                className={`p-10 bg-black/20 rounded-md ${
                  userType.type === 'admin' &&
                  'border-4 shadow-2xl shadow-black border-black'
                } cursor-pointer`}
              >
                <img src={'/admin.png'} />
                <p
                  className={`px-4 my-5 ${
                    userType.type === 'admin' ? 'bg-green-600' : 'bg-blue-700'
                  } inline py-2  rounded-full  text-white text-center text-sm font-semibold`}
                >
                  Admin
                </p>
              </div>
              <div
                onClick={() => setUserType({ type: 'contributor' })}
                className={`p-10 bg-black/20 rounded-md ${
                  userType.type === 'contributor' &&
                  'border-4 shadow-2xl shadow-black border-black'
                } cursor-pointer`}
              >
                <img src={'./contributor.png'} />
                <p
                  className={`px-4 inline py-2 rounded-full  ${
                    userType.type === 'contributor'
                      ? 'bg-green-600'
                      : 'bg-blue-700'
                  } text-white text-center  text-sm font-semibold`}
                >
                  Contributor
                </p>
              </div>
            </div>
            <div
              className="flex justify-center"
              onClick={() => {
                setHandleModal(false);
                setUserType({ type: 'none' });
                router.push('/tasks');
              }}
            >
              <button className="bg-gradient-to-r from-red-500 to-red-700 active:scale-75 duration-100 ease-out font-bold px-10 text-white py-2 rounded-md">
                Done
              </button>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
