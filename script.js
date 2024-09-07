document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Скрытие всех элементов и иконок
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.icon-plus').style.display = 'inline';
            el.querySelector('.icon-minus').style.display = 'none';
        });

        // Открытие текущего элемента
        if (!item.classList.contains('active')) {
            item.classList.add('active');
            item.querySelector('.icon-plus').style.display = 'none';
            item.querySelector('.icon-minus').style.display = 'inline';
        }
    });
});
