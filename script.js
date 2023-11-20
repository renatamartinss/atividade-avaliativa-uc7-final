document.addEventListener('DOMContentLoaded', function() {
    loadClientes();
    loadProdutos();
});

function cadastrarCliente() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const emailCliente = document.getElementById('emailCliente').value;

    const cliente = { nome: nomeCliente, email: emailCliente };

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('clienteForm').reset();

    loadClientes();
}

function cadastrarProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;

    const produto = { nome: nomeProduto, preco: precoProduto };

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);

    localStorage.setItem('produtos', JSON.stringify(produtos));
    document.getElementById('produtoForm').reset()
    loadProdutos();
}

function loadClientes() {
    const clientesList = document.getElementById('clientes-list');
    clientesList.innerHTML = ''; 

    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.forEach(cliente => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cliente.nome} - ${cliente.email}`;
        clientesList.appendChild(listItem);
    });
}

function loadProdutos() {
    const produtosList = document.getElementById('produtos-list');
    produtosList.innerHTML = ''; 

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.forEach(produto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${produto.nome} - R$ ${produto.preco}`;
        produtosList.appendChild(listItem);
    });
}