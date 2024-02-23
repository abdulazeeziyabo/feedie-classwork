import axios, { type AxiosResponse } from "axios";

export interface IRandomUser{
    isFilledOut?: boolean;
    cell: string
    dob:{
        age: number
        date:string
    };
    email:string;
    gender: string;
    id:{
        name:string
        value:string

    };
    location:{
        street:{number:number, name:string};city:string;state:string;country:string;
        coordinate:{latitude:string;longitude:string};
        postcode: number;
        timezone:{
            offset:string
            description:string
        }
    };
    login:{
        md5:string
        password:string
        salt:string;
        sal:string;
        sha256:string;
        username:string;
        uuid:string
    };
    name: {
        first: string;
        last: string;
        title: string;
      };
      nat: string;
      phone: string;
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
      registered: {
        age: number;
        date: string;
      };

}

interface IRandomUserResponse{
    info: {
        page:number;
        result:number;
        seed:string;
        version:string
    }
    results: IRandomUser[]
}

export const getRandomUsers =  ()=>{
    const endpoint = 'https://randomuser.me/api/?results=10';
  return axios.get(endpoint) as Promise<AxiosResponse<IRandomUserResponse>>
    
    }
    