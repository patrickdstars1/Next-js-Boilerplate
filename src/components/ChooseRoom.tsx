
"use·client";
import React, { useRef } from 'react';
import Pageslot from './Pageslot';

const ChooseRoom: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="py-8 mx-auto ">
      <div className="container px-2">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              className="text-gray-500 text-2xl focus:outline-none bg-white rounded-full p-2 border border-gray-200 shadow-md hover:bg-gray-100 transition duration-300"
              onClick={scrollLeft}
            >
              &lt;
            </button>
            <button
              className="text-gray-500 text-2xl focus:outline-none bg-white rounded-full p-2 border border-gray-200 shadow-md hover:bg-gray-100 transition duration-300"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </div>
          <div
            className="flex space-x-1 overflow-x-hidden bg-transparent"
            ref={sliderRef}
          >
            <div className="flex flex-col items-center ">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Silicon Valley"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7653/7653225.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="San Francisco"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7928/7928375.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="New York"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/8770/8770789.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Tokyo"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7653/7653247.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="London"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7407/7407170.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Paris"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7653/7653284.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7720/7720127.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7928/7928126.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7928/7928153.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7653/7653280.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7407/7407117.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7857/7857035.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7407/7407171.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7602/7602616.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pantip.com/forum/siliconvalley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pageslot
                  title="Berlin"
                  description=""
                  imageUrl="https://cdn-icons-png.flaticon.com/128/7928/7928371.png"
                  className="w-40 h-40 flex-shrink-0 shadow-lg rounded-lg mb-2"
                />
              </a>
            </div>
            {/* เพิ่ม Pageslot ตามต้องการ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChooseRoom };
