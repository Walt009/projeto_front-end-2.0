console.log("Página inicial carregada.");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "usuario@poli.com" && senha === "senha123") {
        alert("Login bem-sucedido!");
        window.location.href = "painel.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome && email && senha) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

document.getElementById("recuperarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    
    if (email) {
        alert("Instruções de recuperação de senha enviadas para " + email);
        window.location.href = "login.html";
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});

const tickets = [
    { id: 1, titulo: 'Problema no login', status: 'Aberto' },
    { id: 2, titulo: 'Erro de conexão', status: 'Em andamento' },
    { id: 3, titulo: 'Funcionalidade não disponível', status: 'Fechado' }
];

document.addEventListener("DOMContentLoaded", function() {
    const ticketTableBody = document.getElementById("ticketTableBody");

    tickets.forEach(ticket => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${ticket.id}</td>
            <td>${ticket.titulo}</td>
            <td>${ticket.status}</td>
            <td>
                <a href="visualizar-ticket.html?id=${ticket.id}" class="btn-secondary">Ver</a>
            </td>
        `;

        ticketTableBody.appendChild(row);
    });
});

const ticket = [
    { id: 1, titulo: 'Problema no login', descricao: 'Não consigo acessar minha conta', status: 'Aberto' },
    { id: 2, titulo: 'Erro de conexão', descricao: 'A aplicação não se conecta à internet', status: 'Em andamento' },
    { id: 3, titulo: 'Funcionalidade não disponível', descricao: 'Botão de enviar não funciona', status: 'Fechado' }
];

function getTicketById(id) {
    return tickets.find(ticket => ticket.id === parseInt(id));
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const ticketId = params.get('id');

    const ticket = getTicketById(ticketId);

    if (ticket) {
        const ticketInfo = document.getElementById("ticketInfo");
        ticketInfo.innerHTML = `
            <p><label>ID:</label> ${ticket.id}</p>
            <p><label>Título:</label> ${ticket.titulo}</p>
            <p><label>Descrição:</label> ${ticket.descricao}</p>
            <p><label>Status:</label> ${ticket.status}</p>
        `;
    } else {
        alert("Ticket não encontrado!");
    }
});

document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    if (titulo && descricao) {
        alert("Ticket criado com sucesso!");
        window.location.href = "painel.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
