import { Injectable } from '@nestjs/common';
import { Person, PersonUpdatingRequest } from './person';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  list(): Person[] {
    return this.people;
  }

  findById(id: number): Person {
    return this.people.find((person: Person) => id == person.id);
  }

  save(person: Person): void {
    this.people.push(person);
  }

  update(id: number, personUpdateData: PersonUpdatingRequest): void {
    this.people.forEach((person: Person) => {
      if (id == person.id) {
        person.name = personUpdateData.name;
      }
    });
  }

  delete(id: number) {
    const newList = this.people.filter((person: Person) => person.id != id);
    this.people = newList;
  }
}
