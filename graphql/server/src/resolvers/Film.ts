import { Query, Resolver } from 'type-graphql';
import ghibliData from '../data/ghibli';
import { Film } from '../entities/Film';

@Resolver(Film)
class FilmResolver {
  @Query(() => String)
  async hello() {
    return 'hello world';
  }
}

export { FilmResolver };
