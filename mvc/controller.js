module.exports = class Controller {

    constructor(model) {
        this.model = model;
    }

    runTest = async (req, res, next) => {
        try {
            const { challenge_id } = req.params;
            const userInput = req.body;
            const result = await this.model.runTest(challenge_id, userInput);
            res.status(200).send({ result });

        } catch(err) {
            next(err);
        }
    }
}