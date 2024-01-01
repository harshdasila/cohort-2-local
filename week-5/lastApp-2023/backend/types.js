const zod = require('zod');

const inputType =zod.object({
    title: zod.string(),
    description: zod.string()
})

const markAsDoneType = zod.object({
    id: zod.string(),
})

module.exports = {
    inputType: inputType,
    markAsDoneType: markAsDoneType
}