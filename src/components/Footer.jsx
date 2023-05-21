

const Footer = () => {
  return (
    <div className="w-full bg-[#EFF1FD]  min-h-screen  text-[#263959] py-24 overflow-x-hidden">
      <div className="max-w-full w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-x-24 m-auto">



    <div className="col-span-2 md:col-span-3 lg:col-span-3 border border-black h-90 ">

    <div className="flex justify-start items-center gap-2 ">
              <img className="w-auto h-9" src="" alt="" />
              <p className="font-bold text-lg">Realtinic</p>
              </div>

              <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco .</p>
</div>
 
    <div className="col-span-2 md:col-span-3 lg:col-span-1 border border-black h-9"></div>
    <div className="col-span-2 md:col-span-3 lg:col-span-1 border border-black h-9"></div>
    <div className="col-span-2 md:col-span-3 lg:col-span-1 border border-black h-9"></div>


      </div>
      </div>
  )
}

export default Footer