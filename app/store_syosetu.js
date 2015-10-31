#!/usr/bin/env node

var Sequelize = require('sequelize');
var models = require('../models');

var novel = models.Novel.build({ ncode: 'aaa', outline: 'bbb' });

