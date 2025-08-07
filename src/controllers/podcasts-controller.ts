import { IncomingMessage, ServerResponse } from "http";

import { serviceListEposides } from "../services/list-episodes-service";
import { serviceFilterEposides } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../model/podcast-transfer-model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEposides();

  res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body))
  res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: PodcastTransferModel = await serviceFilterEposides(req.url);

  res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body))
  res.end();
}