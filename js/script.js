if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-window').forEach(modalWindow => {
        const modal = modalWindow.querySelector('.modal-current');
        modalWindow.open  =  () => modalWindow.classList.add('modal-open');
        modalWindow.close  =  () => modalWindow.classList.remove('modal-open');
        modalWindow.querySelectorAll('.modal-close').forEach(btnClose => btnClose.addEventListener('click',  modalWindow.close));

        modalWindow.addEventListener('click', (event) => {
            if(event.target != modal){
                modalWindow.close();
            }
        });

    })

    document.querySelector('.openmodal').addEventListener('click', () => document.querySelector('#example-modal').open());
});