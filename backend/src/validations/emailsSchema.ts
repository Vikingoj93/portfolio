import {checkSchema} from 'express-validator';

const emailsSchema = checkSchema({
    name : {
        isString: true,
        isLength: { options: {min: 3, max: 16} },
        trim: true,
        escape: true,
        notEmpty: true,
        errorMessage: 'invalid name' 
    },
    email : {
        isEmail: true,
        trim: true,
        escape: true,
        notEmpty: true,
        errorMessage: 'invalid email' 
    },
    description: {
        notEmpty: true,
        trim: true,
        escape: true,
        isLength: {options: {min: 16, max: 155}},
        errorMessage: 'invalid description' 
    }
})

export default emailsSchema;