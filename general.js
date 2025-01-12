function toggleSubmenu(element) {
    const submenu = element.querySelector('.submenu');
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  }

    function playSound(audioId) {
        const audio = document.getElementById(audioId);
        audio.currentTime = 0; // Reinicia el audio
        audio.play(); // Reproduce el audio
    }