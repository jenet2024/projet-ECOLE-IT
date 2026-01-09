
let produitsCharges = false;


async function chargerProduits() {
  if (produitsCharges) return; // ⛔ empêche le doublon
  produitsCharges = true;

  console.log(produitsCharges)

  try {
    const res = await fetch("http://localhost:4000/api/produits/alerte");
    const produits = await res.json();

    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";

    if (!produits || produits.length === 0) {
      grid.innerHTML = "<p class='muted'>Aucune offre aujourd’hui</p>";
      return;
    }

    produits.forEach(p => {
      const joursRestants = Math.ceil(
        (new Date(p.dateExpiration) - new Date()) / (1000 * 60 * 60 * 24)
      );

      const carte = `
        <div class="card product-card">
          <img src="${p.photo}" alt="${p.nom}">
          <h3>${p.nom}</h3>
          <p class="muted">${p.description || ""}</p>

          <p style="margin: 12px 0;">
            <span class="price">${p.prix_reduit?.toFixed(2)}€</span>
            <span class="price-old">${p.prix.toFixed(2)}€</span>
          </p>

          <p class="muted">⏰ Expire dans ${joursRestants} jour${joursRestants > 1 ? "s" : ""}</p>

          <button class="btn"
            onclick="selectProduct('${p.nom}', ${p.prix_reduit}, ${p.prix})">
            Voir le produit
          </button>
        </div>
      `;

      grid.insertAdjacentHTML("beforeend", carte);
    });

  } catch (err) {
    console.error(err);
    alert("Erreur chargement des produits");
  }
}


document.addEventListener("DOMContentLoaded", chargerProduits);