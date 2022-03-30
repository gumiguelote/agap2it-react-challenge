import { IImage } from "./image.interface";

export interface IEpisodes {
  id: number;
  name: string;
  season: string;
  number: IImage;
  sumamary: string;
  airdate: string;
}

export interface IEpisodeDetail {
  name: string;
  summary: string;
  image: IImage;
}

export interface ISeasonEpisodes {
  seasons: Array<IEpisodes[]>;
}
