// // Нашли все заголовки табов по data атрибуту
// const tabHeaders = document.querySelectorAll('[data-tab]');
// // Нашли все контент боксы
// const contentBoxes = document.querySelectorAll('[data-tab-content]');

// tabHeaders.forEach(function (item) {
//     item.addEventListener('click', function () {

//         // 1. Скрыть все content box
//         contentBoxes.forEach(function (item) {
//             item.classList.add('hidden');
//         });

//         // 2. Выбрать нужный content box и показать его
//         const contentBox = document.querySelector('#' + this.dataset.tab);
//         contentBox.classList.remove('hidden');

//     })
// })

const tabHeaders = document.querySelectorAll('.questions-tab');

tabHeaders.forEach(function (item) {
    let plusHeader = item.querySelector('.questions-tab-elipse');
    let noneHeader = item.querySelector('.questions-tab-none');
    
    plusHeader.addEventListener('click', function(){
        // Проверяем тот ли это элемент который нам нужен
        let target = event.target;
        if(target.classList.contains('questions-tab')) {
            for(let i = 0; i < tabHeaders.length; i++) {
                // Убираем у других
                
                tabHeaders[i].classList.remove('questions-tab-none_active');
                noneHeader.classList.remove('questions-tab_active');
            }
        }
        item.classList.toggle('questions-tab_active');
        noneHeader.classList.toggle('questions-tab-none_active');
        

        
    
        
        console.log(111)
        
    })
})

/* tabHeaders.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('questions-tab-elipse')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('active');
      }
      // Добавляем тому на который нажали
      target.classList.add('active');
    }
    
  }); */