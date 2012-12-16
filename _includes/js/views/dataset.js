// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Application.Views.DatasetView = (function(_super) {

    __extends(DatasetView, _super);

    function DatasetView() {
      return DatasetView.__super__.constructor.apply(this, arguments);
    }

    DatasetView.prototype.template = $('#dataset_template').html();

    DatasetView.prototype.el = '#datasets';

    DatasetView.prototype.tagName = "div";

    DatasetView.prototype.className = "dataset";

    DatasetView.prototype.events = {
      "click .remove_dataset": "removeDataset"
    };

    DatasetView.prototype.render = function() {
      var compiled;
      compiled = _.template(this.template);
      this.$el.append(compiled(this.model.toJSON()));
      return this.renderFields();
    };

    DatasetView.prototype.removeDataset = function() {
      if (confirm("Are you sure?")) {
        return this.remove();
      }
    };

    DatasetView.prototype.renameDataset = function() {
      return $(this).parent().parent().parent().parent().children('h3').html($(this).val());
    };

    DatasetView.prototype.renderFields = function() {
      var _this = this;
      return Application.Schema.basic.forEach(function(field) {
        var view;
        view = new Application.Views.FieldView({
          model: field
        });
        return view.render();
      });
    };

    return DatasetView;

  })(Backbone.View);

}).call(this);