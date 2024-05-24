const API_ENDPOINT = 'https://qsncjif5k4d26csfrswqnva5zu0cwcaa.lambda-url.ap-northeast-1.on.aws/'
self.addEventListener("notificationclick", function (event) {

    if (!event.notification || !event.notification.data) {
        return
    }

    const data = event.notification.data

    if (data.notification_id) {

        const messaging = firebase.messaging()
        messaging.getToken()
            .then(token => {
                return fetch(
                    API_ENDPOINT,
                    {
                        method: "post",
                        mode: "no-cors",
                        cache: "no-cache",
                        body: JSON.stringify({
                            type: 'unseal',
                            notification_id: data.notification_id,
                            token: token
                        }),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then((resposnse) => {
                        return
                    })
            })
            .catch((e) => {
                console.error(e)
                return
            })
    }

    if (data.click_action) {
        event.waitUntil(self.clients.openWindow(data.click_action));
        event.notification.close()
    }
});

importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-messaging.js');
firebase.initializeApp({
    "projectId": "webpush-service",
    "apiKey": "AIzaSyDTsvcY8tCU8X8oa2j-VfW_wNqDoNoNQDQ",
    'messagingSenderId': '65539963573',
    "appId": "1:65539963573:web:cd335b4675037d1edc5cfc"
});


const DB_NAME = "webpushdb"
    , DB_VERSION = 1
    , OBJ_STORE_NAME = "notification_history"

function openDB(db_name, db_version, store_name) {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(db_name, db_version)
        req.onupgradeneeded = 
        req.onsuccess = function (event) {
            resolve(event.target.result)
        }
        req.onerror = reject
    })
}

function readDB(store, keyValue) {
    return new Promise((resolve, reject) => {
        const req = store.get(keyValue)
        req.onsuccess = function (e) {
            resolve(e.target.result)
        }
        req.onerror = reject
    })
}

function writeDB(store, data) {
    return new Promise((resolve, reject) => {
        const req = store.put(data)
        req.onsuccess = function (e) {
            resolve(e)
        }
        req.onerror = reject
    })
}

function getAll(store) {
    return new Promise((resolve, reject) => {
        const req = store.getAll()
        req.onsuccess = 
        req.onerror = reject
    })
}

function deleteRecord(store, key) {
    return new Promise((resolve, reject) => {
        const req = store.delete(key)
        req.onsuccess = 
        req.onerror = reject
    })
}

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(async function (payload) {
    const notificationId = payload.data.notification_id
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon,
        image: payload.data.image || undefined,
        data: payload.data
    };

    let show_flag = true;
    try {
        if (!indexedDB) throw 'not supported'

        const db = await openDB(DB_NAME, DB_VERSION, OBJ_STORE_NAME)
        const trans = db.transaction(OBJ_STORE_NAME, 'readwrite')
            , store = trans.objectStore(OBJ_STORE_NAME)

        const data = await readDB(store, notificationId)
        if (!data) {
            await writeDB(store, {notificationId: notificationId, date: Date.now()})
        } else {
            show_flag = false
        }

        // clean up
        const records = await getAll(store)
        const now = new Date()
        if (records) {
            for (let i = 0; i < records.length; i++) {
                let d = new Date(records[i].date)
                if (now - d > 1000 * 60 * 60 * 24 * 1) {
                    await deleteRecord(store, records[i].notificationId)
                }
            }
        }

        db.close()

    } catch (e) {
        console.log(e)
    }

    if (show_flag) {
        self.registration
            .showNotification(notificationTitle, notificationOptions)
            .then(
            .then(token => {
                return fetch(
                    API_ENDPOINT,
                    {
                        method: "post",
                        mode: "no-cors",
                        cache: "no-cache",
                        body: JSON.stringify({
                            type: 'distribute',
                            notification_id: payload.data.notification_id,
                            token: token
                        }),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then((resposnse) => {
                        return
                    })
            })
            .catch((e) => {
                console.error(e)
                return
            })
    }
});
