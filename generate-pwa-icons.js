const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Ensure icons directory exists
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

function generateIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, size, size);
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#4a7c59');
    gradient.addColorStop(1, '#2d5016');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Draw yoga symbol (simplified lotus/om symbol)
    ctx.fillStyle = '#f8f6f0';
    ctx.strokeStyle = '#f8f6f0';
    ctx.lineWidth = size * 0.05;
    
    // Center point
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.3;
    
    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw inner symbol (simplified om)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI);
    ctx.stroke();
    
    // Draw center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add text for larger icons
    if (size >= 180) {
        ctx.fillStyle = '#f8f6f0';
        ctx.font = `bold ${size * 0.08}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('YOGA', centerX, centerY + radius + size * 0.15);
    }
    
    // Save the icon
    const buffer = canvas.toBuffer('image/png');
    const filename = path.join(iconsDir, `icon-${size}x${size}.png`);
    fs.writeFileSync(filename, buffer);
    console.log(`Generated: ${filename}`);
}

// Generate all required PWA icons
const sizes = [16, 32, 180, 192, 512];

console.log('Generating PWA icons...');
sizes.forEach(size => {
    generateIcon(size);
});
console.log('All PWA icons generated successfully!');
