import * as QtumCashinfoAPI from '@/services/qtumcashinfo-api'

function formatTimestamp(date) {
  let yyyy = date.getUTCFullYear().toString()
  let mm = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  let dd = date.getUTCDate().toString().padStart(2, '0')
  return yyyy + '-' + mm + '-' + dd
}

class Block {
  static get(id, options = {}) {
    return QtumCashinfoAPI.get(`/block/${id}`, options)
  }

  static getRecentBlocks(options = {}) {
    return QtumCashinfoAPI.get('/recent-blocks', options)
  }

  static getBlocksByDate(date = new Date(), options = {}) {
    return QtumCashinfoAPI.get('/blocks', {params: {date: formatTimestamp(date)}, ...options})
  }
}

export default Block
