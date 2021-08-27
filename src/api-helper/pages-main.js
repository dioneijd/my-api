const c = require('./components')

const pages = {

    PageMain: () => {
        let html = ''

        html  = c.SetPageHeader('MY API')
        html += c.SetButton('<p>SECRET FRIEND<p>', '/help/sf')
    
        return html
    }


}

module.exports = pages