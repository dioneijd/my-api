const lightGreen = '#66cc91',
      lightGray  = '#f0f0f0',
      white      = '#ffffff'



const components = {

    SetPageHeader: (title, subTitle) => {
        const style = `
                    background: ${lightGray};
                    position: fixed;
                    padding-left: 10px;
                    top: 0;
                    left: 0;
                    width: 100%;
                    border-bottom: 2px solid ${lightGreen};
                    box-shadow: 0px 1px 5px ${lightGreen};
                    `

        return `<div style="${style}">
                    <h1 style="font-family: sans-serif; font-size: 38px; margin-bottom: 10px">${title}</h1>
                    ${(subTitle) ? `<h3 style="font-family: sans-serif; margin: -10px 0 10px 0; color: ${lightGreen}" >${subTitle}</h3>` : ''}
                </div>
                <div style="height: 110px; background: ${white};"></div>`

    },

    SetBoxTitle: (children) => {
        const style = `
                    background: ${lightGreen};
                    padding: 10px;
                    margin: 0px;
                    font-family: sans-serif;
                    `

        return `<div style="${style}">
                    ${children}
                </div>`
    },

    SetBoxBody: (children) => {
        const style = `
                    background: ${white}; 
                    padding: 10px;
                    margin: 0px;
                    border: solid 1px ${lightGreen}; 
                    border-top-style: none;
                    font-family: sans-serif;
                    `

        return `<div style="${style}">
                    ${children}
                </div>`
    },

    ApiJsonReturn: (jsonStr) => {
        const json = JSON.stringify(JSON.parse(jsonStr),null,4)
        const rows = (json.match(new RegExp('\n', 'g')) || []).length + 2

        const styleDiv = `
                    background: ${lightGray}; 
                    padding: 20px;
                    margin-top: 5px;
                    `
        
        const styleTxt = `
                    background: transparent;
                    border: none;
                    resize: none;
                    font-family: sans-serif;
                    `

        return `<div style="${styleDiv}">
                    <textarea style="${styleTxt}" readonly rows=${rows} cols="100%">${json}
                    </textarea>
                </div>`
    },

    SetButton: (text, url) => {
        const style = `
                    padding: 0px 10px;
                    margin-right: 10px;
                    font-family: sans-serif;
                    box-shadow: 1px 1px 3px ${lightGreen};
                    cursor: pointer;
                    min-width: 80px;
                    `

        return `<form action="${url}" style="display: inline;">
                    <button style="${style}" type="submit">${text}</button>
                </form>`

    }
}

module.exports = components