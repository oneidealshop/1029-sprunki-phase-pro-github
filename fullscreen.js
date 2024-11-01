export function enterFullscreen(container, iframe, fullscreenBtn, exitFullscreenBtn, watermark) {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
    
    // 调整iframe大小以适应全屏
    iframe.style.height = '100vh';
    fullscreenBtn.classList.add('hidden');
    exitFullscreenBtn.classList.remove('hidden');
    watermark.classList.remove('hidden');
}

export function exitFullscreen(container, iframe, fullscreenBtn, exitFullscreenBtn, watermark) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    
    // 恢复iframe原始大小
    iframe.style.height = '600px';
    fullscreenBtn.classList.remove('hidden');
    exitFullscreenBtn.classList.add('hidden');
    watermark.classList.add('hidden');
}

export function handleFullscreenChange(container, iframe, fullscreenBtn, exitFullscreenBtn, watermark) {
    if (!document.fullscreenElement && 
        !document.webkitFullscreenElement && 
        !document.msFullscreenElement) {
        // 退出全屏时恢复原始大小
        iframe.style.height = '600px';
        fullscreenBtn.classList.remove('hidden');
        exitFullscreenBtn.classList.add('hidden');
        watermark.classList.add('hidden');
    }
}

export function autoEnterFullscreen(container, iframe, fullscreenBtn, exitFullscreenBtn, watermark) {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
        enterFullscreen(container, iframe, fullscreenBtn, exitFullscreenBtn, watermark);
    }
}
