const API_KEY = "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"

async function fetchData( ) {
    const response = await fetch('http://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            messages: [
                {
                    role: "user",
                    content: "Hello"
                }
            ]
        })
    })
    const data = await response.json()
    console.log(data)
}


fetchData()