const fetchAPI = async() =>{
    const response = await fetch("http://localhost:8080/cursos")
    const json = await response.json();
    return json;
}

const divPai = document.querySelector('.geral');
console.log(divPai);

const coisaTela = async() => {
    let cursos = await fetchAPI();
    cursos = cursos.cursosInfos;
    cursos.forEach(curse => {
        const a = document.createElement('a');
        a.textContent = curse.sigla;
        a.classList.add('string')
        a.setAttribute('id', curse.sigla);
        console.log(a);

        a.setAttribute('href', './aluno.html');

        divPai.appendChild(a);
    })

}

divPai.addEventListener('click', (e) => {
    console.log(e.target.id)
    localStorage.setItem('idCurso', e.target.id);
})



console.log(await fetchAPI());
console.log(await coisaTela());