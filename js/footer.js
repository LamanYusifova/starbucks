

function toggleFooter(id) {
    const content = document.getElementById("footerDown" + id);
    const icon = document.getElementById("icon" + id);

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      content.classList.add("hidden");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
        }
    }