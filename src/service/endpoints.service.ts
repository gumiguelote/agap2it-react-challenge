import { IEpisodeDetails } from "../interface/episodeDetails.interface";
import { IEpisode } from "../interface/episode.interface";
import { IShow } from "../interface/show.interface";
import api from "./api.service";

export const getShow = async (id: string): Promise<IShow> => {
  const { data } = await api.get<IShow>(`/shows/${id}`);
  return data;
};

export const getEpisodes = async (id: string): Promise<IEpisode[]> => {
  const { data } = await api.get<IEpisode[]>(`/shows/${id}/episodes`);
  return data;
};

export const getEpisodeDetail = async (
  id: string,
): Promise<IEpisodeDetails> => {
  const { data } = await api.get<IEpisodeDetails>(`/episodes/${id}`);
  return data;
};
