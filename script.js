document.getElementById('adicionarBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    if (nome && data && horario) {
        const guestCard = document.createElement('div');
        guestCard.className = 'guest-card';
        guestCard.innerHTML = `<strong>Nome:</strong> ${nome}<br><strong>Data:</strong> ${data}<br><strong>Horário:</strong> ${horario}`;
        document.getElementById('guestList').appendChild(guestCard);
        document.getElementById('nome').value = '';
        document.getElementById('data').value = '';
        document.getElementById('horario').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
 });