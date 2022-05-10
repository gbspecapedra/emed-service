import { test } from '@japa/runner'

test('display welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({
    info: {
      title: 'eMED',
      subtitle: 'Medical Clinic Management System',
      description:
        'Final project of the Specialization Course in Web Application Development at the Pontifical Catholic University of Minas Gerais as a partial requirement to obtain the title of specialist.',
    },
  })
})
