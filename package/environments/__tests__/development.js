/* test expect, describe, afterAll, beforeEach */

const { resolve } = require('path')
const { chdirTestApp, chdirCwd } = require('../../utils/helpers')

chdirTestApp()

describe('Environment', () => {
  afterAll(chdirCwd)

  describe('toWebpackConfig', () => {
    beforeEach(() => jest.resetModules())

    test('should return development config options', () => {
      process.env.RAILS_ENV = 'development'
      const Environment = require('../development')
      const environment = new Environment()

      const config = environment.toWebpackConfig()
      expect(config).toMatchObject({
        devServer: {
          host: 'localhost',
          port: 3035
        }
      })
    })
  })
})
