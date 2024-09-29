

const Needhelp = () => {
    return (
        
        <div className='max-w-[85rem] mx-auto my-10'>
            <h1 className='text-4xl font-bold text-black/90 text-center'>Need any help?</h1>
            <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-48 my-16'>
                <div className="border border-slate-100 p-14">
                    <h3 className="flex flex-row gap-10 text-2xl">Call: <span>+990564847621</span></h3> <hr/>
                    <h2 className="flex flex-row gap-10 text-2xl my-5">Email <span>tour@gmail.com</span></h2><hr/>
                    <h2 className="flex flex-row gap-10 text-2xl">Phone: <span>8801603010103</span></h2>
                </div>
                <div>
                    <img src="https://i.ibb.co/7SqD1Gb/help-desk-right.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Needhelp;