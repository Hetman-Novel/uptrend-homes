document.addEventListener('DOMContentLoaded', function() {

   // сортировка направления
   let sortByDirection = document.querySelector('.sort-by-direction');
   if (sortByDirection) {
      sortByDirection.addEventListener('click', function () {
         if (!this.classList.contains('ascending') && !this.classList.contains('in-descending-order')) {
            // Первый клик — добавить ascending
            this.classList.add('ascending');
         } else if (this.classList.contains('ascending')) {
            // Был ascending — меняем на in-descending-order
            this.classList.remove('ascending');
            this.classList.add('in-descending-order');
         } else {
            // Был in-descending-order — меняем на ascending
            this.classList.remove('in-descending-order');
            this.classList.add('ascending');
         }
      });
   }

   // вид карточек
   let typeOfTiles = document.querySelector('.type-of-tiles');
   let apartmentsBlock = document.querySelector('.apartments');
   if (typeOfTiles && apartmentsBlock) {
      typeOfTiles.addEventListener('change', (event) => {
         if (event.target.name === 'type-of-tiles') {
            const selectedValue = event.target.value;
            apartmentsBlock.classList.remove('grid', 'list'); // Удалим оба класса на всякий случай
            apartmentsBlock.classList.add(selectedValue); // Добавим нужный
         }
      });
   }

});