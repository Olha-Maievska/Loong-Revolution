document.addEventListener('DOMContentLoaded', () => {

    const addActiveClass = (contentSelector, activeClass) => {
        const content = document.querySelectorAll(contentSelector);

        content.forEach((item, i) => {
            item.addEventListener('click', e => {
                content.forEach(el => el.classList.remove(activeClass));
                item.classList.add(activeClass);
            });
        });
    }
    addActiveClass('.sidebar__characters-link', 'active');
});