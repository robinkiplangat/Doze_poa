var categoriesTemplate   = Handlebars.compile($('#nav-template').html());
var phrasesTemplate      = Handlebars.compile($('#phrases-template').html());

var navHtml = categoriesTemplate({
  categories: Dozepoa.categories(Dozepoa.currentLanguage),
  currentLanguage: Dozepoa.languages[Dozepoa.currentLanguage]
});

var phrasesHtml = phrasesTemplate({
  phrases: Dozepoa.content.categories[0]["phrases"]
});

var phrasesHtmlForCategory = function(categoryName) {
  var category = _.findWhere(Dozepoa.content.categories, {name: categoryName});
  var phrases  = Dozepoa.phrases(Dozepoa.currentLanguage, categoryName);

  return phrasesTemplate({
    phrases: phrases,
    categoryName: category[Dozepoa.currentLanguage]
  });
};

$('body').append(navHtml);
$('body').append(phrasesHtml);

$('#homepage .ui-grid-a a').on("click", function(){
  var categoryTitle = $(this).data('category');

  $('#phrases').remove();
  $('body').append(phrasesHtmlForCategory(categoryTitle));
});

$(document).on('click', '#phrases a[rel=phrase]', function(e) {
  e.preventDefault();
  $(this).children('.explanation').first().slideToggle('fast');
  $(this).parents('.ui-btn-inner').children('.ui-icon').toggleClass('ui-icon-arrow-d');
});

FastClick.attach(document.body);

$('#language-switcher li a').on('click', function(e){
  e.preventDefault();
  var language = $(this).data('language');
  Dozepoa.currentLanguage = language;

  location.href = "index.html?language=" + language;
});
