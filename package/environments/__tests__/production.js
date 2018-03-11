/* test expect, describe, afterAll, beforeEach */

const { resolve } = require('path')
const { chdirTestApp, chdirCwd } = require('../../utils/helpers')

chdirTestApp()

describe('Environment', () => {
  afterAll(chdirCwd)

  describe('toWebpackConfig', () => {
    beforeEach(() => jest.resetModules())

    test('should return production config options', () => {
      process.env.RAILS_ENV = 'production'
      const Environment = require('../production')
      const environment = new Environment()

      const config = environment.toWebpackConfig()
      expect(config).toMatchObject({
        devtool: 'nosources-source-map',
        stats: 'normal'
      })
    })
  })
})
