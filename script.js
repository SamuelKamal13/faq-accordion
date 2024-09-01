document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        const content = item.querySelector('.accordion-content');
        const icon = title.querySelector('img');

        title.addEventListener('click', function () {
            const isActive = content.classList.contains('active');

            // Collapse all accordion items
            accordionItems.forEach(i => {
                i.querySelector('.accordion-content').classList.remove('active');
                i.querySelector('.accordion-title img').src = './assets/images/icon-plus.svg';
            });

            // If the clicked item was not active, expand it
            if (!isActive) {
                content.classList.add('active');
                icon.src = './assets/images/icon-minus.svg';
            }
        });
    });
});
