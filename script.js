function toggleMode() {
    const html = document.documentElement
        if (html.classList.contains('light')) {
            html.classList.remove('light')
        } else {
            html.classList.add('light')
        }


        const img = document.querySelector("#profile img") 
            if (html.classList.contains("light")) {
                img.setAttribute("src", "./fotos-projeto-X/avatar-light.png")
            }   else {
                img.setAttribute("src", "./fotos-projeto-X/avatar.png")
            }
        
        const alt = document.querySelector('#profile img')
            if (html.classList.contains("light")) {
                alt.setAttribute("alt", "avatar de kevin willian para o fundo branco")
            } else {
                alt.setAttribute("alt", "avatar de kevin willian para o fundo preto")
            }
};


