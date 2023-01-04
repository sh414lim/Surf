import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Film {
  @Field(() => Int, { description: '영화 고유 아이디' })
  id: number;

  @Field({ description: 'Movie title' })
  title: string;

  @Field({ nullable: true, description: 'Movie subtitle' })
  subtitle?: string;

  @Field({ nullable: true, description: 'Movie Genre' })
  genre: string;

  @Field({ nullable: true, description: 'Movie runningTime.minute' })
  runningTime: number;

  @Field({ nullable: true, description: 'Movie dsscription' })
  description: string;

  @Field({ nullable: true, description: 'Movie director Id' })
  director_id: number;

  @Field({ nullable: true, description: 'Movie PosterUrl' })
  posterImg: string;

  @Field({ nullable: true, description: 'Movie release' })
  release: string;
}
