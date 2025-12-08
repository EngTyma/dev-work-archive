const myBar = document.querySelector('.myBar'),
    inputField = document.querySelector('input[type="password"]'),
    message = document.querySelector('.message')


inputField.addEventListener('input', (event)=>{
    const input = event.target.value
    
    myBar.style.width = `${input.length * 10}%`

    if(input.length<5)
    {
        myBar.style.background ='red';
        message.textContent = "Password Strength: weak!"
    }else if(input.length>=5 && input.length<8)
    {
        myBar.style.background='orange'
        message.textContent = "Password Strength: Medium!"
    }else if(input.length>8)
    {
        myBar.style.background = 'green'
        message.textContent = "Password Strength: Strong!"
    }
})