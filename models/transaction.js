import * as QtumCashinfoAPI from '@/services/qtumcashinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return QtumCashinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return QtumCashinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return QtumCashinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return QtumCashinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return QtumCashinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return QtumCashinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
