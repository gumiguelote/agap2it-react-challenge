import { IEpisodeDetail, IEpisodes } from "../interface/episodes.interface";
import { IShow } from "../interface/shows.interface";
import api from "./api.service";

export const getShow = async (id: string): Promise<IShow> => {
  const { data } = await api.get<IShow>(`/shows/${id}`);
  return data;
};

export const getEpisodes = async (id: string): Promise<IEpisodes[]> => {
  const { data } = await api.get<IEpisodes[]>(`/shows/${id}/episodes`);
  return data;
};

export const getEpisodeDetail = async (id: string): Promise<IEpisodeDetail> => {
  const { data } = await api.get<IEpisodeDetail>(`/episodes/${id}`);
  console.log(data);
  return data;
};
