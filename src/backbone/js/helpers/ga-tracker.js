define([
    'jquery',
    'underscore',
    'backbone',
    'tracking-plan'
], function($, _, Backbone, TrackingPlan) {

    //_gaq hardcoded as to have the analytics
    //var _gaq = [];

    var TrackerHelper = {

        event: function(parameters, vars, callback) {
            var params = ['_trackEvent'],
                updatedParameter, json;

            for (var i = 0; i < parameters.length; i++) {
                updatedParameter = parameters[i];
                for (k in vars) {
                    if (vars.hasOwnProperty(k) && (updatedParameter.indexOf('${' + k + '}') > -1 || parameters[i].indexOf('${' + k + '}') > -1)) {
                        if (updatedParameter.indexOf('${' + k + '}') > -1) {
                            updatedParameter = updatedParameter.replace('${' + k + '}', vars[k]);
                        } else {
                            updatedParameter = parameters[i].replace('${' + k + '}', vars[k]);
                        }
                    }
                }
                params.push(updatedParameter);
            }
            if (!!callback) {
                _gaq.push(['_set', 'hitCallback', callback]);
            }

            json = JSON.stringify(params);

            if (this.previousTriggered != json) {
                _gaq.push(params);
            }

            this.previousTriggered = json;

            return vars;
        },

        page: function(extraPath, vars, callback) {
            //var path = TrackingPlan.basePath + (extraPath || ''), updatedPath = path, params = ['_trackPageview'], json;
            var path = (extraPath || ''),
                updatedPath = path,
                params = ['_trackPageview'],
                json;
            for (k in vars) {
                if (vars.hasOwnProperty(k) && path.indexOf('${' + k + '}') > -1) {
                    updatedPath = updatedPath.replace('${' + k + '}', vars[k]);
                }
            }
            params.push(updatedPath);
            if (!!callback) {
                _gaq.push(['_set', 'hitCallback', callback]);
            }
            json = JSON.stringify(params);

            if (this.previousPageTriggered != json) {
                _gaq.push(params);
            }

            this.previousPageTriggered = json;

            return vars;
        },

        trigger: function(planKey, vars, callback) {
            //disable for Google Tag Manager support
            var plan = TrackingPlan.Plan[planKey],
                params = [];

            if (planKey.indexOf('.page') > -1) {
                params = TrackerHelper.page(plan.parameters[0], vars, callback);
            } else {
                params = TrackerHelper.event(plan.parameters, vars, callback);
            }

            if (planKey == "click_recipe_expanded.page") {
                _gaq.push(['_setCustomVar', 3, 'recipe_view', 'overlay_' + vars.typeOfDish, 3]);
            }
        }

    };

    return TrackerHelper;

});