import { Parallax } from 'react-parallax';

// eslint-disable-next-line react/prop-types
const Cover = ({img,title,subtitle}) => {
  return (
    <div className='mx-10 rounded my-10'>
           <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="blogs"
        strength={-200}
    >
       <div
        className="hero h-[400px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="lg:max-w-2xl bg-slate-300 bg-opacity-30 lg:px-36 py-6 shadow-2xl mt-48 mx-auto rounded">
            <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
            <p className="mb-5 w-full mx-auto text-2xl text-white">
           {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
     
    </div>
  );
};

export default Cover;
