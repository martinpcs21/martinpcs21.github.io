//console.log(navigator.language)
//var redirected = false;

/*if ((navigator.language != 'es-ES') && (window.location.pathname != '/en') && (redirected == false)) {
    redirected = true;
    window.location.pathname = '/en';
}*/

$('#SpanishLanguage').click(function () {
    window.location.href = 'index.html';
    //console.log('Spanish');
});

$('#EnglishLanguage').click(function () {
    window.location.href = 'indexen.html';
    //console.log('English');
});

$('#FrenchLanguage').click(function () {
    window.location.href = 'indexfr.html';
    //console.log('English');
});

$('#ArabicLanguage').click(function () {
    window.location.href = 'indexar.html';
    //console.log('English');
});

$('#GermanLanguage').click(function () {
    window.location.href = 'indexde.html';
    //console.log('English');
});

$('#GranulometriaLink').click(function () {
    window.location.href = 'granulometry.html';
    //console.log('English');
}); 

$('#GranulometriaLinkEN').click(function () {
    window.location.href = 'granulometryen.html';
    //console.log('English');
}); 

$('#GranulometriaLinkFR').click(function () {
    window.location.href = 'granulometryfr.html';
    //console.log('English');
}); 
//console.log(redirected)