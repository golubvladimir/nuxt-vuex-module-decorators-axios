import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { $axios } from '~/utils/axios';

interface Person {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string
}

@Module({
  name: 'example',
  stateFactory: true,
  namespaced: true,
})
export default class Example extends VuexModule {
  persons: Array<Person> = [];

  @Mutation
  addPerson(person: Person) {
    this.persons.push(person);
  }

  @Action({ commit: 'addPerson' })
  async getPerson(): Promise<Person> {
    return await $axios.$get('https://swapi.dev/api/people/1');
  }
}
