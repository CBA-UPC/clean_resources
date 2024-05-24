function signal(blocked) {
    try {
        if (window.tracking && typeof window.tracking.track === "function") {
            sendTrack(blocked);
        } else {
            window.addEventListener("trackingReady", ;
        }
    } catch (error) {
        console.error('Failed to send tracking event');
    }
    
}

function sendTrack(blocked) {
    window.tracking.track('Tracking Protection Info', { route: 'privacy', blocked: blocked });
}

try {
    fetch(`https://google-analytics.com?=${new Date().getTime()}`, { mode: "no-cors" }).then(function() { signal(false); }).catch(;    
} catch (error) {
    console.error('Protection Detection failed');
}
