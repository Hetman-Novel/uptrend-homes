$(document).ready(function () { // Make sure the DOM is fully loaded before initializing Select2
    
   /* 
   * додай клас wrap-select-form до обгортки поля select,
   * і всередині wrap-select-form першим додай приховане поле, при виборі значення додаватиметься в приховане поле.
   * Якщо потрібно.
   $('select').each(function () {
      $(this).select2(); // Initialize Select2
      $(this).on('select2:select', function (e) { // Handler for the value selection event
         const selectedValue = e.params.data.text; // Get the text of the selected value
         const parentBlock = $(this).closest('.wrap-select-form'); // Parent block
         const hiddenField = parentBlock.find('input[type="hidden"]').first(); // Hidden field above select

         // If a hidden field is found, write the selected value into it
         if (hiddenField.length) {
            hiddenField.val(selectedValue);
         }
      });
   });
   */

   $('#search-property-type').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#search-city').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#search-district').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#search-rooms').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#search-infrustucture').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#search-advantages').select2({
      placeholder: "All",
      theme: 'custom-select',
      minimumResultsForSearch: -1
   });
   $('#choose-messenger').select2({
      placeholder: "Choose messenger",
      theme: 'custom-select'
   });
});

$('select').each(function () {
   const $select = $(this);
   const $parent = $select.closest('.js-wrap-select-form');

   $select.select2({
      dropdownAutoWidth: true,
      width: 'resolve'
   });

   $select.on('select2:open', function () {
      setTimeout(() => {
         const dropdown = $('.select2-container--open .select2-dropdown');
         if (dropdown.length) {
            const parentWidth = $parent.outerWidth();
            dropdown.css('width', parentWidth + 'px');
         }
      }, 0);
   });

   $select.on('select2:select', function (e) {
      const selectedValue = e.params.data.text;
      const hiddenField = $parent.find('input[type="hidden"]').first();
      if (hiddenField.length) hiddenField.val(selectedValue);
   });
});