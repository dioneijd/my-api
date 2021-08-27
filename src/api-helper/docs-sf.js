const b = require('./htmlBuilder')

const SecretFriendHelpers = {

    HelpOfGroups: () => {
        let html = ''
        let temp = ''

        html += b.SetBoxTitle('<b>GROUPS - GET (list)</b>')
        html += b.SetBoxBody('<b>Url:</b> /sf/groups')
        temp  = '<b>Return 200:</b>'
        temp += b.ApiJsonReturn('["6015ed2ea9d63d26d0450ea5","6125782b3c2dcd0b983fe3c5"]')    
        html += b.SetBoxBody(temp)    

        html += '<br/><br/><br/>'    

        html += b.SetBoxTitle('<b>GROUPS - GET (by ID)</b>')
        html += b.SetBoxBody('<b>Url:</b> /sf/groups/:id')
        temp  = '<b>Return 200:</b>'
        temp += b.ApiJsonReturn('{"_id": "6015ed2ea9d63d26d0450ea5","people": [{"_id": "6015ed2ea9d63d26d0450ea6","name": "Dionei","friend": "Grasi"},{"_id": "6015ed2ea9d63d26d0450ea7","name": "Manu","friend": "Dionei"},{"_id": "6015ed2ea9d63d26d0450ea8","name": "Grasi","friend": "Manu"}],"createdAt": "2021-01-30T23:35:10.528Z","updatedAt": "2021-01-30T23:35:10.528Z","__v": 0}')
        html += b.SetBoxBody(temp)
        temp  = '<b>Return 500:</b>'
        temp += b.ApiJsonReturn('{"error": "051","errorMsg": "Group id 5fcc32cc708b471f9cef6a64 not found"}')
        html += b.SetBoxBody(temp)

        html += '<br/><br/><br/>'    

        html += b.SetBoxTitle('<b>GROUPS - POST </b>')
        html += b.SetBoxBody('<b>Url:</b> /sf/groups')
        temp  = '<b>Body Input:</b>'
        temp += b.ApiJsonReturn('{"name": "Grupo da Familia","people": [{"name": "Dionei"},{"name": "Manu"},{"name": "Duda"}]}')    
        html += b.SetBoxBody(temp)
        temp  = '<b>Return 201:</b>'
        temp += b.ApiJsonReturn('{"_id": "6125782b3c2dcd0b983fe3c5","name": "Grupo da Familia","people": [{"_id": "6125782b3c2dcd0b983fe3c6","name": "Dionei","friend": "Duda"},{"_id": "6125782b3c2dcd0b983fe3c7","name": "Manu","friend": "Dionei"},{"_id": "6125782b3c2dcd0b983fe3c8","name": "Duda","friend": "Manu"}],"createdAt": "2021-08-24T22:52:27.362Z","updatedAt": "2021-08-24T22:52:27.362Z"}')
        html += b.SetBoxBody(temp)    
        temp  = '<b>Return 400:</b>'
        temp += b.ApiJsonReturn('{"error": "041", "errorMsg": "Its missing the group name"}')
        temp += b.ApiJsonReturn('{"error": "042", "errorMsg": "Its missing the people"}')
        temp += b.ApiJsonReturn('{"error": "043", "errorMsg": "It should have at least 3 people to create a group"}')
        temp += b.ApiJsonReturn('{"error": "044", "errorMsg": "People node has duplicate names, it not allowed."}')
        html += b.SetBoxBody(temp)
        temp  = '<b>Return 500:</b>'
        temp += b.ApiJsonReturn('{"error": "051", "errorMsg": "Error to create group"}')
        html += b.SetBoxBody(temp)

        return html
    },

    HelpOfPerson: () => {
        let html = ''
        let temp = ''

        html += b.SetBoxTitle('<b>PERSON - GET (by ID)</b>')
        html += b.SetBoxBody('<b>Url:</b> /sf/p/:id')
        temp  = '<b>Return 200:</b>'
        temp += b.ApiJsonReturn('{"_id": "6125782b3c2dcd0b983fe3c7","name": "Manu","friend": "Dionei","grpName": "Grupo da Familia"}')
        html += b.SetBoxBody(temp)
        temp  = '<b>Return 404:</b>'
        temp += b.ApiJsonReturn('{"error": "041","errorMsg": "Person id 6015867353c2b20e5cbc2bca not found"}')
        html += b.SetBoxBody(temp)
        
        return html
    }
}

module.exports = SecretFriendHelpers