.ad {
    margin: 16px auto 16px;
    text-align: center;
}

.ad:first-child {
    margin-top: 0;
    margin-bottom: 16px;
}

#ad-rectangle1:nth-child(2),
#ad-rectangle2:nth-child(2) {
    margin-top: 16px;
    margin-bottom: 16px;
}

#ad-rectangle1:first-child,
#ad-rectangle2:first-child {
    margin-top: 0;
    margin-bottom: 16px;
}

.header__banner > div,
.footer__ad > div {
    min-width: 728px;
    min-height: 90px;
    display: flex;
    justify-content: center;
}

.header__banner > div,
.footer__ad > div {
     margin: 24px 0;
}

.footer__ad{
    overflow: hidden;
    background-color:#fff;
}

@media (max-width: 991px) {
    .header__banner, .footer__ad{
        display: none;
    }
    .header__banner, .footer__ad{
        display: none;
    }
    .tb__footer__container, .tb__footer__amp{
        padding: 0 16px;
    }
    
    /* banners homes editorias */
    .list__politica #ad-rectangle1,
    .list__saude #ad-rectangle1,
    .list__esporte #ad-rectangle2 {
        margin-bottom: 16px;
    }

    .list__saude #ad-rectangle2 {
        text-align: center;
    }
    
}