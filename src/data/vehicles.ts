export type Vehicle = {
  fuel: string;
  id: string;
  image: string;
  mileage: string;
  monthlyPayment: string;
  name: string;
  price: string;
  transmission: string;
  year: number;
};

export const vehicles: Vehicle[] = [
  {
    id: "nissan-sentra-advance-2024",
    name: "Nissan Sentra Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "130,000 km",
    price: "$250,000",
    monthlyPayment: "$4,500",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    id: "nissan-versa-sense-2024",
    name: "Nissan Versa Sense",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "150,000 km",
    price: "$220,000",
    monthlyPayment: "$4,000",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    id: "nissan-march-sense-2022",
    name: "Nissan March Sense",
    year: 2022,
    transmission: "Manual",
    fuel: "Gasolina",
    mileage: "85,000 km",
    price: "$165,000",
    monthlyPayment: "$3,200",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    id: "nissan-note-sense-2023",
    name: "Nissan Note Sense",
    year: 2023,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "45,000 km",
    price: "$195,000",
    monthlyPayment: "$3,600",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    id: "nissan-altima-exclusive-2023",
    name: "Nissan Altima Exclusive",
    year: 2023,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "75,000 km",
    price: "$320,000",
    monthlyPayment: "$5,600",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    id: "nissan-kicks-advance-2024",
    name: "Nissan Kicks Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "98,000 km",
    price: "$275,000",
    monthlyPayment: "$4,800",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    id: "nissan-x-trail-exclusive-2024",
    name: "Nissan X-Trail Exclusive",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "62,000 km",
    price: "$390,000",
    monthlyPayment: "$6,900",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    id: "nissan-qashqai-advance-2024",
    name: "Nissan Qashqai Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "30,000 km",
    price: "$340,000",
    monthlyPayment: "$6,100",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    id: "nissan-pathfinder-exclusive-2023",
    name: "Nissan Pathfinder Exclusive",
    year: 2023,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "55,000 km",
    price: "$410,000",
    monthlyPayment: "$7,400",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    id: "nissan-murano-exclusive-2022",
    name: "Nissan Murano Exclusive",
    year: 2022,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "68,000 km",
    price: "$360,000",
    monthlyPayment: "$6,500",
    image: "/images/car-list/suv-graphite.webp",
  },
];
