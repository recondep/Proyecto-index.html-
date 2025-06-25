document.addEventListener('DOMContentLoaded', () => {
    const addImageBtn = document.getElementById('addImageBtn');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const imageUrlInput = document.getElementById('imageUrl');
    const gallery = document.getElementById('gallery');

    addImageBtn.addEventListener('click', () => {
        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl) {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Imagen de la galería';
            imgElement.addEventListener('click', () => {
                const selected = gallery.querySelector('img.selected');
                if (selected) {
                    selected.classList.remove('selected');
                }
                imgElement.classList.add('selected');
            });
            gallery.appendChild(imgElement);
            imageUrlInput.value = ''; // Limpiar el campo de entrada
        } else {
            alert('Por favor, ingresa una URL válida.');
        }
    });

    removeImageBtn.addEventListener('click', () => {
        const selected = gallery.querySelector('img.selected');
        if (selected) {
            gallery.removeChild(selected);
        } else {
            alert('No hay ninguna imagen seleccionada para eliminar.');
        }
    });
});
