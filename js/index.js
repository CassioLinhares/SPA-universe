import { Router } from "./router.js";
import { Utils } from "./utils.js";
import {
    home,
    universe,
    explorer
} from "./elements.js";

const router = new Router()
const utils = new Utils()

router.add('/', '/pages/home.html')
router.add('/ouniverso', '/pages/universe.html')
router.add('/aexploracao', '/pages/explorer.html')
router.add(404, '/pages/404.html')

home.addEventListener('click', () =>{
    router.route()
    utils.currentPage(home, universe, explorer)   
    utils.exchangeImg('imgHome', 'imgUniverse', 'imgExplorer')
})

universe.addEventListener('click', () =>{
    router.route()
    utils.currentPage(universe, home, explorer)  
    utils.exchangeImg('imgUniverse', 'imgExplorer', 'imgHome')
})

explorer.addEventListener('click', () =>{
    router.route()
    utils.currentPage(explorer, universe, home) 
    utils.exchangeImg('imgExplorer', 'imgUniverse', 'imgHome')  
})

router.handle()
window.onpopstate = () => router.handle() // conseguir navegar apartir das setas do brower

