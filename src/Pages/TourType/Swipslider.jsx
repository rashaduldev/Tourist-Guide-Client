
const Swipslider = ({heading,icon}) => {
    return (
        <div
        style={{ border: "2px solid white" }}
        className="border-spacing-3 border-white  h-40 rounded-full w-40 text-center items-center text-4xl mx-auto text-white cursor-pointer hover:text-black hover:bg-white"
      >
        <p className="text-center mx-auto flex justify-center pt-4">
          {icon}
          
        </p>
        <p className="lg:pt-4">{heading}</p>
      </div>
    );
};

export default Swipslider;