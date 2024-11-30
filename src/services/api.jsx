import axios from "axios";

const fetchLivres = async () => {
  try {
    const response = await axios.get("https://gahi-said.com/apis/auteurs.php");
    return response.data;
  } catch (error) {
    console.error("Erreur :", error);
    return [];
  }
};

export default fetchLivres;
