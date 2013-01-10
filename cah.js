if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cah.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.name.events({
    'change input' : function (event) {
      var name = event.currentTarget.value;

      console.log("\tInserting player " + name);
      console.log("Total players: " + Players.find({}).count());

      Players.insert({name: name});
    }
  });


  Meteor.startup(function() {
    // $('input[name=name]').change(function(){
    //   console.log("inserting player");
    //   Players.insert({name: $(this).val()});
    // });
  });

}

// if (Meteor.isServer) {
//   Meteor.startup(function () {

//     Cards.insert({text: "test card", color: 'black'});
//   });
// }

Players = new Meteor.Collection('players');
Cards = new Meteor.Collection('cards');
Games = new Meteor.Collection('games');