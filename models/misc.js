import * as QtumCashinfoAPI from '@/services/qtumcashinfo-api'

class Misc {
  static info(options = {}) {
    return QtumCashinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return QtumCashinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return QtumCashinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return QtumCashinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return QtumCashinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return QtumCashinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return QtumCashinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
