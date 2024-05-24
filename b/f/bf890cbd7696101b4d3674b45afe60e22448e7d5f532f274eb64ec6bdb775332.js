.banner {
    width: 723px;
}

.banner img {
    width: 100%;
    height: auto;
}

.profile {
    padding-top: 15.8px;
    padding-bottom: 40.3px;
    border-bottom: 2px solid #000000;
}

.profile-title h4 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 27px;
}

.profile-players {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}

.profile-players-player {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 190px;
    margin-right: 50px;
    margin-bottom: 10px;
}

.profile-players-player:nth-child(3n) {
    margin-right: 0px;
}

.profile-players-player-img {
    width: 60px;
    margin-right: 10px;
}

.profile-players-player-img img {
    width: 100%;
    height: auto;
}

.profile-players-player-name {
    font-weight: bold;
    font-size: 16px;
}

.player {
    margin-top: 14px;
}

.player-title h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20.5px;
    padding-bottom: 12.5px;
    border-bottom: 2px solid #DDDDDD;
}

.player-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.player-content-img {
    width: 200px;
    margin-right: 30px;
}

.player-content-img img {
    width: 100%;
    height: auto;
}

.player-content-descs {
    flex: 1;
}

.player-content-descs p{
    line-height: 27px;
}

.player-content-desc {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 15px;
}

.player-content-title {
    width: 60px;
    color: #745399;
    font-weight: bold;
    margin-right: 7px;
}

.player-content:nth-child(2) {
    padding-bottom: 21px;
    border-bottom: 2px solid #CCCCCC;
}

.items {
    display: block;
}

.player-content-head {
    font-size: 16px;
    font-weight: bold;
    color: #745399;
    margin-bottom: 8px;
    margin-top: 17px;
}

.player-content-item {
    font-size: 16px;
    padding-bottom: 15px;
}

.player-content-item:last-child {
    font-size: 16px;
    padding-bottom: 34.7px;
}

.player-content-item:not(:last-child) {
    background-image : linear-gradient(to right, #CCCCCC, #CCCCCC 4px, transparent 4px, transparent 8px);
    background-size: 8px 2px;
    background-position: left bottom;
    background-repeat: repeat-x;
}


.player-content:last-child {
    margin-bottom: 0px;
    border-bottom: 2px solid #000000;
}

@media screen and (max-width: 599px) {
    .uni-profile {
        padding: 0 16px;
    }

    .player {
        margin-top: 17.4px;
    }

    .player-title h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 8px;
        border-bottom: 2px solid #DDDDDD;
    }

    .player-content {
        display: block;
    }

    .player-content-img {
        width: 210px;
        height: 210px;
        margin: 0 auto;
        margin-bottom: 18px;
    }

    .player-content-descs {
        font-size: 15px;
    }

    .player-content-descs p{
        line-height: 30px;
    }

    .player-content-desc {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .player-content-title {
        width: 60px;
        color: #745399;
        font-weight: bold;
        margin-right: 7px;
    }

    .player-content:nth-child(2) {
        padding-bottom: 21px;
        border-bottom: 2px solid #CCCCCC;
    }

    .items {
        display: block;
    }

    .player-content-head {
        font-size: 15px;
        font-weight: bold;
        color: #745399;
        margin-bottom: 8px;
        margin-top: 17px;
    }

    .player-content-item {
        font-size: 15px;
        padding-bottom: 15px;
    }

    .player-content-item:last-child {
        font-size: 15px;
        padding-bottom: 35px;
    }

    .player-content-item:not(:last-child) {
        background-image : linear-gradient(to right, #CCCCCC, #CCCCCC 4px, transparent 4px, transparent 8px);
        background-size: 8px 2px;
        background-position: left bottom;
        background-repeat: repeat-x;
    }


    .player-content:last-child {
        margin-bottom: 0px;
        border-bottom: 2px solid #000000;
    }

    .banner {
        width: 315px;
    }

    .profile {
        padding-top: 17.8px;
        padding-bottom: 40.8px;
        border-bottom: 2px solid #000000;
    }

    .profile-title h4 {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 18.3px;
    }

    .profile-players {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .profile-players-player {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 155px;
        margin-right: 0px;
        margin-bottom: 20px;
    }

    .profile-players-player:nth-child(odd) {
        margin-right: 5px;
    }

    .profile-players-player-img {
        width: 54px;
        margin-right: 3px;
    }

    .profile-players-player-name {
        font-weight: bold;
        font-size: 14px;
    }
}