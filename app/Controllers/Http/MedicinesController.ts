import Medicine from 'App/Models/Medicine'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MedicinesController {
  public async index() {
    return await Medicine.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Medicine.findOrFail(id)
  }
}
