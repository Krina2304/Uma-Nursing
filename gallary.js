        document.addEventListener('DOMContentLoaded', function() {
            // Filter gallery items
            const filterButtons = document.querySelectorAll('.category-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-900', 'text-white'));
                    button.classList.add('active', 'bg-indigo-900', 'text-white');
                    
                    const category = button.dataset.category;
                    
                    // Filter items
                    galleryItems.forEach(item => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            
            
            // Image modal functionality
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');
            const closeModal = document.getElementById('closeModal');
            
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    const title = item.querySelector('h3').textContent;
                    const desc = item.querySelector('p').textContent;
                    
                    modalImage.src = img.src;
                    modalImage.alt = img.alt;
                    modalTitle.textContent = title;
                    modalDesc.textContent = desc;
                    
                    modal.classList.remove('pointer-events-none', 'opacity-0');
                    modal.classList.add('opacity-100');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            closeModal.addEventListener('click', () => {
                modal.classList.remove('opacity-100');
                modal.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'auto';
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('opacity-100');
                    modal.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close with escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    modal.classList.remove('opacity-100');
                    modal.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Back to top button
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.remove('opacity-100', 'visible');
                backToTop.classList.add('opacity-0', 'invisible');
            }
        })


        