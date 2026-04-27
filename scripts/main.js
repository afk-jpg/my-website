document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumb');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentIdxSpan = document.getElementById('currentIdx');
    const totalIdxSpan = document.getElementById('totalIdx');
    
    const images = Array.from(thumbnails).map(thumb => thumb.dataset.src);
    let currentIndex = 0;
    
    function updateCounter() {
        currentIdxSpan.textContent = currentIndex + 1;
        totalIdxSpan.textContent = images.length;
    }
    
    function switchImage(index) {
        
        mainImage.style.opacity = 0;
        
        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.alt = `Изображение ${index + 1}`;
            mainImage.style.opacity = 1;
            
           
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
            updateCounter();
        }, 150);
    }
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => switchImage(index));
    });
    
    prevBtn.addEventListener('click', () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        switchImage(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        switchImage(newIndex);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            switchImage(newIndex);
        } else if (e.key === 'ArrowRight') {
            const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            switchImage(newIndex);
        }
    });
    
    updateCounter();
});

