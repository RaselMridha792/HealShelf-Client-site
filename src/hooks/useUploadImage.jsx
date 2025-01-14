import axios from "axios";


 const saveImgBB = async(image) =>{
    const formData = new FormData()
    formData.append('image', image)
    try{
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_apiKey}`, formData)
        return response.data.data.display_url
    }catch(error){
        console.error('image upload field', error)
        throw error
    }
  }
const useUploadImage = () => {
    return saveImgBB
};

export default useUploadImage;