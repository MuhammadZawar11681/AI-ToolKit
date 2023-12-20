const { Configuration, OpenAIApi } = require('openai');
// let aOld = "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"
let a = "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"
let conf = {
    apiKey: a
}
const configuration = new Configuration(conf);
const openai = new OpenAIApi(configuration);
console.log(configuration)
console.log(openai)
export async function sendMsgToOpenAI(message) {
    // const configuration = new Configuration({ apikey: a });
    // const openai = new OpenAIApi(configuration);

    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}

