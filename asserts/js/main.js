import { getHellfireSubscriptions,  subscribeToToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () =>{

    if (validatorEmail(txtEmail.value) !== true) {
        alert('Por favor, insira um endereço de email válido (Ex: name@gmail.com)')
        txtEmail.value = ''
    }

    else if (txtName.value !== '' && txtEmail.value !== '' && txtLevel.value !== '' && txtCharacter.value !== '') {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        //Salvar no banco de dados.
        const subscriptionId = await subscribeToToHellfireClub(subscription)

        alert('Parabéns ' + txtName.value + ', agora você faz parte do clube de D&D mais famoso de Hawkings')

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''

    } 
    else {
        alert('Você precisa preencher todos os campos! :(')
    }
    
})

txtEmail.addEventListener("keyup", () => {
    if (validatorEmail(txtEmail.value) !== true) {
        console.log('')
    } else {
        console.log('')
    }
});

function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

// async function loadDate() {
//     const subscriptions = await getHellfireSubscriptions()
//     console.log(subscriptions)
// }

// loadDate()
