(function() {
  'use strict';

  var app = angular.module("Store", ['ui.bootstrap']);

  app.controller("StoreController", function() {
    this.products = items;
  });

  app.controller("PanelController", function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('GridController', function() {
    this.grid = 1;
    this.class = 'grid-group-item';
    this.selectGrid = function(_grid) {
      this.grid = _grid;
      if(this.grid) this.class = 'grid-group-item';
      else this.class = 'list-group-item';
    };
  });

  var items = [
    {
      "name": "Carter's Baby Boys' 2 Piece Set",
      "description": "超可爱的拼单神器！简单舒服又洋气！0-5岁男女都有！美国最受欢迎的婴儿品牌之一！",
      "specification": "None yet",
      "reviews": [],
      "image": "images/carters.png",
      "price": 129.00,
      "soldOut": false,
      "inStock": true
    },
    {
      "name": "CALVIN KLEIN SIMPLE LEATHER BELT",
      "description": "Calvin Klein 男士经典原色真皮皮带。简约不简单！宽度为1.5英寸 （约3.8厘米）",
      "specification": "None yet",
      "reviews": [],
      "image": "images/calvinKlein1.png",
      "price": 348.99,
      "soldOut": false,
      "inStock": true
    },
    {
      "name": "REVERSIBLE SQUARE PRONG BELT",
      "description": "Calvin Klein 男士黑色真皮正反两用皮带经典logo皮带扣！成熟男士的不二选择！宽度为1.25英寸",
      "specification": "None yet",
      "reviews": [],
      "image": "images/calvinKlein2.png",
      "price": 1299.00,
      "soldOut": false,
      "inStock": true
    },
    {
      "name": "COACH MADISON MADELINE LEATHER",
      "description": "Coach麦迪逊系列拼接SAFFIANO皮革MADELINE手提包，银色硬件/混合紫罗兰色 原价5850！",
      "specification": "None yet",
      "reviews": [],
      "image": "images/coach1.png",
      "price": 2148.00,
      "soldOut": false,
      "inStock": true
    },
    {
      "name": "COACH TOTE LEATHER",
      "description": "真实物品实拍 Coach大都市真皮托特包！简单经典明星上街最爱！百搭蓝色，原价4150！",
      "specification": "None yet",
      "reviews": [],
      "image": "images/coach2.jpg",
      "price": 869.99,
      "soldOut": false,
      "inStock": true
    }
  ];
})();