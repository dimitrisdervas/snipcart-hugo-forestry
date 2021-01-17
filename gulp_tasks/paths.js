'use strict';
var schoolsPath = {};

schoolsPath.collection = 'content/schools';
schoolsPath.csv        = 'data/schools';
schoolsPath.template   = 'gulp_templates/nunjucks/schools.html';

module.exports = schoolsPath;

var categories = {};

categories.collection = 'content/categories';
categories.csv        = '_data/categories';
categories.template   = 'gulp_templates/nunjucks/categories.hbs';

module.exports = categories;

