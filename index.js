const express = require("express")
const app = express()
const PORT = 3000

function isprime(n){
    // edge case 
    if (n === 1) 
        return false

    // edge case 
    if ( n=== 0)
        return false

    let i = 0 
    for(let i=2; i<n;i++){
        if (n%i === 0)
            return false
    }
    return true 

}

// endpoint -> /is-prime>7
app.get('/is-prime', (req, res) => {
    const {number} = req.query

    // error handling 
    if (!number || isNaN(number)){
        return res.status(400).json({error : "Please provide valid input"})
    }

    const num = parseInt(number)
    const result = isprime(num)

    // response
    res.json({number : num, isPrime:result})

})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT : ${PORT}`)
})

