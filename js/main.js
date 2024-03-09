document.querySelector('#gerar').addEventListener('click', calcular);

function calcular() {
    let n = Number(document.querySelector('#numero').value);
    let res = document.querySelector('#res');

    res.innerHTML = '';

    if (document.querySelector('#numero').value == '') {
        alert('Preencha o campo abaixo para calcular');
        res.style.display = 'none';
    }
    else {
        res.style.display = 'block';
        for (i = 1; i<=10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `v${i};`
            res.appendChild(item);
        }
    }
}