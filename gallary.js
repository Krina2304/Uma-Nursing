
// Back to top button
window.addEventListener('scroll', function () {
  const backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.classList.remove('opacity-0', 'invisible');
    backToTop.classList.add('opacity-100', 'visible');
  } else {
    backToTop.classList.remove('opacity-100', 'visible');
    backToTop.classList.add('opacity-0', 'invisible');
  }
})


document.querySelectorAll('.gallery-item .main-image').forEach(img => {
  img.addEventListener('click', () => {
    const galleryItem = img.closest('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const thumbStrip = document.getElementById('thumbStrip');

    // Main image
    modalImg.src = img.src;

    // Title and description
    modalTitle.textContent = galleryItem.dataset.title || '';
    modalDesc.textContent = galleryItem.dataset.desc || '';

    // Get hidden related images
    const hiddenImages = galleryItem.querySelectorAll('.related-images img');

    // Clear previous thumbnails
    thumbStrip.innerHTML = '';

    hiddenImages.forEach(relImg => {
      const thumb = document.createElement('img');
      thumb.src = relImg.src;
      thumb.alt = relImg.alt;
      thumb.className = 'w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition';
      thumb.onclick = () => modalImg.src = thumb.src;
      thumbStrip.appendChild(thumb);
    });

    // Show modal
    modal.classList.add('opacity-100', 'pointer-events-auto');
  });
});

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('imageModal').classList.remove('opacity-100', 'pointer-events-auto');
});

// Close modal on background click
document.getElementById('imageModal').addEventListener('click', e => {
  if (e.target.id === 'imageModal') {
    document.getElementById('imageModal').classList.remove('opacity-100', 'pointer-events-auto');
  }
});



    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".category-btn");
        const items = document.querySelectorAll(".gallery-item");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.getAttribute("data-category");

                // Remove "active" class from all buttons
                buttons.forEach(btn => btn.classList.remove("bg-indigo-900", "text-white"));
                
                // Add "active" to clicked button
                button.classList.add("bg-indigo-900", "text-white");

                items.forEach(item => {
                    const itemCategory = item.getAttribute("data-category");

                    if (category === "all" || itemCategory === category) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    });
