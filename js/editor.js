$(function () {

    var SOUNDS_DEFAULT = {
        "gotHit": null,
        "wasKilled": null,
        "hitOther": null,
        "killedOther": null,
        "suicide": null,
        "drowned": null,
        "pickedBonus": null
    };
    var MAN = [
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairBottom","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","hairBottom","hairBottom","hairBottom","hairBottom","hairTop","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","hairBottom","hairBottom","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","hairBottom","hairBottom","hairTop","hairTop","hairTop","hairTop","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","face","hairBottom","hairBottom","hairBottom","hairTop","hairTop","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","NA","NA","NA","NA","face","face","face","face","face","face","face","hairBottom","hairBottom","hairBottom","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","NA","NA","NA","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","face","face","face","face","face","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","face","bodyOuter","bodyOuter","bodyOuter","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","bodyOuter","bodyOuter","bodyOuter","bodyOuter","bodyOuter","bodyOuter","bodyOuter","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","handOuter","handOuter","handOuter","bodyOuter","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","handOuter","handOuter","handOuter","bodyOuter","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","handOuter","handOuter","handInner","bodyOuter","bodyInner","bodyInner","handOuter","handInner","handOuter","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","handOuter","handOuter","handOuter","bodyOuter","bodyInner","bodyInner","handOuter","handInner","handOuter","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","bodyOuter","bodyInner","bodyInner","handOuter","handInner","handOuter","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","bodyOuter","bodyInner","bodyInner","handOuter","handInner","handOuter","bodyInner","bodyInner","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","bodyOuter","bodyOuter","bodyOuter","handOuter","handOuter","handOuter","bodyOuter","bodyOuter","bodyOuter","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","trousers","trousers","trousers","trousers","trousers","trousers","trousers","trousers","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","trousers","trousers","trousers","trousers","trousers","trousers","trousers","trousers","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","trousers","trousers","trousers","NA","NA","trousers","trousers","trousers","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","trousers","trousers","trousers","NA","NA","trousers","trousers","trousers","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","trousers","trousers","trousers","NA","NA","trousers","trousers","trousers","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","shoes","shoes","shoes","NA","NA","shoes","shoes","shoes","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],
        ["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","shoes","shoes","shoes","shoes","NA","shoes","shoes","shoes","shoes","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"]
    ];

    var $log = $("#log");
    var model = new ProfileViewModel();

    function SkinColor(name, color) {
        var self = this;
        this.name = name;
        this.color = ko.observable(color);
        this.hexColor = ko.computed(function () {
            return self.color().substring(1).toLowerCase();
        });
    }

    function ProfileViewModel() {
        var self = this;
        self.version = 0.2;
        self.name = ko.observable("default_0");
        self.previewBackground = ko.observable("#999999");
        self.sounds = ko.mapping.fromJS(SOUNDS_DEFAULT);
        self.darkBackground = function () { self.previewBackground("#000000"); };
        self.lightBackground = function () { self.previewBackground("#999999"); };
        self.whiteBackground = function () { self.previewBackground("#FFFFFF"); };
        self.pickerColor = ko.observable("");
        self.skinColors = [
            new SkinColor("hairTop", "#ffff00"),
            new SkinColor("hairBottom", "#deda00"),
            new SkinColor("bodyOuter", "#0000ac"),
            new SkinColor("bodyInner", "#0000ff"),
            new SkinColor("handOuter", "#00b600"),
            new SkinColor("handInner", "#00ff00"),
            new SkinColor("trousers", "#ff0000"),
            new SkinColor("shoes", "#b4b600"),
            new SkinColor("face", "#ff91ac")
        ];
        self.man = MAN;
        self.miniMan = splitMan(MAN);

        self.loadSkin = function (file) {
            var reader = new FileReader();
            reader.onload = function() {
                var colors = $.parseJSON(reader.result);
                for (var colorName in colors) {
                    ko.utils.arrayForEach(self.skinColors, function (skinColor) {
                        if (skinColor.name == colorName) {
                            skinColor.color("#" + colors[colorName]);
                        }
                    });
                }
                log("Load Skin: successful (" + file.name + ")\n" + colors);
            };
            reader.readAsText(file);
        };
        self.skinData = function () {
            var skinItems = "";
            ko.utils.arrayForEach(self.skinColors, function (skinColor) {
                if (skinItems.length > 0) skinItems = skinItems + ",";
                skinItems = skinItems + "\"" + skinColor.name + "\": \"" + skinColor.hexColor() + "\"";
            });
            return "data:application/json,{" + skinItems + "}";
        };
        self.randomizeColors = function () {
            ko.utils.arrayForEach(self.skinColors, function (skinColor) {
                skinColor.color('#'+Math.floor(Math.random()*16777215).toString(16));
            });
        };

        self.loadSounds = function (file) {
            var reader = new FileReader();
            reader.onload = function() {
                ko.mapping.fromJSON(reader.result, self.sounds);
                log("Load Sounds: successful (" + file.name + ")");
            };
            reader.readAsText(file);
        };
    }

    function log(text) {
        var now = new Date();
        var h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        var timestamp = h + ":" + m + ":" + s;
        $log.prepend(timestamp + "\t" + text + "\n");
    }

    function splitMan(man) {
        var halfMan = [];
        for (var i = 0; i < man.length; i+=2) {
            var row = [];
            for (var j = 0; j < man[0].length; j+=2) {
                row.push(man[i][j]);
            }
            halfMan.push(row);
        }
        return halfMan;
    }

    ko.bindingHandlers.skinColor = {
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var colorName = ko.unwrap(valueAccessor());
            if (colorName != "NA") {
                var skinColors = bindingContext.$root.skinColors;
                ko.utils.arrayForEach(skinColors, function (skinColor) {
                    if (skinColor.name == colorName) {
                        $(element).css({'background-color': skinColor.color()});
                        return;
                    }
                });
            }
        }
    };

    ko.applyBindings(model);
    log("Knockout: view model bound");
});
