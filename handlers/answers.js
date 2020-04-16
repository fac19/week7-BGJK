const model = require("../model/answer-model");

function getAnswers(req, res, next) {
    model
    .getAllAnswers()
    .then(answers => {
        res.status(200).send(answers)
    })
    .catch(next)
}


function createNewAnswer(req, res, next) {
    const answer = req.body.answer;
    const question = req.body.question;
    const authHeader = req.headers.authorization; //come back to this in the afternoon, requires authenticating the tokens

    model
    .createNewAnswer(1, question, answer)
    .then(data => {
        res.status(201).send(data)
    })
    .catch(next)
}

function updateAnswer(req, res, next) {
    const answerId = req.params.id; 
    const newAnswer = req.body.answer;
    
        model.updateAnswer(answerId, newAnswer)
        .then(answer => {
            res.status(200).send(answer)
        })
    .catch(next)
}

function deleteAnswer(req, res, next) {
    const answerId = req.params.id;
    model.deleteAnswer(answerId)
    .then( () => {
        res.status(204).send()
    })
    .catch(next)
}

module.exports = { getAnswers, createNewAnswer, updateAnswer, deleteAnswer }