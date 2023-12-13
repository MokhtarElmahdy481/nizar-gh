// carousel
import carousel1 from "../../public/assets/bg-home.png";
import carousel2 from "../../public/assets/bg-home.png";
import carousel3 from "../../public/assets/bg-home.png";
// social media icons
import facebook from "../../public/assets/facebook.svg";
import whats from "../../public/assets/whats.svg";
import twitter from "../../public/assets/twitter.svg";
// doctors
import doc1 from "../../public/assets/doctor-01.svg";
import doc2 from "../../public/assets/doctor-02.svg";
import doc3 from "../../public/assets/doctor-03.svg";
import doc4 from "../../public/assets/doctor-04.svg";
// team
import team1 from "../../public/assets/team-01.svg";
import team2 from "../../public/assets/team-02.svg";
import team3 from "../../public/assets/team-03.svg";
//  departments
import dep1 from "../../public/assets/dep-01.svg";
import dep2 from "../../public/assets/dep-02.svg";
import dep3 from "../../public/assets/dep-03.svg";
import group from "../../public/assets/Group.png";
export const pages = [
  {
    enTitle: "home",
    arTitle: "الرئيسية",
    path: "/",
  },
  {
    enTitle: "about us",
    arTitle: "من نحن",
    path: "/about",
  },
  {
    enTitle: "about dr.nizar",
    arTitle: "نبذة عن د/نزار",
    path: "/about-nizar",
  },
  {
    enTitle: "categories",
    arTitle: "الأقسام",
    path: "/departments",
  },
  {
    enTitle: "team",
    arTitle: "الفريق",
    path: "/team",
  },
  {
    enTitle: "branches",
    arTitle: "الفروع",
    path: "/branches",
  },
  {
    enTitle: "cases",
    arTitle: "الحالات",
    path: "/cases",
  },
  {
    enTitle: "blogs",
    arTitle: "مدونات",
    path: "/blogs",
  },
  {
    enTitle: "contact",
    arTitle: "تواصل معنا",
    path: "/contact",
  },
];
export const socialMedia = [
  {
    img: facebook,
    path: "www.facebook.com",
  },
  {
    img: whats,
    path: "https://wa.me/+201022153359",
  },
  {
    img: twitter,
    path: "www.twitter.com",
  },
];
export const locations = [
  "ش الملك عبد الله, الرياض المملكة العربية.",
  "ش الملك عبد العزيز, المدينة, المملكة العربية.",
];
export const appointments = [
  "السبت والثلاثاء والخميس",
  "من الساعة التاسعة صباحا الي الخامسة مساء",
];
export const call = ["+992 665 770 8", "+992 888 3666"];
export const branches = [
  {
    id: 1,
  title: "فرع مكة",
  description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  google_map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1014.1287817716068!2d31.004005808244997!3d30.561575859718435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1701347203741!5m2!1sen!2seg"
  },
  {
    id: 2,
  title: "فرع مكة",
  description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  google_map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1014.1287817716068!2d31.004005808244997!3d30.561575859718435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1701347203741!5m2!1sen!2seg"
  },
  {
    id: 3,
  title: "فرع مكة",
  description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  google_map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1014.1287817716068!2d31.004005808244997!3d30.561575859718435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1701347203741!5m2!1sen!2seg"
  },
  {
    id: 4,
  title: "فرع مكة",
  description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  google_map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1014.1287817716068!2d31.004005808244997!3d30.561575859718435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1701347203741!5m2!1sen!2seg"
  },

];
export const blogs = [
  {
    id: 1,
    arTitle: "فرع المدينة",
    enTitle: "El-Maddinah Branch",
    arDesc: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
    enDesc:
      "One of the most prestigious hospitals established in the Medina region",
  },
  {
    id: 2,
    arTitle: "فرع مكة",
    enTitle: "Makka Branch",
    arDesc: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
    enDesc:
      "One of the most prestigious hospitals established in the Medina region",
  },
  {
    id: 3,
    arTitle: "فرع جدة",
    enTitle: "Gadah Branch",
    arDesc: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
    enDesc:
      "One of the most prestigious hospitals established in the Medina region",
  },
  {
    id: 4,
    arTitle: "فرع الرياض",
    enTitle: "Ryad Branch",
    arDesc: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
    enDesc:
      "One of the most prestigious hospitals established in the Medina region",
  },
];
export const team = [
  {
    id: 1,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 2,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 3,
    img: team3,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 4,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 5,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 6,
    img: team3,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 7,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 8,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 9,
    img: team3,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 10,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 11,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 12,
    img: team3,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 13,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 14,
    img: team1,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 15,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
  {
    id: 16,
    img: team2,
    name: "احمد السعدني",
    jobTitle: "اخصائي طب الاسنان",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل. من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services. It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    experiance: 5,
    casesNum: 240,
    arBranch: "يعمل في فرع مكة",
    enBranch: "work on Makkah branch ",
    arAppointments: "السبت و الثلاثاء و الخميس",
    enAppointments: "Satuerday , Monday , Friday",
    arTime: "من الساعة التاسعة صباحا الي الخامسة مساء",
    enTime: "From 9.00 A.M to 5.00 P.M",
  },
];
export const departments = [
  {
    id: 1,
    img: dep1,
    arTitle: "الجلدية والتجميل",
    enTitle: "Dermatology and cosmetics",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    specialties: ["التقويم", "الجراحة", "الزراعة", "تبييض", "فينيير"],
    subImg: group,
    doctors: [
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع التحرير",
      },
      {
        img: team2,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الدقي",
      },
      {
        img: team3,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع المنصورة",
      },
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الشرقية",
      },
    ],
  },
  {
    id: 2,
    img: dep2,
    arTitle: "الطب العام",
    enTitle: "General Medicine",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    specialties: ["التقويم", "الجراحة", "الزراعة", "تبييض", "فينيير"],
    subImg: group,
    doctors: [
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع التحرير",
      },
      {
        img: team2,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الدقي",
      },
      {
        img: team3,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع المنصورة",
      },
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الشرقية",
      },
    ],
  },
  {
    id: 3,
    img: dep3,
    arTitle: "طب الاسنان",
    enTitle: "dentist",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
    specialties: ["التقويم", "الجراحة", "الزراعة", "تبييض", "فينيير"],
    subImg: group,
    doctors: [
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع التحرير",
      },
      {
        img: team2,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الدقي",
      },
      {
        img: team3,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع المنصورة",
      },
      {
        img: team1,
        name: "احمد السعدني",
        jobTitle: "اخصائي طب الأسنان فرع الشرقية",
      },
    ],
  },
];
export const cases = [
  {
    id: 1,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 2,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 3,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 4,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 5,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 6,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 7,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
  {
    id: 8,
    img: "/assets/patient-1.png",
    arTitle: "د/خالد المصري",
    enTitle: "dr.khaled elmasry",
    arDesc: "فرع الدائري",
    enDesc: "Ring Branch",
  },
];
export const CarouselContent = [
  {
    id: 1,
    img: carousel1,
    arTitle: "مستشفيات د.نزار غلام ",
    enTitle: "dr.Nizar hospitals",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
  },
  {
    id: 2,
    img: carousel2,
    arTitle: "مستشفيات د.نزار غلام ",
    enTitle: "dr.Nizar hospitals",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
  },
  {
    id: 3,
    img: carousel3,
    arTitle: "مستشفيات د.نزار غلام ",
    enTitle: "dr.Nizar hospitals",
    arDesc:
      "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب الاسنان والتجميل.",
    enDesc:
      "It is one of the most prestigious hospitals established in the Medina region, which provides dental and cosmetic services.",
  },
];
