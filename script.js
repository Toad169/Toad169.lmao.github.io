$(document).ready(function() {
    // Function to change font family
    $('#font-family-select').change(function() {
        var fontFamily = $(this).val();
        $('body').css('font-family', fontFamily);
        localStorage.setItem('fontFamily', fontFamily); // Save font family to Local Storage
    });

    // Function to change font size
    $('#font-size-range').change(function() {
        var fontSize = $(this).val() + 'px';
        $('body').css('font-size', fontSize);
        localStorage.setItem('fontSize', fontSize); // Save font size to Local Storage
    });

    // Retrieve settings from Local Storage and apply them
    var storedFontFamily = localStorage.getItem('fontFamily');
    var storedFontSize = localStorage.getItem('fontSize');

    if (storedFontFamily) {
        $('body').css('font-family', storedFontFamily);
        $('#font-family-select').val(storedFontFamily);
    }

    if (storedFontSize) {
        $('body').css('font-size', storedFontSize);
        $('#font-size-range').val(parseInt(storedFontSize));
    }
});
