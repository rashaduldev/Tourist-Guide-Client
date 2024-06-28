import { useContext, useState } from 'react';
import { FaRegSquare } from "react-icons/fa";
import { FaCircleInfo } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { AuthContext } from '../../../Provider/AuthProvider';

const EditProfile = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [textSize, setTextSize] = useState(16);
  const [textColor, setTextColor] = useState('#000000');
  const [textValue, setTextValue] = useState('');
  const {user}=useContext(AuthContext);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleTextAlign = (alignment) => {
    setTextAlign(alignment);
  };

  const handleTextSizeChange = (event) => {
    setTextSize(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-2xl md:text-4xl lg:text-5xl mx-4 my-6 lg:m-10 font-bold'>Edit Profile</h1>
      <div className='m-4 lg:m-10 flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-[70%]'>
          <div className='bg-white p-5 rounded-md'>
            <div className='flex gap-5 items-center'>
              <div className="bg-[#B5E4CA] w-3 h-8 rounded-lg"></div>
              <div>
                <p className="font-bold text-lg">Profile Information</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-8 m-10'>
              <img
                src={user.photoURL}
                alt="Profile Image"
                className="rounded-full h-32 w-32 lg:h-20 lg:w-20"
              />
              <div>
                <button className="w-[200px] relative cursor-pointer py-2 bg-[#2A85FF] text-white rounded-lg">
                  +Upload new picture
                  <input type="file" className="w-full cursor-pointer z-0 absolute top-0 left-0 h-full opacity-0" />
                </button>
              </div>
              <button className="btn">Remove</button>
            </div>
            <form className='mt-10 lg:mx-5'>
              <label className="form-control">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Display Name</span>
                  <FaCircleInfo title="Enter your display name" className="cursor-pointer" />
                </div>
                <input
                  type="text"
                  value={user?.displayName || "Enter your display name"}
                  className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg"
                />
              </label>

              <label className="form-control">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Nickname</span>
                  <FaCircleInfo title="Enter your nickname" />
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg" />
              </label>
              <label className="form-control">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Short Bio</span>
                  <FaCircleInfo title="Enter a short bio" />
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg" />
              </label>
              <div className='w-full flex gap-3'>
              <label className="form-control w-[50%]">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Gender</span>
                  <FaCircleInfo title="Enter your gender" />
                </div>
                <select
                  className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg"
                  value={user.gender}
                  onChange={(e) => console.log(e.target.value)} // Handle change as needed
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </label>
                <label className="form-control w-[50%]">
                  <div className="flex items-center gap-3">
                    <span className="label-text text-lg text-[#33383F] font-bold">Contact Number</span>
                    <FaCircleInfo title="Enter your contact number" />
                  </div>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg" />
                </label>
              </div>
              <label className="form-control">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Email</span>
                  <FaCircleInfo title="Enter your display name" className="cursor-pointer" />
                </div>
                <input
                  type="text"
                  value={user?.email || "Enter your email address"}
                  className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg"
                />
              </label>
              <label className="form-control">
                <div className="flex items-center gap-3">
                  <span className="label-text text-lg text-[#33383F] font-bold">Location</span>
                  <FaCircleInfo title="Enter your location" />
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3 h-14 pl-5 rounded-lg" />
              </label>
              <section>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="label-text text-lg text-[#33383F] font-bold">Bio</span>
                    <FaCircleInfo title="Enter a detailed bio" />
                  </div>
                  <div style={{ border: '2px solid #E6E7E8' }} className="rounded-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="text-black flex gap-7 m-3">
                        <div
                          id="textBold"
                          className={`text-3xl cursor-pointer ${isBold ? 'font-bold' : ''}`}
                          onClick={handleBoldClick}
                        >
                          B
                        </div>
                        <div
                          id="textItalic"
                          className={`text-3xl cursor-pointer ${isItalic ? 'italic' : ''}`}
                          onClick={handleItalicClick}
                        >
                          I
                        </div>
                        <div
                          id="textUnderline"
                          className={`text-3xl cursor-pointer ${isUnderline ? 'underline' : ''}`}
                          onClick={handleUnderlineClick}
                        >
                          U
                        </div>
                      </div>
                    </div>
                    <textarea
                      id="textArea"
                      style={{
                        fontWeight: isBold ? 'bold' : 'normal',
                        fontStyle: isItalic ? 'italic' : 'normal',
                        textDecoration: isUnderline ? 'underline' : 'none',
                        textAlign: textAlign,
                        fontSize: `${textSize}px`,
                        color: textColor,
                      }}
                      className="mt-4 w-full rounded bg-[#F4F4F4]"
                      name=""
                      rows="10"
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </section>
              <div>
                <div className="flex items-center gap-3 mt-7 mb-4">
                  <span className="label-text text-lg text-[#33383F] font-bold">Cover Images</span>
                  <FaCircleInfo title="Upload a cover image" />
                </div>
                <button className="w-full h-60 relative cursor-pointer py-2 bg-[#F4F4F4] text-black">
                  <p className='bg-white lg:w-60 mx-5 md:mx-28 lg:mx-auto p-5 rounded-lg'>Click or drop image</p>
                  <input type="file" className="w-full cursor-pointer z-0 absolute top-0 left-0 h-full opacity-0" />
                </button>
              </div>
            </form>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-between bg-white p-5 rounded-md mt-5'>
            <div className='flex gap-5 items-center'>
              <div className='flex items-center'>
                <p className=" lg:text-2xl md:text-xl">Share with public</p>
              </div>
              <div>
                <FaRegSquare className="cursor-pointer text-2xl" />
              </div>
            </div>
            <button className="text-lg text-white flex gap-2 justify-center items-center rounded-full w-40 h-14 bg-[#2A85FF]">
              <p>Update</p>
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
        <div className='lg:w-[30%]'>
          <div className='flex flex-col justify-start items-start bg-white p-5 rounded-md'>
            <div className='flex gap-5 items-center'>
              <div className="bg-[#F9BC7D] w-3 h-8 rounded-lg"></div>
              <div>
                <p className="font-bold text-lg">Profile Image</p>
              </div>
            </div>
            <div className='my-8'>
              <img
                src={user.photoURL}
                alt="Profile Image"
                className="rounded-full w-36 h-36"
              />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Your bio</p>
              <p className="text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start bg-white p-5 rounded-md mt-5'>
            <div className='flex gap-5 items-center'>
              <div className="bg-[#F9BC7D] w-3 h-8 rounded-lg"></div>
              <div>
                <p className="font-bold text-lg">Cover Image</p>
              </div>
            </div>
            <div className='my-8 w-full'>
              <img
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Cover Image"
                className="rounded-md w-full"
              />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Display name</p>
              <p className="text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </div>
            <div className='mt-5'>
              <p className="font-bold text-lg mb-1">Nickname</p>
              <p className="text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </div>
            <div className='mt-5'>
              <p className="font-bold text-lg mb-1">Location</p>
              <p className="text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
