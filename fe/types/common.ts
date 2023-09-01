export type Profile = {
  name?: string;
  email?: string;
  address?: string;
  introduce: string;
  image?: IImage;
  technology_proficient?: ITechnology[];
  technology_knowledge?: ITechnology[];
};

export type IImage = {
  name: string;
  width: string | number;
  height: string | number;
  url: string;
};

export type ITechnology = {
  name: string;
  image: IImage;
};
