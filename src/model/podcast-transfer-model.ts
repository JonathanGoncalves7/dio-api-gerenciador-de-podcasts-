import { PodcastModel } from "./podcast";

export interface PodcastTransferModel {
    statusCode: number,
    body: PodcastModel[];
}