(function() {
    var maxZoom = 1.5; // 最大縮放
    var minZoom = 0.8; // 最小縮放

    function enforceZoomLimits() {
        var zoom = window.devicePixelRatio; // 取得目前的縮放比例
        if (zoom > maxZoom) {
            document.body.style.zoom = maxZoom; // 強制設為最大允許的比例
        } else if (zoom < minZoom) {
            document.body.style.zoom = minZoom; // 強制設為最小允許的比例
        }
    }

    // 監聽鍵盤快捷鍵 (Ctrl + 滾輪) & 觸控縮放
    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey) { // 禁止 Ctrl + 滾輪
            event.preventDefault();
        }
    }, { passive: false });

    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
            event.preventDefault(); // 禁止 Ctrl + + / - / 0
        }
    });

    // 監聽縮放變化，每 100 毫秒檢查一次
    setInterval(enforceZoomLimits, 100);
})();
