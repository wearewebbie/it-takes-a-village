export default {
  title: "It Takes a Village",
  description: "Expert, gentle baby sleep consulting without cry-it-out methods. OCN Level 6 qualified consultants offering personalised sleep plans for your family. Book today.",
  schemaType: "ProfessionalService",
  url: process.env.CF_PAGES_BRANCH === 'main'
    ? "https://ittakesavillagebabysleep.com"
    : process.env.CF_PAGES_URL || "http://localhost:8080",
  logo: "",
  image: "/assets/images/website-preview-image.png",
  email: "itav.sleep@gmail.com",
  social: {
    instagram: "https://www.instagram.com/ittakesavillage_baby_sleep/",
    tiktok: "https://www.tiktok.com/@ittakesavillagebabysleep"
  }
};