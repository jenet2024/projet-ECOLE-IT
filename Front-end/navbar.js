function updateNavbar() {
  const token = localStorage.getItem("token");

  const profilBtn = document.getElementById("nav-profil");
  const paiementBtn = document.getElementById("nav-paiement");
  const authBtn = document.getElementById("nav-auth");

  if (!token) {
    // NON connecté
    profilBtn.style.display = "none";
    paiementBtn.style.display = "none";
    authBtn.textContent = "Connexion";
  } else {
    // connecté
    profilBtn.style.display = "inline-block";
    paiementBtn.style.display = "inline-block";
    authBtn.textContent = "Déconnexion";
  }
}

// Déconnexion
document.getElementById("nav-auth").addEventListener("click", () => {
  const token = localStorage.getItem("token");

  if (token) {
    localStorage.removeItem("token");
    alert("Déconnecté avec succès");
    updateNavbar();
  }
});

// Au chargement
document.addEventListener("DOMContentLoaded", updateNavbar);
