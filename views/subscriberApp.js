// var subscriberApp = new Vue({
//   el: '#subscriberApp',
//   data: {
//     subscribers: [
//       { name: 'Gandalf', done: true },
//       { name: 'Old Toby', done: true },
//       { name: 'Bilbo', done: true},
//        { name: "Smeagle", done: true },
//     ],
//     subscriber: { name: '', done: false }
//   },
//   methods: {
//     addSubscriber: function(e) {
//       e.preventDefault();
//       this.subscribers.push({
//         name: this.subscriber.name,
//         done: false
//       });
//       this.subscriber.name = '';
//     },
//     deleteSubscriber: function(subscriber) {
//       this.subscribers.splice(this.subscribers.indexOf(subscriber), 1)
//     }
//   }
// });
var subscriberApp = new Vue({
    el: '#subscriberApp',
    data: {
      subscriber: [
        { name: 'Gandalf', done: true },
        { name: 'Old Toby', done: true },
        { name: 'Bilbo', done: true},
         { name: "Smeagle", done: true },
      ]
    },
    methods: {
      addSubscriber: function(e) {
        e.preventDefault();
        this.subscribers.push({
          name: this.subscriber.name,
          done: false
        });
      },
      deleteSubscriber: function(subscriber) {
        this.subscribers.splice(this.subscribers.indexOf(subscriber), 1)
      }
    }
  });