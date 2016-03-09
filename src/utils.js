function createParams (params, assert) {
  assert = assert != null ? assert : true
  if (assert) {
    if (!params) {
      throw new Error('Must provide override params')
    }
    if (!params.blockchain) {
      throw new Error('Must provide blockchain params')
    }
    if (!params.blockchain.genesisHeader) {
      throw new Error('Must provide blockchain.genesisHeader')
    }
    if (!params.net) {
      throw new Error('Must provide net params')
    }
    if (params.net.magic == null) {
      throw new Error('Must provide net.magic')
    }
    if (!params.net.defaultPort) {
      throw new Error('Must provide net.defaultPort')
    }
  }

  function extend (child, assert) {
    var params = Object.assign({}, extend, child)
    params.blockchain = Object.assign({}, extend.blockchain, child.blockchain)
    params.net = Object.assign({}, extend.net, child.net)
    return createParams(params, assert)
  }
  return Object.assign(extend, params)
}

module.exports = { createParams }
