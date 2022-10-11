const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.innerText = 'Processing'
    messageTwo.innerText = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                messageOne.innerText = data.error
                messageTwo.innerText = '' 
            } else {
                messageOne.innerText = data.location
                messageTwo.innerHTML = data.forecast
            }
        })
    })
    
})

