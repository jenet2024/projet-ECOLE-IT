const API_URL = "http://localhost:4000/api/auth"; 

// creer compte
async function signupUser() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    if (!name || !email || !password) {
        alert("Veuillez remplir tous les champs pour l'inscription.");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Erreur lors de l'inscription");
            return;
        }

        alert(name + " " + "tu es prêts a sauver des repas :)"); 

        // pour vider les champs apres clique sur le bouton
        document.getElementById("signup-name").value = "";
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";

    } catch (err) {
        console.error(err);
        alert("Erreur serveur lors de l'inscription");
    }
}

// connexion
async function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Veuillez remplir tous les champs pour la connexion.");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Erreur lors de la connexion");
            return;
        }

        // Connexion réussie
        alert("Connexion réussie !");

        // Sauvegarde de token dans localStorage pour les prochaines requêtes
        localStorage.setItem("token", data.token);

        // Redirection ou affichage page principale
        
        
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";

    } catch (err) {
        console.error(err);
        alert("Erreur serveur lors de la connexion");
    }
}
