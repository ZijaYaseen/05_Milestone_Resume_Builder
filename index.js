"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const navStartBtn = document.getElementById('navStartBtn');
    const headerStartBtn = document.getElementById('headerStartBtn');
    const templateStartBtn = document.getElementById('templateStartBtn');
    const handleClick = () => {
        window.location.href = 'form.html';
    };
    navStartBtn.addEventListener("click", handleClick);
    headerStartBtn.addEventListener("click", handleClick);
    templateStartBtn.addEventListener("click", handleClick);
});
