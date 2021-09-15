const materias = [];
const submitBtn = document.getElementById('submit-btn');

function addEventButtonLogin() {
  document.getElementById('button').addEventListener('click', (event) => {
    const t = document.getElementById('login').value === 'tryber@teste.com';
    const s = document.getElementById('senha').value === '123456';
    event.preventDefault();
    if (t && s) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function checked() {
  const subject = document.querySelectorAll('.subject');
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked === true) {
      materias.push(subject[i].value);
    }
  }
}

function addEventCheck() {
  document.getElementById('agreement').addEventListener('click', () => {
    if (document.getElementById('agreement').checked) {
      submitBtn.disabled = false;
    } else submitBtn.disabled = true;
  });
}

submitBtn.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;
  checked();
  form.innerHTML = `
  <p>Nome: ${nome} ${sobrenome}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${casa}</p>
  <p>Família: ${familia}</p>
  <p>Matérias: ${materias.join(', ')}</p>
  <p>Avaliação: ${avaliacao}</p>
  <p>Observações: ${observacoes}</p>`;
});

function addEventButtonEnviar() {
  document.getElementById('textarea').addEventListener('input', () => {
    const b = 500 - document.getElementById('textarea').value.length;
    if (b >= 0) {
      document.getElementById('counter').innerText = b;
    }
  });
}

window.onload = () => {
  addEventButtonLogin();
  addEventCheck();
  addEventButtonEnviar();
};
