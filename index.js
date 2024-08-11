document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }

    cart.addEventListener('click', (event) => {
        const target = event.target;
        const item = target.closest('.item');

        if (target.classList.contains('plus-btn')) {
            const quantityElement = item.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        } else if (target.classList.contains('minus-btn')) {
            const quantityElement = item.querySelector('.quantity');
            if (parseInt(quantityElement.textContent) > 1) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            }
        } else if (target.classList.contains('delete-btn')) {
            item.remove();
        } else if (target.classList.contains('like-btn')) {
            target.classList.toggle('liked');
        }

        updateTotal();
    });

    updateTotal();
});
