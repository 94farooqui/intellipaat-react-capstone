import axios from "axios";

export const fetchImages = async (searchQuery) => {
  let fetchedImages;

  try {
    if (searchQuery) {
      fetchedImages = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=12&query=${searchQuery}&client_id=GqHqyO027hGDAGdfT5FuBatS2NF1W5kPfPP2JHcETSY`
      );
      console.log("Searching images");
      //console.log(fetchedImages)
        return fetchedImages.data.results;
   
    } 
      fetchedImages = await axios.get(
        "https://api.unsplash.com/photos/?client_id=GqHqyO027hGDAGdfT5FuBatS2NF1W5kPfPP2JHcETSY&per_page=12"
      );
      //console.log(fetchedImages)
        return fetchedImages.data;
 
    }
   catch (error) {}
};
