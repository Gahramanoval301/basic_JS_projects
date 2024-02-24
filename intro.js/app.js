introJs().addHints();
introJs().setOptions({
    steps: [{
        title: '1st step',
        intro: 'Hello World!',
        position: 'right',
    },
    {
        element: document.querySelector('.card__image'),
        intro: '<p>Helli</p>',
        position: 'top'
    }
    ],
    tooltipClass: 'custom_tooltip',
    showProgress: true,
    showBullets: false,
    disableInteraction: true,
    showButtons: true,
}).oncomplete(() => {
    alert('congrats')
}).start();