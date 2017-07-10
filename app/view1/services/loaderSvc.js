myServices.service('loaderSvc', function() {
    var manifest = [{
            src: "spritesheet_grant.png",
            id: "grant"
        }, {
            src: "sky.png",
            id: "sky"
        }, {
            src: "ground.png",
            id: "ground"
        }, {
            src: "hill1.png",
            id: "hill"
        }, {
            src: "hill2.png",
            id: "hill2"
        }, {
            src: "logo.png",
            id: "logo"
        }, {
            src: "runningTrack.mp3",
            id: "runningSound"
        }, {
            src: "jump.mp3",
            id: "jumpingSound"
        }],
        loader = new createjs.LoadQueue(true);
    createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]); // need this so it doesn't default to Web Audio
    loader.installPlugin(createjs.Sound);
    this.getResult = function(asset) {
        return loader.getResult(asset);
    };
    this.getLoader = function() {
        return loader;
    };
    this.loadAssets = function() {
        loader.loadManifest(manifest, true, "/assets/");
    };
});