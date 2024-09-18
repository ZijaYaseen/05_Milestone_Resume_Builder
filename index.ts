document.addEventListener('DOMContentLoaded', () => {
    const navStartBtn = document.getElementById('navStartBtn') as HTMLButtonElement;
    const headerStartBtn = document.getElementById('headerStartBtn') as HTMLButtonElement;
    const templateStartBtn = document.getElementById('templateStartBtn') as HTMLButtonElement;

    const handleClick = () => {
        window.location.href = 'form.html';
     }

    navStartBtn.addEventListener("click", handleClick);
    headerStartBtn.addEventListener("click", handleClick);
    templateStartBtn.addEventListener("click", handleClick)
});
