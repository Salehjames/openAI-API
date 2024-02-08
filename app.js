const API_KEY = "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"
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')

async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "Hello!"}],
            max_tokens: 100
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            outPutElement.textContent = data.choices[0].message.content
        } else {
            outPutElement.textContent = "No response from the AI."
        }    } catch (error){
    console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)