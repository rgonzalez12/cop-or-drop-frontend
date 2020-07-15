document.addEventListener("DOMContentLoaded", function() {
    API.addSneakers()
    document.getElementById('form').addEventListener('submit', API.addSneaker)
})