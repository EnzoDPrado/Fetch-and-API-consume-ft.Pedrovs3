const fetchAPI = async() => {
    const response = await fetch("http://localhost:8080/alunos");
    const json = await response.json();
    return json;
}

const all = document.querySelector('.all');

const generate = async() => {
    let alunos = await fetchAPI();
    alunos = alunos.alunos;
    
    alunos.forEach(name => {
        const h1 = document.createElement('h1');
        h1.setAttribute('id', name.matricula);
        h1.textContent = name.nome;

        all.appendChild(h1);
    })
    
}

all.addEventListener('click', (e) => {
    console.log(e.target.id);
    localStorage.setItem('matricula', e.target.id);
})

console.log(await fetchAPI());
console.log(await generate());