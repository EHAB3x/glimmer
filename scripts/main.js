document.addEventListener('DOMContentLoaded', function () {
  const sidebarHeader = document.querySelector('.sidebar__header');
  const sidebarMainMenu = document.getElementById('sidebarMainMenu');
  const sidebarSubmenus = document.querySelectorAll('.sidebar__submenu');

  // Open sidebar
  document.querySelector('.bars__icon').addEventListener('click', function () {
    document.getElementById('mobileSidebar').style.display = 'block';
    sidebarMainMenu.style.display = 'block';
    sidebarSubmenus.forEach(el => el.style.display = 'none');
    sidebarHeader.classList.remove('hide');
  });

  // Close sidebar
  document.getElementById('sidebarCloseBtn').addEventListener('click', function () {
    document.getElementById('mobileSidebar').style.display = 'none';
    sidebarHeader.classList.remove('hide');
  });

  // Open submenu
  document.querySelectorAll('.sidebar__submenu-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      sidebarMainMenu.style.display = 'none';
      sidebarSubmenus.forEach(el => el.style.display = 'none');
      document.getElementById(btn.dataset.submenu).style.display = 'block';
      sidebarHeader.classList.add('hide');
    });
  });

  // Back to main menu
  document.querySelectorAll('.sidebar__back-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      sidebarMainMenu.style.display = 'block';
      btn.closest('.sidebar__submenu').style.display = 'none';
      sidebarHeader.classList.remove('hide');
    });
  });

  // Optional: close sidebar when clicking outside panel
  document.getElementById('mobileSidebar').addEventListener('click', function (e) {
    if (e.target === this) {
      this.style.display = 'none';
      sidebarHeader.classList.remove('hide');
    }
  });
});