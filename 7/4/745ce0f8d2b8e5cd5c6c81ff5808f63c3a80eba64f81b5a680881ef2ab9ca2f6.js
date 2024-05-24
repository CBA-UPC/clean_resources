var tmzrLibCountExec = function(siteId, formatId, status){
    if(Math.floor(Math.random() * 4)!==0){
        //return;
    }

    const randomNumber = Math.floor(Math.random() * 101);
    const partitionKey = `pk-${randomNumber}-h`;

    AWS.config.update({
        region: 'eu-west-1',
        accessKeyId: 'AKIARUA7VXOMLXRYLGG7',
        secretAccessKey: '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',
    });
    const kinesis = new AWS.Kinesis();
    const streamName = 'ad_metric';
    const endpoint = 'https://kinesis.eu-west-1.amazonaws.com/' + streamName;
    const data = {
        s: siteId,
        f: formatId,
        fi: status
    };

    const params = {
        StreamName: streamName,
        PartitionKey: partitionKey,
        Data: JSON.stringify(data)
    };

    kinesis.putRecord(params, (err, data) => {
        if (err) {
            //console.error('Erreur lors de l\'envoi des données à Kinesis :', err);
        } else {
            //console.log('Données envoyées avec succès à Kinesis :', data);
        }
    });
}
