function toggleMode() {
  // const body = document.body

  // if (body.classList.contains('light')) {
  //   body.classList.remove('light')
  // } else {
  //   body.classList.add('light')
  // }

  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const isLightTheme = html.classList.contains("light")
  const legendForImages = {
    light:
      "Foto do Mayk Brito usando oculos, de camisa preta, com barba e fundo da imagem amarelo.",
    "": "Foto do Mayk Brito usando oculos escuros, de jaqueta preta, com barba e fundo azul.",
  }
  // img.src = isLightTheme ? "./assets/avatar-light.png" : "./assets/avatar.png"
  img.setAttribute(
    "src",
    isLightTheme ? "./assets/avatar-light.png" : "./assets/avatar.png"
  )
  img.setAttribute(
    "alt",
    isLightTheme ? legendForImages["light"] : legendForImages[""]
  )
}
