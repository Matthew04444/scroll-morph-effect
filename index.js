"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const container = document.getElementById('scrollContainer');
const overlay = document.getElementById('overlayImage');

if (container && overlay) {
    window.addEventListener('scroll', () => {
        const rect = container.getBoundingClientRect();
        const totalScroll = container.clientHeight - window.innerHeight;
        const scrolled = -rect.top;
        
        let progress = scrolled / totalScroll;
        
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        overlay.style.opacity = progress.toString();
    });
}