/* test expect, describe, afterAll, beforeEach */


const { resolve } = require('path')
const { chdirTestApp, chdirCwd } = require('../../utils/helpers')

chdirTestApp()

describe('Environment', () => {
  afterAll(chdirCwd)

  describe('toWebpackConfig', () => {
    beforeEach(() => jest.resetModules())

    test('should return test output paths', () => {
      process.env.RAILS_ENV = 'test'
      const Environment = require('../base')
      const environment = new Environment()

      const config = environment.toWebpackConfig()
      expect(config.output.filename).toEqual('[name]-[chunkhash].js')
      expect(config.output.chunkFilename).toEqual('[name]-[chunkhash].chunk.js')
      expect(config.output.path).toEqual(resolve('public', 'packs-test'))
      expect(config.output.publicPath).toEqual('/packs-test/')
    })
  })
})
