/* eslint-disable react/prop-types */

const Swipslider = ({heading,icon}) => {
    return (
        <div
        style={{ border: "2px solid white" }}
        className="border-spacing-3 border-white  lg:h-40 rounded-full lg:w-40 text-center items-center lg:text-4xl mx-auto text-white cursor-pointer hover:text-black hover:bg-white my-10"
      >
        <p className="text-center mx-auto flex justify-center pt-4">
          {icon}
        </p>
        <p className="lg:pt-4">{heading}</p>
      </div>
    );
};

export default Swipslider;