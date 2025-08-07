import { PodcastTransferModel } from "../model/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEposides = async (): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast();

  const responseformat: PodcastTransferModel = {
    statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data
  }

  return responseformat;
};
