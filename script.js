const db = firebase.firestore();
const arvoresContainer = document.getElementById("arvoresContainer");

// Função para carregar árvores
async function carregarArvores() {
    const snapshot = await db.collection("arvores").get();
    snapshot.forEach(doc => {
        const arvore = doc.data();
        const card = document.createElement("div");
        card.className = "arvore-card";
        card.innerHTML = `
            <img src="${arvore.imagem}" alt="${arvore.nome}">
            <h3>${arvore.nome}</h3>
            <p>${arvore.descricao}</p>
            <a href="${arvore.qrcode}" target="_blank">QR Code</a>
        `;
        arvoresContainer.appendChild(card);
    });
}

// Carregar ao iniciar
window.onload = carregarArvores;
