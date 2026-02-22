async function generateMosaic() {
    const mainImgInput = document.getElementById('mainImage');
    const canvas = document.getElementById('mosaicCanvas');
    const ctx = canvas.getContext('2d');

    if (!mainImgInput.files[0]) {
        alert("Please upload a main photo first!");
        return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(mainImgInput.files[0]);

    img.onload = () => {
        // Set canvas size to match the image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the main image
        ctx.drawImage(img, 0, 0);
        
        // Apply a mosaic effect (Simplification for initial launch)
        const cellSize = 20; 
        for (let y = 0; y < canvas.height; y += cellSize) {
            for (let x = 0; x < canvas.width; x += cellSize) {
                const pixel = ctx.getImageData(x, y, 1, 1).data;
                ctx.fillStyle = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, 0.8)`;
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }
        alert("Mosaic generated successfully!");
    };
}
