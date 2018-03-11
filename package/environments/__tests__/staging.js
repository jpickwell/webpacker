/* test expect, describe, afterAll, beforeEach */

const { resolve } = require('path')
const { chdirTestApp, chdirCwd } = require('../../utils/helpers')

chdirTestApp()

describe('Environment', () => {
  afterAll(chdirCwd)

  describe('toWebpackConfig', () => {
    beforeEach(() => jest.resetModules())

    test('should return staging output paths', () => {
      process.env.RAILS_ENV = 'staging'
      const Environment = require('../base')
      const environment = new Environment()

      const config = environment.toWebpackConfig()
      expect(config.output.path).toEqual(resolve('public', 'packs-staging'))
      expect(config.output.publicPath).toEqual('/packs-staging/')
    })
  })
})
