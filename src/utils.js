function createParams (params, assert) {
  assert = assert != null ? assert : true
  if (assert) {
    // TODO: check for these properties procedurally
    if (params == null) {
      throw new Error('Must provide override params')
    }
    if (params.blockchain == null) {
      throw new Error('Must provide blockchain params')
    }
    if (params.blockchain.genesisHeader == null) {
      throw new Error('Must provide blockchain.genesisHeader')
    }
    if (params.net == null) {
      throw new Error('Must provide net params')
    }
    if (params.net.magic == null) {
      throw new Error('Must provide net.magic')
    }
    if (params.net.defaultPort == null) {
      throw new Error('Must provide net.defaultPort')
    }
    if (params.wallet == null) {
      throw new Error('Must provide wallet params')
    }
    if (params.wallet.bip32 == null) {
      throw new Error('Must provide wallet.bip32')
    }
    if (params.wallet.messagePrefix == null) {
      throw new Error('Must provide wallet.messagePrefix')
    }
    if (params.wallet.bip32.public == null) {
      throw new Error('Must provide wallet.bip32.public')
    }
    if (params.wallet.bip32.private == null) {
      throw new Error('Must provide wallet.bip32.private')
    }
    if (params.wallet.pubKeyHash == null) {
      throw new Error('Must provide wallet.pubKeyHash')
    }
    if (params.wallet.scriptHash == null) {
      throw new Error('Must provide wallet.scriptHash')
    }
    if (params.wallet.wif == null) {
      throw new Error('Must provide wallet.wif')
    }
    if (params.wallet.dustThreshold == null) {
      throw new Error('Must provide wallet.dustThreshold')
    }
  }

  function extend (child, assert) {
    var params = Object.assign({}, extend, child)
    params.blockchain = Object.assign({}, extend.blockchain, child.blockchain)
    delete params.blockchain.checkpoints
    params.net = Object.assign({}, extend.net, child.net)
    params.wallet = Object.assign({}, extend.wallet, child.wallet)
    return createParams(params, assert)
  }
  return Object.assign(extend, params)
}

module.exports = { createParams }
