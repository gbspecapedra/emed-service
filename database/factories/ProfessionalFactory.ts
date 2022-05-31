import Professional from 'App/Models/Professional'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Professional, ({ faker }) => {
  return {
    role: 'DOCTOR',
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    registrationNumber: faker.datatype.number({ min: 6 }),
    registrationState: faker.address.stateAbbr(),
    specialty: faker.name.jobType(),
    email: `doctor${faker.datatype.number({ precision: 1 })}@emed.com`,
    password: '1234567Aa!',
    active: true,
  }
}).build()
