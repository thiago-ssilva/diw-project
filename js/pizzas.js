(function() {
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $("button[data-toggle]").click(function() {
        // instanciate new modal
        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            cssClass: ['details-modal'],
        });

        const $card = $(this).parents('.card');
        const title = $card.find('.card__title').text();
        const imgSrc = $card.find('.card__img').attr('src');
        const description = $card.find('.card__description').html();

        modal.setContent(
            `<h1>${title}</h1>
            <div class='details-modal__description'>
                <img src='${imgSrc}' class='responsive-img' />
                ${description}
            </div>
            `
        );

        modal.addFooterBtn('Fechar', 'btn btn-secondary', function() {
            modal.close();
        });

        // add another button
        modal.addFooterBtn('Pedir Agora', 'btn btn-primary', function() {
            window.open("https://www.ifood.com.br/delivery/gravatai-rs/rodapizza-centro/48ae05de-6118-48ec-98f2-bd1a11fea938", "_blank")
            modal.close();
        });

        // open modal
        modal.open();
    })
})();