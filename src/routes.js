const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{

    let html, temp
    html = ''
    
    html += '<h1 style="font-family: sans-serif; font-size: 38px">My APIs</h1>'
    html += '<hr style="border: 1px solid #66cc91"/>'
    html += '<h3>SECRECT FRIEND</h3>'

    html += SetBoxTitle('<b>GROUPS - GET (list)</b>')
    html += SetBoxBody('<b>Url:</b> /sf/groups')
    temp  = '<b>Success Return:</b>'
    temp += ApiJsonReturn('["6015ed2ea9d63d26d0450ea5","6125782b3c2dcd0b983fe3c5"]')    
    html += SetBoxBody(temp)    

    html += '<br/><br/><br/>'    

    html += SetBoxTitle('<b>GROUPS - GET (by ID)</b>')
    html += SetBoxBody('<b>Url:</b> /sf/groups/:id')
    temp  = '<b>Success Return:</b>'
    temp += ApiJsonReturn('{ "name": "Grupo da Familia", "people": [ { "name": "Dionei" }, { "name": "Manu" }, { "name": "Duda" } ] }')    
    html += SetBoxBody(temp)
    temp  = '<b>Error Return 500:</b>'
    temp += ApiJsonReturn('{"errorMsg": "Group id 5fcc32cc708b471f9cef6a64 not found"}')
    html += SetBoxBody(temp)

    html += '<br/><br/><br/>'    

    html += SetBoxTitle('<b>GROUPS - POST </b>')
    html += SetBoxBody('<b>Url:</b> /sf/groups')
    temp  = '<b>Body Input:</b>'
    temp += ApiJsonReturn('{"name": "Grupo da Familia","people": [{"name": "Dionei"},{"name": "Manu"},{"name": "Duda"}]}')    
    html += SetBoxBody(temp)
    temp  = '<b>Success Return:</b>'
    temp += ApiJsonReturn('{"_id": "6125782b3c2dcd0b983fe3c5","name": "Grupo da Familia","people": [{"_id": "6125782b3c2dcd0b983fe3c6","name": "Dionei","friend": "Duda"},{"_id": "6125782b3c2dcd0b983fe3c7","name": "Manu","friend": "Dionei"},{"_id": "6125782b3c2dcd0b983fe3c8","name": "Duda","friend": "Manu"}],"createdAt": "2021-08-24T22:52:27.362Z","updatedAt": "2021-08-24T22:52:27.362Z"}')
    html += SetBoxBody(temp)    
    temp  = '<b>Error Return 400:</b>'
    temp += ApiJsonReturn('{"errorMsg": "Its missing the group name"}')
    temp += ApiJsonReturn('{"errorMsg": "Its missing the people"}')
    temp += ApiJsonReturn('{"errorMsg": "It should have at least 3 people to create a group"}')
    html += SetBoxBody(temp)
    temp  = '<b>Error Return 500:</b>'
    temp += ApiJsonReturn('{"errorMsg": "Error to create group"}')
    html += SetBoxBody(temp)

    html += '<br/><br/><br/>'    

    html += SetBoxTitle('<b>PERSON - GET (by ID)</b>')
    html += SetBoxBody('<b>Url:</b> /sf/p/:id')
    temp  = '<b>Success Return:</b>'
    temp += ApiJsonReturn('{"_id": "6125782b3c2dcd0b983fe3c7","name": "Manu","friend": "Dionei","grpName": "Grupo da Familia"}')
    html += SetBoxBody(temp)
    temp  = '<b>Error Return 404:</b>'
    temp += ApiJsonReturn('{"errorMsg": "Person id 6015867353c2b20e5cbc2bca not found"}')
    html += SetBoxBody(temp)

    return res.send(html)
} )

function SetBoxTitle(children){
    const style = `
                 background: #66cc91; 
                 padding: 10px;
                 margin: 0px;
                 font-family: sans-serif;
                `

    return `<div style="${style}">
                ${children}
            </div>`
}

function SetBoxBody(children){
    const style = `
                 background: #ffffff; 
                 padding: 10px;
                 margin: 0px;
                 border: solid 1px #66cc91;
                 font-family: sans-serif;
                `

    return `<div style="${style}">
                ${children}
            </div>`

}

function ApiJsonReturn(jsonStr){
    const json = JSON.stringify(JSON.parse(jsonStr),null,4)
    const rows = (json.match(new RegExp('\n', 'g')) || []).length + 2

    const styleDiv = `
                 background: #f0f0f0; 
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
}

module.exports = routes