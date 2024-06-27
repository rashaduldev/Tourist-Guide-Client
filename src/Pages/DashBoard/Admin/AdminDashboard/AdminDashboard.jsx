"use client";
import { FaArrowDown, FaInfo,FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const AdminDashboard = () => {
  const data = [
    {name: '22', uv: 10, pv: 2400, amt: 2400},
    {name: '23', uv: 20, pv: 2400, amt: 2400},
    {name: '24', uv: 10, pv: 2400, amt: 2400},
    {name: '25', uv: 20, pv: 2400, amt: 2400},
    {name: '26', uv: 20, pv: 2400, amt: 2400},
    {name: '27', uv: 5, pv: 2400, amt: 2400},
    {name: '28', uv: 10, pv: 2400, amt: 2400},
  ];
  
  return (
    <>
         <div className="w-full">
        <h1 className="text-5xl font-bold m-4">Dashboard</h1>
      <div className="bg-white m-[20px] py-[20px] rounded-md">
      <div className="flex items-center justify-between px-[40px] py-[20px]">
           <div className="flex items-center gap-[10px]">
             <p className="w-[15px] h-[35px] rounded bg-[#CABDFF]"></p>
             <p className="text-2xl font-bold">Overview</p>
            </div>
            <p>
                <select id="dateType" name="dateType" className="mt-1 p-2 border rounded-md w-full">
                <option value="days">This Week</option>
               <option value="weeks">This Month</option>
               <option value="years">This Year</option>
                </select>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-10 flex-col lg:flex-row gap-[25px]">

          <div  className="bg-[#EAF6EF] p-7 rounded-lg">
          <div className="w-16 h-16 items-center flex p-4 text-white bg-[#1A1D1F] rounded-full">
                  <IoBagRemove className="mx-auto text-5xl" />
                  </div>
           <div>
      <div className="flex items-center">
        <div>
        <div className="flex flex-row items-center justify-between">
        <p className="flex flex-row items-center gap-2 mt-3 text-[20px]">
        <span className="">Total Pitch</span>
        <span className="p-1 bg-[#33383F] text-white text-[8px] rounded-full"><FaInfo /></span>
      </p>
      <img className="pl-24" src="https://i.ibb.co/S3rn049/Vector-647.png" alt="Description" width={200} height={300} />
        </div>
      <p className="text-6xl font-bold my-2">03</p>
        </div>
        <div>
          
        </div>
      </div>
      <div className="flex items-center text-[20px] gap-1 bg-white p-[2px] rounded-md">
      <div className="flex items-center text-[#83BF6E] gap-2">
        <p><FaArrowUp /></p>
        <p className="font-bold">37.8%</p>
      </div>
      <p className="text-[#6f767E] font-bold">Response rate</p>
      </div>
    </div>
          </div>
          <div className="bg-[#E9F6FC] p-7 rounded-lg">
                  <div className="w-16 h-16 items-center flex p-4 text-white bg-[#1A1D1F] rounded-full">
                  <IoBagRemove className="mx-auto text-5xl" />
                  </div>

    <div>
    <div className="flex flex-row items-center justify-between">
        <p className="flex items-center gap-2 mt-3 text-[20px]">
        <span className="">Total Order</span>
        <span className="p-1 bg-[#33383F] text-white text-[8px] rounded-full"><FaInfo /></span>
      </p>
      <img className="pl-24" src="https://i.ibb.co/S3rn049/Vector-647.png" alt="Description" width={200} height={300} />
        </div>
      <p className="text-6xl font-bold my-2">512</p>
      <div className="flex items-center text-[20px] gap-1 bg-white p-[2px] rounded-md">
      <div className="flex items-center font-bold text-[#FF6A55] gap-2">
        <p><FaArrowDown /></p>
        <p>37.8%</p>
      </div>
      <p className="text-[#6f767E] font-bold">This week</p>
      </div>
    </div>
          </div>
          <div className="bg-[#F0ECFD] p-7 rounded-lg">
          <div className="w-16 h-16 items-center flex p-4 text-white bg-[#1A1D1F] rounded-full">
                  {/* <img  src="" /> */}
                  <img className="mx-auto text-5xl" src="https://i.ibb.co/nkS8qr3/Vector-605-Stroke.png" alt="Description" width={200} height={300} />
                  </div>

    <div>
    <div className="flex flex-row items-center justify-between">
        <p className="flex items-center gap-2 mt-3 text-[20px]">
        <span className="">Total Amount</span>
        <span className="p-1 bg-[#33383F] text-white text-[8px] rounded-full"><FaInfo /></span>
      </p>
      <img className="pl-10" src="https://i.ibb.co/G3C6MyK/Vector-647-2.png" alt="Description" width={150} height={300} />
      {/* <img  src="" /> */}
        </div>
      <p className="text-6xl font-bold my-2">$64k</p>
      <div className="flex items-center text-[20px] gap-1 bg-white p-[2px] rounded-md">
      <div className="flex items-center text-[#83BF6E] gap-2">
        <p><FaArrowUp /></p>
        <p className="font-bold">37.8%</p>
      </div>
      <p className="text-[#6f767E] font-bold">This week</p>
      </div>
    </div>
          </div>

        </div>
       
      </div>
      <div className="flex flex-col lg:flex-row py-[40px] px-[20px] gap-2">
          <div className="lg:w-[70%]  py-6 rounded-lg">
            <div className="bg-white rounded-lg">
              <div className="flex items-center justify-between lg:px-[40px] p-3 lg:pt-5">
                
                <div className="flex items-center gap-[10px]">
             <p className="w-[15px] h-[35px] rounded bg-[#CABDFF]"></p>
             <p className="text-[14px] lg:text-2xl font-bold">Total Investment Found</p>
            </div>
               <p>
                <select id="dateType" name="dateType" className="mt-1 p-2 border rounded-md w-full">
                <option value="days">Last 7 days</option>
               <option value="weeks">Last 15 days</option>
               <option value="years">Last 1 month</option>
                </select>
               </p>
              </div>
              <div className="mt-[20px] hidden lg:block "> 
              <BarChart width={850} height={400} data={data}>
              <XAxis dataKey="name" stroke="black" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={25} />
            </BarChart>
              </div>
            </div>
           <div className="bg-white rounded-lg my-10">
           <div className="flex items-center justify-between px-[10px] lg:px-[40px]">
                
                <div className="flex items-center pt-[15px] gap-[10px]">
             <p className="w-[15px] h-[35px] rounded bg-[#B5E4CA]"></p>
             <p className="lg:text-2xl font-bold">Pitch updates</p>
            </div>
              <div className="btn bg-[#032d2cea] hover:bg-[#032D2C] text-white flex items-center mt-4 p-4 lg:p-2 rounded-lg gap-4 lg:text-xl font-bold">
              <FaPlus />
                <button>
               Create
              </button>
              </div>
              </div>
              <div className="px-[10px] lg:px-[40px]">
              <p className="lg:text-[19px] mt-10 pl-3 text-[#6F767E]">Need some ideas for the next product?</p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div style={{ border:'1px solid #EFEFEF' }} className="text-2xl p-5 rounded-full">
                  <IoBagRemove />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Pitch Idea 01</p>
                    <div className="flex items-center">
                      <button className="btn btn-primary">new</button>
                      <div className="mx-2 flex flex-row">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      </div>
                      <p>21+ investor</p>

                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6 my-10">
                  <div style={{ border:'1px solid #EFEFEF' }} className="text-2xl p-5 rounded-full">
                  <IoBagRemove />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Pitch Idea 02</p>
                    <div className="flex items-center">
                      <button className="btn">new</button>
                      <div className="mx-2 flex flow-row">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      </div>
                      <p>21+ investor</p>

                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6 my-10">
                  <div style={{ border:'1px solid #EFEFEF' }} className="text-2xl p-5 rounded-full">
                  <IoBagRemove />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Pitch Idea 03</p>
                    <div className="flex items-center">
                      <button className="btn">new</button>
                      <div className="mx-2 flex flex-row">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8">
                          <span className="text-xs">
                          <img src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-neutral-400 text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs rounded-full">
                          <img className="rounded-full" src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      </div>
                      <p>21+ investor</p>

                    </div>
                  </div>
                </div>
                
              </div>
              </div>
           </div>
          </div>
          <div className="lg:w-[30%] py-6 rounded-lg">
         <div className="bg-white rounded-lg">
            {/* 1st */}
           <div>
           <div className="flex items-center gap-[10px] p-5">
             <p className="w-[15px] h-[35px] rounded bg-[#FFD88D]"></p>
             <p className="text-2xl font-bold">Comments</p>
            </div>
            <div className="flex flex-row justify-between p-5">
                 <div className="flex gap-3">
                 <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs">
                          <img src="https://i.ibb.co/5kFTDtq/download.png" alt="" width={150} height={300} />
                          </span>
                        </div>
                      </div>
                      <div>
                        <h2 className="font-bold">Ethel<span className="text-[#9A9FA5] ml-1">@ethel</span></h2>
                        <h2><span className="text-[#9A9FA5] mr-1">On</span><span className="font-bold">Pitch idea-01</span></h2>
                        <p className="my-3 text-[#1A1D1F]">Great work 😊</p>
                      </div>
                      
                 </div>
            <div>
                <p className="text-[#9A9FA5]">1hr</p>
            </div>
            
            </div>
            <div className="flex justify-between pl-16 text-xl pr-5 pb-5"> 
                          <h2><MdOutlineMessage /></h2>
                          <h2><GiSelfLove /></h2>
                          <h2><MdOutlineLink /></h2>
             </div>
           <div className="divider px-5"></div> 
           </div>
           {/* 2nd */}
           <div>
            <div className="flex flex-row justify-between p-5">
                 <div className="flex gap-3">
                 <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-8 h-8">
                          <span className="text-xs">
                          <img src="https://i.ibb.co/WctPKwY/download.png" alt="" width={150} height={300} />
                          {/* <img src="" /> */}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h2 className="font-bold">Ethel<span className="text-[#9A9FA5] ml-1">@ethel</span></h2>
                        <h2><span className="text-[#9A9FA5] mr-1">On</span><span className="font-bold">Pitch idea-03</span></h2>
                        <p className="my-3 text-[#1A1D1F]">How can I buy only the design?</p>
                      </div>
                      
                 </div>
            <div>
                <p className="text-[#9A9FA5]">1hr</p>
            </div>
            
            </div>
            <div className="flex justify-between pl-16 text-xl pr-5 pb-5"> 
                          <h2><MdOutlineMessage /></h2>
                          <h2><GiSelfLove /></h2>
                          <h2><MdOutlineLink /></h2>
             </div>
           <div className="divider px-5"></div> 
           <div className="p-3">
           <button className="btn w-full text-lg font-bold my-3">View all</button>
           </div>
           </div>
         </div>
         <div className="bg-white my-4 rounded-lg">
         <div className="flex items-center gap-[10px] px-5 py-10">
             <p className="w-[15px] h-[35px] rounded bg-[#FFBC99]"></p>
             <p className="text-2xl font-bold">Find Co-founder</p>
            </div>
            <div className="grid grid-cols-4 p-5">
                <div>
                     <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                       <img className="h-14 w-14 rounded-full" src="https://daisyui.com/imgs/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                    </div>
                    <p className="text-lg">Gladyce</p>
                </div>
                <div>
                     <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img className="h-14 w-14 rounded-full" src="https://daisyui.com/imgs/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                    </div>
                    <p className="text-lg">Gladyce</p>
                </div>
                <div>
                     <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img className="h-14 w-14 rounded-full" src="https://daisyui.com/imgs/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                    </div>
                    <p className="text-lg">Gladyce</p>
                </div>
                <div>
                     <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img className="h-14 w-14 rounded-full" src="https://daisyui.com/imgs/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                    </div>
                    <p className="text-lg">Gladyce</p>
                </div>
              
            </div>
            <div className="p-5">
                <button className="btn w-full text-lg font-bold p-3 my-3">View full list</button>
                </div>
         </div>
         
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AdminDashboard;
