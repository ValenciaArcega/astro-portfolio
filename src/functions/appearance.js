let root = document.documentElement
const btnMobileDark = document.querySelector("#btnDarkMobile")
const btnMobileLight = document.querySelector("#btnLightMobile")
const btnDesktopDark = document.querySelector("#btnLightDesktop")
const btnDesktopLight = document.querySelector("#btnDarkDesktop")

const htmlTag = document.querySelector("html")

function makeDark() {
	htmlTag.classList.add("dark")

	root.id = "rootDarkMode"
	btnMobileDark.classList.add("hidden")
	btnMobileLight.classList.remove("hidden")
	btnDesktopDark.classList.add("hidden")
	btnDesktopLight.classList.remove("hidden")
}

function makeLight() {
	htmlTag.classList.remove("dark")

	root.removeAttribute("id")
	btnMobileLight.classList.add("hidden")
	btnMobileDark.classList.remove("hidden")
	btnDesktopLight.classList.add("hidden")
	btnDesktopDark.classList.remove("hidden")
}

btnMobileDark.addEventListener("click", makeDark)
btnMobileLight.addEventListener("click", makeLight)

btnDesktopDark.addEventListener("click", makeDark)
btnDesktopLight.addEventListener("click", makeLight)
