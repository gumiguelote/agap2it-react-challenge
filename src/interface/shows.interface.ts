import { IImage } from "./image.interface";

export interface IShow {
  id: number;
  name: string;
  summary: string;
  image: IImage;
  rating: IRating;
}

interface IRating {
  average: number;
}
