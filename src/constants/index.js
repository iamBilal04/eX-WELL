import { affaanV, BilalV, RehanV, mate4, scan, upload, stats } from "../assets"

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const services = [
  {
    title: "Affaan Arbani",
    icon: affaanV,
  },
  {
    title: "Bilal Ansari",
    icon: BilalV,
  },
  {
    title: "Rehan Shah",
    icon: RehanV,
  },
  {
    title: "Love Jihadi",
    icon: mate4,
  },
];

const experiences = [
  {
    title: "Upload Your Chest X-ray Scan",
    icon: upload,
    iconBg: "#58E186",
    points: [
      "Upload your chest X-ray scan by either taking the photo of the hard copy of the Xray or direct uploading the file"
    ],
  },
  { 
    title: "Wait while our Ai Analyses the Chest X-ray Scan",
    icon: scan,
    iconBg: "#7B8DEA",
    points: [
      "Our Ai Model will predict the disease"
    ],
  },
  {
    title: "Get the results of your X-ray",
    icon: stats,
    iconBg: "#97a8b2",
    points: [
      "Likely diseases will be shown to you",
    ],
  },
];

export {
  navLinks,
  services,
  experiences
}