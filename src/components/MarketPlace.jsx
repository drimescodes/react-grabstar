import MarketPlaceBox from './MarketPlaceBox';
import { GiPencilRuler, GiCommercialAirplane } from 'react-icons/gi';
import { BsArrowRight, BsClipboard2Data, BsPencilSquare } from 'react-icons/bs';
import { GrSystem } from 'react-icons/gr'
import { TfiBarChart } from 'react-icons/tfi'


const MarketPlace = () => {
    const marketPlace = [
        {
            icon: <GiPencilRuler size={40} />,
            title: 'Graphic Design',
            description: '12,437 jobs',
        },
        {
            icon: <GiCommercialAirplane size={40} />,
            title: 'Digital market',
            description: '7,234 jobs',
        },
        {
            icon: <BsPencilSquare size={40} />,
            title: 'Content Writing',
            description: '8,231 jobs',
        },
        {
            icon: <GrSystem size={40} />,
            title: 'Development',
            description: '9,875 jobs',
        },
        {
            icon: <BsClipboard2Data size={40} />,
            title: 'Data Entry',
            description: '8,310 jobs',
        },
        {
            icon: <TfiBarChart size={40} />,
            title: 'Business',
            description: '6,123 jobs',
        },

    ];

    return (
        <div className="w-full bg-white relative min-h-screen overflow-hidden ">
            <div className="max-w-full w-[90%] m-auto grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-4 gap-y-8 py-24">
                <div className="p-8 text-[#263959]  col-span-full md:col-span-1 left--[100px] text-center md:text-left transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">
                    <p className="font-bold text-3xl pb-4 ">Explore the Marketplaces</p>
                    <p>We make it easy to work with professional, creative experts from around the world</p>
                </div>

                {marketPlace.map((item, index) => (
                    <MarketPlaceBox
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}

                <div className="border  p-8 rounded-lg flex flex-col bg-[#263959] gap-4 max-w-[80%] justify-center h-60  text-[#3EE8B5] shadow-custom transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">

                    <p className=" font-semibold max-w-[8rem] text-center self-center text-white transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">50+
                        Categories
                        You can Explore</p>

                    < BsArrowRight
                        size={40}

                    />



                </div>
            </div>
        </div>
    );
};

export default MarketPlace;
