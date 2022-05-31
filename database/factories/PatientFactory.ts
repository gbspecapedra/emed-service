import Patient from 'App/Models/Patient'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(Patient, ({ faker }) => {
  return {
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    socialNumber: Number(faker.random.numeric(6)),
    birthday: DateTime.fromISO(faker.date.past(10).toISOString()),
    gender: faker.name.gender(),
    contact: faker.phone.phoneNumber('+### ### ### ### ##'),
    zipcode: faker.address.zipCode(),
    street: faker.address.streetName(),
    number: Number(faker.address.buildingNumber()),
    country: faker.address.countryCode('alpha-2'),
    state: faker.address.stateAbbr(),
    city: faker.address.cityName(),
    county: faker.address.county(),
    active: true,
  }
}).build()
