const PrimaryBtn = ({title}) => {
    return (
        <>
        <div className="w-full">
            <button className="btn w-full bg-pink-600 hover:bg-pink-500 text-white text-xl hover:text-black duration-300">{title}</button>
        </div>
        </>
    );
};

export default PrimaryBtn;