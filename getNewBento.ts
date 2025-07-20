const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Debanjan%20Paul&g=deba607&x=DebanjanPa28276&l=debanjan-paul-02307b25b&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F128419695%3Fs%3D400%26u%3Dd17dc40ac18ba8c2699405357c46e04901d4ca82%26v%3D4&p=https%3A%2F%2Fdebanjanpaul.netlify.app%2F&z=5c1e6";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
