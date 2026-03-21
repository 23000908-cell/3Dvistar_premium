(function() {
    var lastMedia = "";
    setInterval(function() {
        try {
            if (window.tdvplayer) {
                var root = window.tdvplayer.getById('rootPlayer');
                if (root && root.get('mainMedia')) {
                    var media = root.get('mainMedia').get('media');
                    var currentName = media.get('label') || media.get('name');
                    if (currentName && currentName !== lastMedia) {
                        lastMedia = currentName;
                        var newPath = window.location.pathname + '?media-name=' + encodeURIComponent(currentName);
                        window.history.replaceState(null, '', newPath);
                    }
                }
            }
        } catch (e) {}
    }, 1500);
})();