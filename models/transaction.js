import * as QtuminfoAPI from '@/services/bcsinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return QtuminfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return QtuminfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return QtuminfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return QtuminfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return QtuminfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return QtuminfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
