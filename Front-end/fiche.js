// Navigation simple
    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.page;
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // "Base de données" simple en mémoire
    let selectedProduct = null;
    let cart = [];

    function selectProduct(name, newPrice, oldPrice) {
        selectedProduct = { name, newPrice, oldPrice };
        const title = document.getElementById('product-title');
        const desc = document.getElementById('product-desc');
        const prices = document.getElementById('product-prices');
        document.getElementById('product-new-price').textContent = newPrice.toFixed(2) + '€';
        document.getElementById('product-old-price').textContent = oldPrice.toFixed(2) + '€';
        title.textContent = name;
        desc.textContent = "Produit proche de la DLC, réservé aux offres étudiantes.";
        prices.style.display = 'block';

        // Aller automatiquement sur la page fiche produit
        navButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.page === 'fiche');
        });
        sections.forEach(s => s.classList.toggle('active', s.id === 'fiche'));
    }

    function addToCart() {
        if (!selectedProduct) return;
        cart.push(selectedProduct);
        renderCart();
    }

    function renderCart() {
        const cartEmpty = document.getElementById('cart-empty');
        const cartItems = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');

        if (cart.length === 0) {
            cartEmpty.style.display = 'block';
            cartItems.innerHTML = '';
            cartSummary.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';
        cartItems.innerHTML = '';

        let total = 0;
        let oldTotal = 0;

        cart.forEach((item, index) => {
            total += item.newPrice;
            oldTotal += item.oldPrice;
            const row = document.createElement('div');
            row.className = 'row';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <span class="muted">${item.newPrice.toFixed(2)}€ (au lieu de ${item.oldPrice.toFixed(2)}€)</span>
                </div>
                <button class="btn secondary" onclick="removeFromCart(${index})">Retirer</button>
            `;
            cartItems.appendChild(row);
        });

        document.getElementById('cart-total').textContent = total.toFixed(2) + '€';
        document.getElementById('cart-saved').textContent = (oldTotal - total).toFixed(2) + '€';

        // Met à jour le récap sur la page paiement aussi
        updatePaymentSummary();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }

    function goToPayment() {
        navButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.page === 'paiement');
        });
        sections.forEach(s => s.classList.toggle('active', s.id === 'paiement'));
    }

    function updatePaymentSummary() {
        const paymentSummary = document.getElementById('payment-summary');
        if (cart.length === 0) {
            paymentSummary.innerHTML = '<p class="muted">Aucun panier en cours. Ajoute un produit depuis la fiche produit.</p>';
            return;
        }
        let html = '';
        let total = 0;
        cart.forEach(item => {
            total += item.newPrice;
            html += `<p><strong>${item.name}</strong> – ${item.newPrice.toFixed(2)}€</p>`;
        });
        html += `<p style="margin-top:8px;">Total à payer : <strong>${total.toFixed(2)}€</strong></p>`;
        paymentSummary.innerHTML = html;
    }

    function confirmPayment() {
        if (cart.length === 0) {
            alert("Ton panier est vide.");
            return;
        }
        const method = document.getElementById('payment-method').value;
        alert("Paiement confirmé via " + method + " (simulation).");
        document.getElementById('qr-card').style.display = 'block';

        // On pourrait vider le panier après "retrait"
        // Pour la démo on le laisse.
    }

    function saveAlerts() {
        const status = document.getElementById('alert-status');
        status.textContent = "Préférences d’alertes enregistrées (simulation).";
        setTimeout(() => status.textContent = "", 3000);
    }