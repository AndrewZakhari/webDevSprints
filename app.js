document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const hotbarItems = document.querySelectorAll('.hotbarItem');
    const currentPath = window.location.pathname;
    let isMenuOpen = false;

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });

 
    hotbarItems.forEach(item => {
        item.addEventListener('click', () => {
       
            hotbarItems.forEach(hotbarItem => {
                hotbarItem.style.background = 'var(--secondary-color)';
                hotbarItem.style.color = 'var(--text-dark)';
            });
            
         
            item.style.background = 'var(--primary-color)';
            item.style.color = 'var(--secondary-color)';
        });
    });

    hamburger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
     
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        if (isMenuOpen) {
            hamburger.style.transition = 'all 0.5s';
            hamburger.style.transform = 'rotate(90deg)';
        } else {
            hamburger.style.transition = 'all 0.5s';
            hamburger.style.transform = 'rotate(0)';
        }
    });


    document.addEventListener('click', (e) => {
        if (isMenuOpen && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            isMenuOpen = false;
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            hamburger.style.transform = 'rotate(0)';
        }
    });
});
