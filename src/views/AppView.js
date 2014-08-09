define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var PageView = require('views/PageView');

    function AppView() {
        View.apply(this, arguments);

        _createPageView.call(this);

        _setListeners.call(this);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    AppView.prototype.slideRight = function() {
        this.pageModifier.setTransform(Transform.translate(276, 0, 0), {
            duration: 300,
            curve: 'easeOut'
        });
    };

    AppView.prototype.slideLeft = function() {
        this.pageModifier.setTransform(Tranform.translate(0, 0, 0), {
            duration: 300,
            curve: 'easeOut'
        });
    };

    function _createPageView() {
        this.pageView = new PageView();
        this.pageModifier = new StateModifier();

        this.add(this.pageModifier).add(this.pageView);
    }

    function _setListeners() {
        this.pageView.on('menuToggle', function() {
            console.log('menu toggle!');
        }.bind(this));
    }

    module.exports = AppView;
});
