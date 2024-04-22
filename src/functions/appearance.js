let root = document.documentElement
const btnMobileDark = document.querySelector(".topBar-btnDark")
const btnMobileLight = document.querySelector(".topBar-btnLight")

const btnDesktopDark = document.querySelector(".navBarBtnDark")
const btnDesktopLight = document.querySelector(
	".navBarBtnSun"
)

function makeDark() {
	root.id = "rootDarkMode"

	btnMobileDark.classList.add("hidden")
	btnMobileLight.classList.remove("hidden")

	btnDesktopDark.classList.add("hidden")
	btnDesktopLight.classList.remove("hidden")
}

function makeLight() {
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