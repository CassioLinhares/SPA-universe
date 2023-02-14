export class Utils {
    exchangeImg(currentImg, removeImg1, removeImg2) {
        document.body.classList.add(currentImg) 
        document.body.classList.remove(removeImg1) 
        document.body.classList.remove(removeImg2) 
    }
    
    currentPage(btnLinkOn, btnLinkOff1, btnLinkOff2) {
        btnLinkOn.classList.add('on')
        btnLinkOff1.classList.remove('on')
        btnLinkOff2.classList.remove('on')
    }
}