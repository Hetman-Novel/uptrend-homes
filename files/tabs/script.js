document.addEventListener("DOMContentLoaded", function () {
   var parentTabs = document.querySelectorAll('.tabs__wrap-tab .tab');
   parentTabs.forEach(function (parentTab) {
      parentTab.addEventListener('click', function () {
            var parentTabId = this.getAttribute('data-tab');
            var correspondingParentTabContent = document.querySelector('.tabContent[data-tabcontent="' + parentTabId + '"]');

            // Убираем активные классы у всех родительских вкладок и контентов
            document.querySelectorAll('.tabs__wrap-tab .tab').forEach(function (tab) {
               tab.classList.remove('tab-active');
            });
            document.querySelectorAll('.tabContent').forEach(function (content) {
               content.classList.remove('content-active');
            });

            // Добавляем активные классы к выбранной родительской вкладке и контенту
            this.classList.add('tab-active');
            correspondingParentTabContent.classList.add('content-active');
      });
   });

   /*
   var subTabs = document.querySelectorAll('#subTabs .subTab');
   subTabs.forEach(function (subTab) {
      subTab.addEventListener('click', function (event) {
            event.stopPropagation(); // Останавливаем всплытие события

            var subTabId = this.getAttribute('data-tab');
            var correspondingSubTabContent = document.querySelector('#subTabs .subTabContent[data-tabcontent="' + subTabId + '"]');

            // Убираем активные классы у всех суб-вкладок и контентов
            document.querySelectorAll('#subTabs .subTab').forEach(function (subTab) {
               subTab.classList.remove('subTab-active');
            });
            document.querySelectorAll('.subTabContent').forEach(function (content) {
               content.classList.remove('subContent-active');
            });

            // Добавляем активные классы к выбранной суб-вкладке и контенту
            this.classList.add('subTab-active');
            correspondingSubTabContent.classList.add('subContent-active');
      });
   });
   */
});

/*
<div id="tabs">
   <div class="tabs__wrap-tab">
      <div data-tab="tab1" class="tab tab-active">Вкладка 1</div>
      <div data-tab="tab2" class="tab">Вкладка 2</div>
   </div>
   <div data-tabcontent="tab1" class="tabContent content-active">
      Содержимое вкладки 1
   </div>
   <div data-tabcontent="tab2" class="tabContent">
      <div id="subTabs">
         <div class="tabs__wrap-tab">
            <div data-tab="subTab1" class="subTab subTab-active">
            sub Вкладка 1
            </div>
            <div data-tab="subTab2" class="subTab">
            sub Вкладка 2
            </div>
            <div data-tab="subTab3" class="subTab">
            sub Вкладка 3
            </div>
         </div>
         <div data-tabcontent="subTab1" class="subTabContent subContent-active">sub Содержимое вкладки 1</div>
         <div data-tabcontent="subTab2" class="subTabContent">sub Содержимое вкладки 2</div>
         <div data-tabcontent="subTab3" class="subTabContent">sub Содержимое вкладки 3</div>
      </div>
   </div>
</div>
*/