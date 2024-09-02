const btsEdit = document.querySelectorAll('.buttons.edit')
const btsCanc = document.querySelectorAll('.buttons.canc')
const btsSalv = document.querySelectorAll('.buttons.salv')

const ids = [];
const Valores = []
const ValoresNovos = []

window.addEventListener('load', () => 
{
    for (let i = 0; i < btsEdit.length; i++) 
    {
        ids[i] = btsEdit[i].id
        btsEdit[i].setAttribute('onClick', `editar(${ids[i]})`)
        btsCanc[i].setAttribute('onClick', `cancelar(${ids[i]})`)
        btsSalv[i].setAttribute('onClick', `salvar(${ids[i]})`)
    }
})

function editar (id) 
{
    let linha = document.getElementById(`linha${id}`)

    let criancas = linha.children

    for (let i = 0; i < btsEdit.length; i++) 
    {
        btsEdit[i].style = 'transition: 0.3s; left: -1.8rem;'        
    }

    let save = criancas[8].children[0]
    save.style = 'transition: 0.3s; left: 0;'

    let cancel = criancas[8].children[1] 
    cancel.style = 'transition: 0.3s; left: 0;'

    let btDelete = criancas[0].children[1]
    btDelete.style.display = 'flex'

    let btFoto = criancas[7].children[2]
    btFoto.style.display = 'flex'

    let contrato = criancas[5].children[0]
    contrato.style = 'font-size: 0.6rem'

    for (let i = 0; i < 6; i++)
    {
        let y = i+1

        criancas[y].setAttribute('contenteditable', '')

        if (y == 5) Valores[i] = criancas[y].children[0].innerHTML
        else Valores[i] = criancas[y].innerHTML
    }

    console.log(Valores)
}

function cancelar (id)
{
    let linha = document.getElementById(`linha${id}`)
    let criancas = linha.children

    for (let i = 0; i < btsEdit.length; i++) 
    {
        btsEdit[i].style = 'transition: 0.3s; left: 0;'

        btsCanc[i].style = 'transition: 0.3s; left: -1.8rem;'

        btsSalv[i].style = 'transition: 0.3s; left: -3.6rem;'
    }

    let btDelete = criancas[0].children[1]
    btDelete.style.display = 'none'

    let btFoto = criancas[7].children[2]
    btFoto.style.display = 'none'

    let contrato = criancas[5].children[0]
    contrato.style = 'font-size: 0'

    for (let i = 1; i < 7; i++)
    {
        criancas[i].removeAttribute('contenteditable')
        if (i != 5) criancas[i].innerHTML = Valores[i-1]
        else criancas[i].children[0].innerHTML = Valores [i-1]
    }
}

function salvar (id)
{
    let linha = document.getElementById(`linha${id}`)
    let criancas = linha.children

    let m = ''

    for (let i = 1; i < 7; i++) {
        if (i != 5) ValoresNovos[i-1] = criancas[i].innerHTML
        else ValoresNovos[i-1] = criancas[i].children[0].innerHTML

        if (Valores[i-1] == ValoresNovos[i-1]) m += 'Igual '
        else m += 'Diferente '
    }

    console.log(ValoresNovos)
    console.log(m)
}

const inFoto = document.getElementById('inFoto')
const previewFoto = document.getElementById('previewFoto')

inFoto.addEventListener('change', function () {
    previewFoto.src=URL.createObjectURL(event.target.files[0])
})

const mrJogos = document.getElementById('mrJogos')
const ctrlJogos = document.getElementById('ctrlJogos')

mrJogos.addEventListener('click', function ()
{
    ctrlJogos.scrollIntoView({behavior:'smooth'})
})

const mrJogadores = document.getElementById('mrJogadores')
const ctrlJogadores = document.getElementById('ctrlJogadores')

mrJogadores.addEventListener('click', function ()
{
    ctrlJogadores.scrollIntoView({behavior:'smooth'})
})