const  counterUp  = window.counterUp.default

const counters = document.querySelectorAll( '.counter' )

new Waypoint({
  element: document.getElementById('count-sec'),
  handler: function(direction) {
    if(direction === 'down'){
      counters.forEach(function(counter){
        counterUp( counter, {
          duration: 3000,
          delay: 50,
          } )
      })
    }
  },
  offset: '75%' 
})