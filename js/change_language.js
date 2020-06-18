//console.log(navigator.language)
//var redirected = false;

/*if ((navigator.language != 'es-ES') && (window.location.pathname != '/en') && (redirected == false)) {
    redirected = true;
    window.location.pathname = '/en';
}*/

$('#SpanishLanguage').click(function () {
    window.location.href = '/';
    console.log('Spanish');
});

$('#EnglishLanguage').click(function () {
    window.location.href = '/en';
    console.log('English');
});

//console.log(redirected)