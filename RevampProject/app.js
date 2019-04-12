$(document).ready(function () {
    $('.submit').click(function (event){
        
        var firstName = $('.firstName').val()
        var lastName = $('.lastName').val()
        var email = $('.email').val()
        var status = $('.status')
        status.empty()
        
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('')
        } else {
            event.preventDefault()
            status.append('<div>Email not valid</div>')
        }
        
        if (firstName.length > 1){
            status.append('')
        } else {
            event.preventDefault()
            status.append('<div>Please Enter a First Name </div>')
        }
        
        if (lastName.length > 1){
            status.append('')
        } else {
            event.preventDefault()
            status.append('<div>Please Enter a surname </div')
        }
    })
})