$(document).ready(function() {
    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true
    });

    var programming = [
        "Java", "JavaScript", "Dart", "C#", "Python", "PHP", "Assembly", "C/C++", "Go", "Swift", "Kotlin", 
        "Ruby", "Rust", "TypeScript", "Scala", "Perl", "Lua", "Haskell", "Clojure", "MATLAB", "Groovy", 
        "Objective-C", "Delphi", "Fortran", "R", "Visual Basic", "SQL", "Erlang", "Julia", "F#", "COBOL", 
        "Pascal", "Ada", "ABAP", "Scratch", "Prolog", "Scheme", "Lisp", "Apex"
    ];

    $("#programming").autocomplete({
        source: programming,
        minLength: 1
    });

    $('form').on('submit', function(event) {
        event.preventDefault(); 

        var programming = $('#programming').val();
        var birthday = $('#birthday').val();
        var email = $('#email').val();
        var website = $('#website').val();

        $(this).find('input[type=text], input[type=email], input[type=url]').val('');

        $('#form-data-display').html(
            '<p>Programming: ' + programming + '</p>' +
            '<p>Birthday: ' + birthday + '</p>' +
            '<p>Email: ' + email + '</p>' +
            '<p>Website: ' + website + '</p>'
        );
    });
    $("#programming, #email, #website").on('input', function() {
        var isValid = this.checkValidity();
        var nextSpan = $(this).next('.input-icon');
        if (isValid) {
            nextSpan.addClass('fa fa-check').removeClass('fa-times');
        } else {
            nextSpan.addClass('fa fa-times').removeClass('fa-check');
        }
    });
});
