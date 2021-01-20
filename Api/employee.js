const Joi = require('joi');

// REGISTER CALL API
const AddEmployee = (req, res) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }
    const Schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phoneNumber: Joi.number().min(10).max(10).valid(10).required(),
        password: Joi.string().min(8).max(16).regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    })
    const Validation = Schema.validate(data, (err, value, next) => {
        if(err) {
            res.status(400).json({
                success: false,
                message: err
            });
        } else {
            res.status(201).json({
                success: true,
                data: value
            })
        }
        next();
    });
    res.send(Validation);
}

module.exports = AddEmployee;
