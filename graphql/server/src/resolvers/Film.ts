import { Director } from '../entities/Director';
import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import ghibliData from '../data/ghibli';
import { Film } from '../entities/Film';

@Resolver(Film)
class FilmResolver {
  @Query(() => [Film])
  films(): Film[] {
    return ghibliData.films;
  }

  @FieldResolver(() => Director)
  director(@Root() parentFilm: Film): Director | undefined {
    console.log(Film);
    return ghibliData.directors.find(dr => dr.id === parentFilm.director_id);
  }
}

export { FilmResolver };