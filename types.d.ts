type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type Doctor = {
  img: string;
  name: string;
  jobTitle: string;
};
type Branch = {
  id: number;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
  location: string;
  bg: string;
  isReverse: boolean;
  categories: string[];
  doctors: Doctor[];
};
type Doctor = {
  img: any;
  name: string;
  jobTitle: string;
};
type Department = {
  id: number;
  img: any;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
  specialties: string[];
  subImg: StaticImageData;
  doctors: Doctor[];
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
type Case = { id: number,img: any, arTitle: string ,enTitle:string, arDesc: string, enDesc: string }