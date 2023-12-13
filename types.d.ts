// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// };
// type Doctor = {
//   img: string;
//   name: string;
//   jobTitle: string;
// };
// type Branch = {
//   id: number;
//   arTitle: string;
//   enTitle: string;
//   arDesc: string;
//   enDesc: string;
//   location: string;
//   bg: string;
//   isReverse: boolean;
//   categories: string[];
//   doctors: Doctor[];
// };
// type Doctor = {
//   img: any;
//   name: string;
//   jobTitle: string;
// };
// type Department = {
//   id: number;
//   img: any;
//   arTitle: string;
//   enTitle: string;
//   arDesc: string;
//   enDesc: string;
//   specialties: string[];
//   subImg: StaticImageData;
//   doctors: Doctor[];
// };
type Blog = {
  id: number;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
};
type Team = {
  id: number;
  img: any;
  name: string;
  jobTitle: string;
  arDesc: string;
  enDesc: string;
  experiance: number;
  casesNum: number;
  arBranch: string;
  enBranch: string;
  arAppointments: string;
  enAppointments: string;
  arTime: string;
  enTime: string;
};

// ***************************

type Goals = {
  "goal-1": string;
  "goal-2": string;
  "goal-3": string;
};

type AboutUs = {
  "headerTitle": string,
  "headerDes": string,
  "valueImage": any,
  "value_title1": string,
  "value_des1": string,
  "valueImage1": any,
  "value_title2": string,
  "value_des2": string,
  "goals": string[]
};

type AboutNizar = {
  "headerTitle": string,
  "headerDes": string,
  "aboutDrNazar_image": any,
  "aboutDrNazar_title": string,
  "aboutDrNazar_des": string,
  "album": string[],
  "album_title": string,
  "album_des": string
};
type Branch = {
  id: number;
  title: string;
  description: string;
  google_map: string;
  doctores?: Doctor[];
  departments?: Department[]
};
type Doctor = {
  id: number;
  name: string;
  des?: string;
  description?: string;
  image: any;
  specialists: any;
  experience: number;
  "patient number": number;
  "work day": string;
  branches?: Branch[];
};
type Specialist = {
  "id": number,
  "department_id": number,
  "content": string,
  "created_at": string,
  "updated_at": string
}
type Department = {
  id: number;
  title: string;
  des: string;
  icon: any;
  image1: any;
  image2: any;
  specialist?: Specialist[];
  branches?: Branch[];
};

type Patient = {
  id: number;
  before: any;
  after: any;
  branches?: Branch[];
  doctroes?: Doctor[];
}