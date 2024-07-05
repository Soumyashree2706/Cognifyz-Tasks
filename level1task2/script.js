const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'rgb(108, 211, 151)';
    btn.style.boxShadow = '0 0 40px rgb(108, 211, 151)';
    btn.style.transition ='.5s ease';
})
