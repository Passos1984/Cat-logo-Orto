// O número de telefone e a exibição estão codificados em Base64 para proteção no GitHub
// A função atob() descriptografa esses códigos em tempo real no navegador
const telefoneWhats = atob("NTU1MTk5MzE3MDAxNQ==");
const textoExibicao = atob("KDUxKSA5OTMxNy0wMDE1");

// Função para exibir o telefone no topo da página
function configurarExibicaoContato() {
    const el = document.getElementById("display-fone");
    if (el) {
        el.innerHTML = `📞 Fone / WhatsApp: ${textoExibicao}`;
    }
}

// Executa a função assim que carrega
configurarExibicaoContato();

// Função para gerar link do WhatsApp
function gerarLinkWhats(nomeServico, valorTexto) {
    const mensagem = `Olá, gostaria de solicitar o serviço: *${nomeServico}* - Valor: ${valorTexto}. Poderia confirmar disponibilidade?`;
    const msgEncoded = encodeURIComponent(mensagem);
    return `https://wa.me/${telefoneWhats}?text=${msgEncoded}`;
}

// Dados: APARELHOS FIXOS
const fixos = [
    { nome: "BARRA TRANSPALATINA", preco: 80 },
    { nome: "BATENTE ANTERIOR FIXA", preco: 100 },
    { nome: "ARCO LÍNGUA", preco: 80 },
    { nome: "BOTÃO DE NANCY", preco: 100 },
    { nome: "HAAS", preco: 150 },
    { nome: "HYRAX", preco: 140 },
    { nome: "HYRAX BORBOLETA", preco: 160 },
    { nome: "BANDA ALCA", preco: 80 },
    { nome: "QUADRI-HELICE", preco: 100 },
    { nome: "BI-HELICE", preco: 90 },
    { nome: "PÊNDULO", preco: 150 },
    { nome: "PENDEX", preco: 170 },
    { nome: "GRADE LINGUAL", preco: 90 }
];

// APARELHOS MÓVEIS
const moveis = [
    { nome: "FRONT PLATEAU", preco: 90 },
    { nome: "BATENTE POSTERIOR", preco: 90 },
    { nome: "HAVLEY CONVENCIONAL", preco: 100 },
    { nome: "CONT WRAPAROUND", preco: 100 },
    { nome: "CONT INF RETA OU HIG", preco: 50 },
    { nome: "PLACA MAURICIO", preco: 100 },
    { nome: "PLACA BRUXISMO", preco: 90 },
    { nome: "PLACA ACEITATO 1MM", preco: 100 },
    { nome: "PLACA ACEITATO 2MM", preco: 120 },
    { nome: "PLACA SILICONE 3MM", preco: 100 },
    { nome: "PLACA CLAREAMENTO", preco: 50 },
    { nome: "ACRÉSCIMO DE MOLAS", preco: 50 },
    { nome: "PLACA EXPANSORA", preco: 20 },
    { nome: "ADESIVO", preco: 50 },
    { nome: "ORTOPÉDICO PLANAS", preco: 350 },
    { nome: "BIONATOR", preco: 250 },
    { nome: "BINLER", preco: 350 }
];

// PRÓTESES E OUTROS
const protesesOutros = [
    { nome: "PRÓTESE TOTAL", preco: 420 },
    { nome: "PPR. METÁLICA", preco: 500 },
    { nome: "PPR. ACRÍLICA", preco: 320 },
    { nome: "CONTENÇÃO ESTÉTICA", preco: 130 },
    { nome: "PRÓTESE FLEX", preco: 650 },
    { nome: "COROA EMAX", preco: 450 },
    { nome: "PROTOCOLO", preco: 1600 }
];

// APARELHOS DE RONCO (faixa)
const roncoItens = [
    { nome: "APARELHO ANTI-RONCO (personalizado)", faixa: "R$400 a R$500", precoMin: 400, precoMax: 500 }
];

// Renderiza cards com preço fixo
function renderizarGrid(containerId, arrayItens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    arrayItens.forEach(item => {
        const precoFormatado = `R$ ${item.preco.toFixed(2)}`.replace('.', ',');
        const link = gerarLinkWhats(item.nome, precoFormatado);
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="card-content">
                <div class="badge-fixo">🔧 serviço técnico</div>
                <div class="service-name">${item.nome}</div>
                <div class="service-price">${precoFormatado}</div>
            </div>
            <a href="${link}" target="_blank" class="btn-wa">
                📲 Solicitar via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.445.099-.133.197-.513.644-.63.776-.116.132-.232.148-.43.05-.197-.1-.834-.308-1.59-.984-.59-.525-.986-1.175-1.102-1.372-.116-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.474-.16-.39-.323-.337-.445-.343a8 8 0 0 0-.38-.006c-.132 0-.347.05-.53.248-.181.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.049.099.132 1.394 2.132 3.383 2.99.472.204.84.326 1.129.417.474.15.906.128 1.248.077.38-.056 1.17-.478 1.335-.94.165-.462.165-.858.116-.94-.05-.083-.182-.132-.38-.23z"/>
                </svg>
            </a>
        `;
        container.appendChild(card);
    });
}

// Render específico para aparelhos de ronco (faixa de valores)
function renderizarRonco(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    roncoItens.forEach(item => {
        const link = gerarLinkWhats(item.nome, `faixa de ${item.faixa}`);
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="card-content">
                <div class="badge-fixo">🌙 tratamento personalizado</div>
                <div class="service-name">${item.nome}</div>
                <div class="service-price price-range">💰 ${item.faixa}</div>
            </div>
            <a href="${link}" target="_blank" class="btn-wa">
                📲 Orçamento via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.445.099-.133.197-.513.644-.63.776-.116.132-.232.148-.43.05-.197-.1-.834-.308-1.59-.984-.59-.525-.986-1.175-1.102-1.372-.116-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.474-.16-.39-.323-.337-.445-.343a8 8 0 0 0-.38-.006c-.132 0-.347.05-.53.248-.181.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.049.099.132 1.394 2.132 3.383 2.99.472.204.84.326 1.129.417.474.15.906.128 1.248.077.38-.056 1.17-.478 1.335-.94.165-.462.165-.858.116-.94-.05-.083-.182-.132-.38-.23z"/>
                </svg>
            </a>
        `;
        container.appendChild(card);
    });
}

// Inicialização
renderizarGrid("fixos-grid", fixos);
renderizarGrid("moveis-grid", moveis);
renderizarGrid("proteses-grid", protesesOutros);
renderizarRonco("ronco-grid");