define([],function(){var a=Backbone.Model.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/libraries/",isVisible:function(a){var b=!0;return!a&&this.get("deleted")&&(b=!1),b}}),b=Backbone.Collection.extend({url:(window.galaxy_config?galaxy_config.root:"/")+"api/libraries",model:a,sort_key:"name",sort_order:null,initialize:function(a){a=a||{}},search:function(a){return""==a?this:this.filter(function(b){return-1!==b.get("name").indexOf(a)})},getVisible:function(a,c){c=c||[];var d=new b(this.filter(function(b){return b.isVisible(a)}));return d},sortByNameAsc:function(){return this.comparator=function(a,b){return a.get("name").toLowerCase()>b.get("name").toLowerCase()?1:b.get("name").toLowerCase()>a.get("name").toLowerCase()?-1:0},this.sort(),this},sortByNameDesc:function(){return this.comparator=function(a,b){return a.get("name").toLowerCase()>b.get("name").toLowerCase()?-1:b.get("name").toLowerCase()>a.get("name").toLowerCase()?1:0},this.sort(),this}}),c=Backbone.Model.extend({}),d=c.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/libraries/datasets/"}),e=c.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/folders/"}),f=Backbone.Collection.extend({model:c,sortByNameAsc:function(){return this.comparator=function(a,b){return a.get("type")===b.get("type")?a.get("name").toLowerCase()>b.get("name").toLowerCase()?1:b.get("name").toLowerCase()>a.get("name").toLowerCase()?-1:0:"folder"===a.get("type")?-1:1},this.sort(),this},sortByNameDesc:function(){return this.comparator=function(a,b){return a.get("type")===b.get("type")?a.get("name").toLowerCase()>b.get("name").toLowerCase()?-1:b.get("name").toLowerCase()>a.get("name").toLowerCase()?1:0:"folder"===a.get("type")?-1:1},this.sort(),this}}),g=Backbone.Model.extend({defaults:{folder:new f,urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/folders/",id:"unknown"},parse:function(a){this.get("folder").reset();for(var b=0;b<a.folder_contents.length;b++)if("folder"===a.folder_contents[b].type){var c=new e(a.folder_contents[b]);this.get("folder").add(c)}else if("file"===a.folder_contents[b].type){var f=new d(a.folder_contents[b]);this.get("folder").add(f)}else console.error("Unknown folder item type encountered while parsing response.");return a}}),h=Backbone.Model.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/histories/"}),i=Backbone.Collection.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/histories/",initialize:function(a){this.id=a.id},url:function(){return this.urlRoot+this.id+"/contents"},model:h}),j=Backbone.Model.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/histories/"}),k=Backbone.Collection.extend({url:(window.galaxy_config?galaxy_config.root:"/")+"api/histories",model:j}),l=Backbone.Model.extend({urlRoot:(window.galaxy_config?galaxy_config.root:"/")+"api/remote_files"});return{Library:a,Libraries:b,Item:d,Ldda:d,FolderAsModel:e,Folder:f,FolderContainer:g,HistoryItem:h,HistoryContents:i,GalaxyHistory:j,GalaxyHistories:k,Jstree:l}});
//# sourceMappingURL=../../../maps/mvc/library/library-model.js.map