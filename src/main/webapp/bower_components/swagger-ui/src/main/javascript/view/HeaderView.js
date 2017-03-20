'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'click #show-pet-store-icon'    : 'showPetStore',
    'click #explore'                : 'showCustom',
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  showPetStore: function(){
    this.trigger('update-swagger-ui', {
      url:'http://petstore.swagger.io/v2/swagger.json'
    });
  },

  showCustomOnKeyup: function(e){
    if (e.keyCode === 13) {
      this.showCustom();
    }
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }

    this.trigger('update-swagger-ui', {
<<<<<<< HEAD
      url: $('#input_baseUrl').val(),
      apiKey: $('#input_apiKey').val()
=======
      url: $('#input_baseUrl').val()
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    });
  },

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    $('#input_baseUrl').val(url);

<<<<<<< HEAD
    //$('#input_apiKey').val(apiKey);
=======
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});
