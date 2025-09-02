document.addEventListener('DOMContentLoaded', function() {
  const viewer = document.getElementById('docViewerContainer');
  const overlay = document.getElementById('docOverlay');
  const closeBtn = document.getElementById('docCloseBtn');
  const frame = document.getElementById('docFrame');

  window.openDoc = function(url) {
    frame.src = url;
    viewer.style.display = 'flex';
  };

  function closeDoc() {
    frame.src = '';
    viewer.style.display = 'none';
  }

  overlay.addEventListener('click', closeDoc);
  closeBtn.addEventListener('click', closeDoc);
});
