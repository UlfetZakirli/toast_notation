let messageContent = document.querySelector('#message-content')
let duration = document.querySelector('#duration')
let cancelable = document.querySelector('#cancelable')
let success = document.querySelector('#success')
let error = document.querySelector('#error')
let addButton = document.querySelector('#add-button')
let clearButton = document.querySelector('#clear-button')
let toasts = document.querySelector('#toasts')



addButton.addEventListener('click', (event) => {
    event.preventDefault()
    const toast = document.createElement('div')
    const message = document.createElement('p')
    const cancelButton = document.createElement('button')
    toast.classList.add('toast')

    toasts.appendChild(toast)
    toast.appendChild(message)
    toast.appendChild(cancelButton)

    message.innerHTML = messageContent.value;
    cancelButton.innerHTML = "X";
    !cancelable.checked ? cancelButton.style.display = 'none' : 'block';

    if (success.checked) {
        toast.classList.add('success-toast')
        cancelButton.classList.add('cancel-button')
        message.classList.add('message')

        if (messageContent.value === "") {
            message.innerHTML = "Success"
        }
    }
    if (error.checked) {
        toast.classList.add('error-toast')
        cancelButton.classList.add('cancel-button')
        message.classList.add('message')
        if (messageContent.value === "") {
            message.innerHTML = "Error"
        }
    }
    cancelButton.addEventListener('click', () => {
        cancelButton.parentElement.remove()
    })
    setTimeout(()=>{
        toast.remove()
    },getDuration());
    messageContent.value=''

      




})

function getDuration(){
if(duration.value==="" || duration.value<500 || duration.value===isNaN){
    return 500
}else{
    return duration.value
}
}
    


clearButton.addEventListener('click', () => {
    toasts.innerHTML = ""
})
