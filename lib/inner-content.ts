import pageAssets from "@/lib/page-assets.json";
import { assets } from "@/lib/content";
export function pageImage(page: keyof typeof pageAssets, index = 0) {
  return pageAssets[page][index]?.src || assets.team;
}
export const programmes = [
  {
    name: "EARLY STARTERS",
    age: "Ages 4–7",
    text: "A fun introduction to football that builds coordination, movement and teamwork. Young players discover the game in a friendly environment.",
  },
  {
    name: "FOUNDATION",
    age: "Ages 8–10",
    text: "Players build on the basics, develop their individual technique and learn how their role contributes to a team. This stage prepares them for pre-academy football.",
  },
  {
    name: "PRE-ACADEMY",
    age: "Ages 11–13",
    text: "Ball mastery, resilience and teamwork become central. More focused training and tournament experience help players prepare for competitive football.",
  },
  {
    name: "ACADEMY",
    age: "Academy programme",
    text: "Technical, tactical, physical and mental development combine with league experience. Ask about the residential programme and opportunities to combine football with education.",
  },
  {
    name: "FOOTBALL 4 GIRLS",
    age: "Girls’ development",
    text: "A dedicated pathway into the game, inspired by the Alimosho FC women’s team. Training builds confidence, skills and a strong sense of belonging.",
  },
];
export const sponsorships = [
  "Kit & Training Sponsorship",
  "Travel Sponsorship",
  "Accommodation & Feeding Sponsorship",
  "Brand Endorsement",
  "Camp Sponsorship",
  "Financial Aid",
  "Gym & Nutrition",
];
export const products = [
  {
    id: "dream-shirt",
    name: "Home Jersey / Shirt Only",
    edition: "The Dream 2023/24",
    description: "The 2023/24 home jersey by Afa Sports.",
    price: 15000,
    image: pageImage("club-store", 1),
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "balinga-away",
    name: "2022 Away Jersey",
    edition: "The Balinga 2022",
    description: "The away shirt by Markzury Sports.",
    price: 8500,
    image: pageImage("club-store", 2),
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "comic",
    name: "The Thundering Herd",
    edition: "Sports Comic",
    description: "A full-colour sports comic from AFC Media.",
    price: 1000,
    image: pageImage("club-store", 3),
    sizes: ["One size"],
  },
  {
    id: "dream-kit",
    name: "Home Kit with Shorts",
    edition: "The Dream 2023/24",
    description: "The Afa Sports home shirt and shorts set.",
    price: 18500,
    image: pageImage("club-store", 4),
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "notepad",
    name: "Custom Notepads",
    edition: "A5 / 100 sheets",
    description: "A club keepsake for school, work or gifting.",
    price: 5000,
    image: pageImage("club-store", 5),
    sizes: ["One size"],
  },
  {
    id: "balinga-home",
    name: "2022 Home Jersey",
    edition: "The Balinga 2022",
    description: "The classic Markzury Sports home design.",
    price: 8500,
    image: pageImage("club-store", 6),
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "brilliance-2019",
    name: "2019 Home Jersey",
    edition: "Back To Brilliance 2019",
    description: "The championship season shirt by Markzury Sports.",
    price: 8500,
    image: pageImage("club-store", 7),
    sizes: ["S", "M", "L", "XL"],
  },
];
export const formatPrice = (amount: number) =>
  "₦" + amount.toLocaleString("en-NG");
