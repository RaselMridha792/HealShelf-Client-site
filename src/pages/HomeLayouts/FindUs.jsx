const FindUs = () => {
  return (
    <>
      <div
        className="my-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/HM8jJMC/helpline.jpg')`,
        }}
      >
        <div className="bg-black bg-opacity-40">
          <div className="py-20 w-8/12 mx-auto flex flex-col items-center justify-center gap-5 text-white ">
          <img src="https://img.icons8.com/?size=100&id=Mb4z4jh0wGon&format=png&color=000000" alt="" />
            <h1 className="md:text-4xl text-2xl font-bold text-center">
              Are you a hopital, essential worker, or goverment office?
            </h1>
            <p className="text-center text-xl md:text-2xl">Call us 24x7 for emergency stocks, we`re happy to help</p>
            <p className="text-center text-xl md:text-4xl font-bold">+88016 - 0000 - 0000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUs;
