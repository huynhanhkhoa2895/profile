export type Profile = {
  name?: string;
  email?: string;
  address?: string;
  introduce: string;
  image?: Image;
}

export type Image = {
  name: string;
  width: string | number;
  height: string | number;
  url: string;
}