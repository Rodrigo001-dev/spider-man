document.addEventListener('DOMContentLoaded', () => {

  // timeline
  let tl = new TimelineMax();

  // fromTo é uma função onde ele vai de algum lugar para outro lugar
  // na primeira posição é o nome da classe e na segunda é o tempo
  // o from é o width: 100% e o To é o width: 0%
  tl
    .fromTo('.bg-loader', 1, {width: '100%'},{
      width: '0%', delay: 5, ease: Expo.easeInOut
    })

    .fromTo('.bg-video', 2, 
      {width: '0%', opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {width: '100%', opacity: 1, ease: Power3.easeInOut
      }, '-=1'
    )

    .fromTo('.logo', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.nav-list', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.nav-social', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.item-1', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.item-2', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.item-3', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.item-4', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )

    .fromTo('.item-5', 0.7, 
      {y: -50, opacity: 0},
      // o -=1 é para o video começar antes de aparecer em tela e o 1 é o segundo
      {y: 0, opacity: 1, ease: Power3.easeInOut
      }, '-=0.5'
    )
});