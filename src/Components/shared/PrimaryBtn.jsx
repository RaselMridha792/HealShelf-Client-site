const PrimaryBtn = ({title}) => {
    return (
        <>
        <div className="w-full">
            <button className="btn w-full bg-cyan-400 hover:bg-cyan-400 text-white text-xl hover:text-black duration-300">{title}</button>
        </div>
        </>
    );
};

export default PrimaryBtn;