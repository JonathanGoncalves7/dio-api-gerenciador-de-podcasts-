import { PodcastTransferModel } from "../model/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEposides = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
    const queryString = podcastName?.split('?p=')[1] || '';
    const data = await repositoryPodcast(queryString);

    const responseformat: PodcastTransferModel = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseformat;
}