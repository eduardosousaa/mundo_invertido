import { getHellfireSubscriptions,  subscribeToToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName')
const txtEmail=document.getElementById('txtEmail')
const txtLevel=document.getElementById('txtLevel')
const txtCharacter=document.getElementById('txtCharacter')

const btnSubscribe=document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () =>{

    if (txtName.value !== '' && txtEmail.value !== '' && txtLevel.value !== '' && txtCharacter.value !== '') {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        //Salvar no banco de dados
        const subscriptionId = await subscribeToToHellfireClub(subscription)

        alert('Parabéns ' + txtName.value + ', agora você faz parte do clube de D&D mais famoso de Hawkings')

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''

    } 
    else {
        alert('Preencha todos os campos corretamente! :(')
    }
    
})

// async function loadDate() {
//     const subscriptions = await getHellfireSubscriptions()
//     console.log(subscriptions)
// }

// loadDate()
