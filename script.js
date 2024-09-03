let totalCarrinho = 0; 

function calcularTotal() {
    let valor = 0;
    let fruta = document.getElementById("fruta").value;
    let qntd = parseInt(document.getElementById("qntd").value, 10);

    if (isNaN(qntd) || qntd <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    switch (fruta) {
        case "banana":
            valor = 2.00;
            break;
        case "maca":
            valor = 3.00;
            break;
        case "laranja":
            valor = 1.50;
            break;
        case "uva":
            valor = 5.00; 
            break;
        case "morango":
            valor = 5.50;
            break;
        case "mamao":
            valor = 2.50; 
            break;
        default:
            valor = 0;
            break;
    }

    let total = valor * qntd;
    document.getElementById("total").textContent = "R$" + total.toFixed(2).replace('.', ',');

    addCarrinho(valor, qntd, fruta);
}

function addCarrinho(preco, quantidade, texto_elementoProduto) {
    let valorTotal = quantidade * preco;
    let carrinho = document.getElementById('carrinho');

    let itensCarrinho = carrinho.getElementsByTagName('li');
    for (let i = 0; i < itensCarrinho.length; i++) {
        if (itensCarrinho[i].textContent.includes(texto_elementoProduto)) {
            alert("Este item já está no carrinho.");
            return; 
        }
    }

    let item = document.createElement('li');
    item.textContent = `${quantidade}x ${texto_elementoProduto} - R$${valorTotal.toFixed(2).replace('.', ',')}`;

    let botao = document.createElement('reset');
    botao.className = 'remover_item';
    botao.type = 'reset'; 
    botao.textContent = "X";

    botao.onclick = function() {
        removerItem(item, valorTotal);
    };

    item.appendChild(botao);
    carrinho.appendChild(item);

    atualizarTotal(valorTotal);
}

function removerItem(item, valorRemover) {
    let totalElement = document.getElementById("total");
    let totalAtual = parseFloat(totalElement.textContent.replace('R$', '').replace(',', '.'));
    let novoTotal = totalAtual - valorRemover;

    totalCarrinho -= valorRemover; 
    totalElement.textContent = "R$" + novoTotal.toFixed(2).replace('.', ',');

    item.remove();
}

function atualizarTotal(valorAdicionar) {
    totalCarrinho += valorAdicionar; 
    let totalElement = document.getElementById("total");
    totalElement.textContent = "R$" + totalCarrinho.toFixed(2).replace('.', ',');
}
