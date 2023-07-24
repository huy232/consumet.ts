import { BaseParser, TvType, ISource, IEpisodeServer, IMovieInfo, IAnimeInfo, ProxyConfig } from '.';

abstract class MovieParser extends BaseParser {
  constructor(baseUrl?: string, proxyConfig?: ProxyConfig) {
    super(baseUrl, proxyConfig);
  }

  /**
   * The supported types of the provider (e.g. `TV`, `Movie`)
   */
  abstract supportedTypes: Set<TvType>;

  /**
   * takes media id
   *
   * returns media info (including episodes)
   */
  abstract fetchMediaInfo(mediaId: string, type?: string): Promise<IMovieInfo | IAnimeInfo>;

  /**
   * takes episode id
   *
   * returns episode sources (video links)
   */
  abstract fetchEpisodeSources(episodeId: string, ...args: any): Promise<ISource>;

  /**
   * takes episode id
   *
   * returns episode servers (video links) available
   */
  abstract fetchEpisodeServers(episodeId: string, ...args: any): Promise<IEpisodeServer[]>;
}

export default MovieParser;
