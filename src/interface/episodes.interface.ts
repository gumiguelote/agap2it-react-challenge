import { IImage } from "./image.interface";

export interface IEpisode {
  id: number;
  name: string;
  season: string;
  number: IImage;
  sumamary: string;
  airdate: string;
}
export interface ISeasonEpisodes {
  seasons: IEpisode[];
}
