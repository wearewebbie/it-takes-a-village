import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV;

export default {
  title: "It Takes a Village",
  description: "Expert, gentle baby sleep consulting without cry-it-out methods. OCN Level 6 qualified consultants offering personalised sleep plans for your family. Book today.",
  schemaType: "ProfessionalService",
  url: env === "https://ittakesavillagebabysleep.com"
    ? "PROD URL"
    : env === "development"
      ? "plum-spoonbill-939025.hostingersite.com"
      : "http://localhost:8080",
  logo: "",
  image: "src/assets/images/website-preview-image.png",
  email: "itav.sleep@gmail.com",
  social: {
    instagram: "https://www.instagram.com/ittakesavillage_baby_sleep/",
    facebook: "https://facebook.com/example",
    tiktok: "https://www.tiktok.com/@ittakesavillagebabysleep"
  }
};