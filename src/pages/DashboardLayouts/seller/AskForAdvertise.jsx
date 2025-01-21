const AskForAdvertise = () => {
    return (
        <div>
            <h1 className="text-3xl text-center uppercase font-bold py-5">Request Admin For The Ads</h1>
            <div>
                <form>
                    <label>
                        <label className="px-1 py-1">Banner Image Url*</label>
                        <input type="text" className="input input-bordered w-full" placeholder="banner url" name='banner-image' />

                    </label>
                </form>
            </div>      
        </div>
    );
};

export default AskForAdvertise;