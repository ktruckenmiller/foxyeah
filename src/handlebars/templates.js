!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.downloadFirefox=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t,s=l.helperMissing,o="function";return t=null!=(t=l.download_button_copy||(null!=a?a.download_button_copy:a))?t:s,'<div class="modal__footer">\n	<div class="choose">\n		<p>'+(null!=(i=typeof t===o?t.call(a,{name:"download_button_copy",hash:{},data:e}):t)?i:"")+'</p>\n		<a title="Download Firefox" href="http://mozilla.org/firefox/personal/?utm_source=foxyeahsite&utm_medium=referral&utm_content='+this.escapeExpression((t=null!=(t=l.post_name||(null!=a?a.post_name:a))?t:s,typeof t===o?t.call(a,{name:"post_name",hash:{},data:e}):t))+'&utm_campaign=sc-2015-foxyeah" class="button button--white">Choose Firefox</a>\n	 </div>\n </div>'},useData:!0}),l.email=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t,s=this.escapeExpression,o=l.helperMissing,r="function";return'\n<div class="modal--email">\n  <form data-parsley-validate id="email-form">\n    <div class="email__section">\n      <div class="figure figure--email" style="background-image: url('+s(this.lambda(null!=(i=null!=a?a.image:a)?i.url:i,a))+');"></div>\n    </div>\n    <div class="email__section">\n      <fieldset>\n        <label for="from">From <span>(Your Name)</span></label>\n        <input type="text" id="from" name="from" data-parsley-required="true" data-parsley-maxlength="50">\n      </fieldset>\n      <fieldset>\n        <label for="to">Send to <span>(Email)</span></label>\n        <input type="email" id="to" name="to" data-parsley-required="true" data-parsley-type="email" data-parsley-maxlength="50">\n      </fieldset>\n      <fieldset>\n        <label for="subject">Subject</label>\n        <p class="preview">'+s((t=null!=(t=l.email_subject||(null!=a?a.email_subject:a))?t:o,typeof t===r?t.call(a,{name:"email_subject",hash:{},data:e}):t))+'</p>\n      </fieldset>\n      <fieldset>\n        <label for="body">Body</label>\n        <p class="preview">'+s((l.breaklines||a&&a.breaklines||o).call(a,null!=a?a.email_body:a,{name:"breaklines",hash:{},data:e}))+'</p>\n      </fieldset>\n      <div class="form__response"></div>\n      <input type="hidden" name="id" value="'+s((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:o,typeof t===r?t.call(a,{name:"ID",hash:{},data:e}):t))+'">\n    </div>\n    <div class="email__actions">\n      <p class="terms">\n        Email services provided by Mandrill. To learn more, check their <a href="https://mandrill.com/privacy/" target="_blank">privacy policy</a>.\n      </p>\n      <span id="spinner" class="spinner"></span>\n      <input type="submit" class="button button--send" value="Send" />\n      <a class="button button--cancel" href="">Cancel</a>\n    </div>\n  </form>\n</div>'},useData:!0}),l.evergreen=a({1:function(a,l,n,e){var i;return(null!=(i=l["if"].call(a,null!=a?a.link:a,{name:"if",hash:{},fn:this.program(2,e,0),inverse:this.program(4,e,0),data:e}))?i:"")+(null!=(i=l["if"].call(a,null!=a?a.link:a,{name:"if",hash:{},fn:this.program(6,e,0),inverse:this.noop,data:e}))?i:"")},2:function(a,l,n,e){var i,t,s=l.helperMissing,o="function",r=this.escapeExpression;return'      <a href="'+r((t=null!=(t=l.link||(null!=a?a.link:a))?t:s,typeof t===o?t.call(a,{name:"link",hash:{},data:e}):t))+'" target="_blank">\n      <img src="'+r(this.lambda(null!=(i=null!=a?a.image:a)?i.tile:i,a))+'" alt="'+r((t=null!=(t=l.title||(null!=a?a.title:a))?t:s,typeof t===o?t.call(a,{name:"title",hash:{},data:e}):t))+'" />\n'},4:function(a,l,n,e){var i,t,s=this.escapeExpression;return'      <img class="zoom" src="'+s(this.lambda(null!=(i=null!=a?a.image:a)?i.url:i,a))+'" alt="'+s((t=null!=(t=l.title||(null!=a?a.title:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"title",hash:{},data:e}):t))+'" />\n'},6:function(){return"      </a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t;return'  <li class="tiles__item no-modal" id="tile'+this.escapeExpression((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"ID",hash:{},data:e}):t))+'">\n'+(null!=(i=l["if"].call(a,null!=a?a.image:a,{name:"if",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+"  </li>"},useData:!0}),l.holiday=a({1:function(a,l,n,e){var i,t,s=this.escapeExpression;return'      <img class="zoom" src="'+s(this.lambda(null!=(i=null!=a?a.image:a)?i.tile:i,a))+'" alt="'+s((t=null!=(t=l.title||(null!=a?a.title:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"title",hash:{},data:e}):t))+'" />\n'},3:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.socialFooter,a,{name:"socialFooter",data:e,indent:"      ",helpers:l,partials:n}))?i:""},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t;return'  <li class="tiles__item no-modal" id="tile'+this.escapeExpression((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"ID",hash:{},data:e}):t))+'">\n'+(null!=(i=l["if"].call(a,null!=a?a.image:a,{name:"if",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+(null!=(i=l["if"].call(a,null!=a?a.description:a,{name:"if",hash:{},fn:this.program(3,e,0),inverse:this.noop,data:e}))?i:"")+"  </li>"},usePartial:!0,useData:!0}),l.image=a({1:function(a,l,n,e){var i,t,s=this.escapeExpression;return'      <img class="zoom" src="'+s(this.lambda(null!=(i=null!=a?a.image:a)?i.tile:i,a))+'" alt="'+s((t=null!=(t=l.title||(null!=a?a.title:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"title",hash:{},data:e}):t))+'" />\n'},3:function(a,l,n,e){var i,t=l.helperMissing,s="function",o=this.escapeExpression;return'      <p class="inspiration">Created by '+o((i=null!=(i=l.inspired_by_name||(null!=a?a.inspired_by_name:a))?i:t,typeof i===s?i.call(a,{name:"inspired_by_name",hash:{},data:e}):i))+" in "+o((i=null!=(i=l.inspired_by_location||(null!=a?a.inspired_by_location:a))?i:t,typeof i===s?i.call(a,{name:"inspired_by_location",hash:{},data:e}):i))+"</p>\n"},5:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.socialFooter,a,{name:"socialFooter",data:e,indent:"      ",helpers:l,partials:n}))?i:""},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t;return'  <li class="tiles__item item--image" data-type="image" id="tile'+this.escapeExpression((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"ID",hash:{},data:e}):t))+'">\n'+(null!=(i=l["if"].call(a,null!=a?a.image:a,{name:"if",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+(null!=(i=l["if"].call(a,null!=a?a.inspired_by_name:a,{name:"if",hash:{},fn:this.program(3,e,0),inverse:this.noop,data:e}))?i:"")+(null!=(i=l["if"].call(a,null!=a?a.description:a,{name:"if",hash:{},fn:this.program(5,e,0),inverse:this.noop,data:e}))?i:"")+"  </li>"},usePartial:!0,useData:!0}),l.legal=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a){var l;return'\n<div class="legal_wrap">\n	'+(null!=(l=this.lambda(a,a))?l:"")+"\n</div>"},useData:!0}),l.modal=a({1:function(a,l,n,e){var i;return'  <div class="modal--image">\n\n\n\n\n\n    <div class="figure figure--image" style="background-image: url('+this.escapeExpression(this.lambda(null!=(i=null!=a?a.image:a)?i.url:i,a))+');"></div>\n\n\n'+(null!=(i=l["if"].call(a,null!=a?a.download:a,{name:"if",hash:{},fn:this.program(2,e,0),inverse:this.program(4,e,0),data:e}))?i:"")+"  </div>\n"},2:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.downloadFirefox,a,{name:"downloadFirefox",data:e,indent:"      ",helpers:l,partials:n}))?i:""},4:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.socialFooterModal,a,{name:"socialFooterModal",data:e,indent:"      ",helpers:l,partials:n}))?i:""},6:function(a,l,n,e){var i,t;return'  <div class="modal--video">\n    <div class="video-container">\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/'+this.escapeExpression((t=null!=(t=l.youtube_id||(null!=a?a.youtube_id:a))?t:l.helperMissing,"function"==typeof t?t.call(a,{name:"youtube_id",hash:{},data:e}):t))+'?autohide=0&autoplay=1&cc_load_policy=0&controls=1&disablekb=0&fs=0&iv_load_policy=3&loop=0&modestbranding=1&origin=0&rel=0&showinfo=0&theme=0" frameborder="0" allowfullscreen></iframe>\n\n    </div>\n'+(null!=(i=l["if"].call(a,null!=a?a.download:a,{name:"if",hash:{},fn:this.program(7,e,0),inverse:this.program(4,e,0),data:e}))?i:"")+"  </div>\n"},7:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.downloadFirefox,a,{name:"downloadFirefox",data:e,indent:"        ",helpers:l,partials:n}))?i:""},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t=l.helperMissing;return(null!=(i=(l.if_eq||a&&a.if_eq||t).call(a,null!=a?a.post_type:a,"image",{name:"if_eq",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+(null!=(i=(l.if_eq||a&&a.if_eq||t).call(a,null!=a?a.post_type:a,"video",{name:"if_eq",hash:{},fn:this.program(6,e,0),inverse:this.noop,data:e}))?i:"")},usePartial:!0,useData:!0}),l.socialFooter=a({1:function(a,l,n,e){var i,t=l.helperMissing,s="function",o=this.escapeExpression;return' <span class="share__count" id="share'+o((i=null!=(i=l.ID||(null!=a?a.ID:a))?i:t,typeof i===s?i.call(a,{name:"ID",hash:{},data:e}):i))+'">'+o((i=null!=(i=l.popularity||(null!=a?a.popularity:a))?i:t,typeof i===s?i.call(a,{name:"popularity",hash:{},data:e}):i))+"</span>"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t,s=l.helperMissing,o="function",r=this.escapeExpression;return'<div class="details">\n  <p class="details__title">Share this →</p>\n  <ul data-id='+r((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:s,typeof t===o?t.call(a,{name:"ID",hash:{},data:e}):t))+' class="share share--tile" data-bitly='+r((t=null!=(t=l.bitly||(null!=a?a.bitly:a))?t:s,typeof t===o?t.call(a,{name:"bitly",hash:{},data:e}):t))+'>\n    <li class="share__item">\n      <a class="icon icon--email" href="">Share via Email</a>\n    </li>\n    <li class="share__item">\n      <a class="icon icon--twitter" href="'+r((t=null!=(t=l.permalink||(null!=a?a.permalink:a))?t:s,typeof t===o?t.call(a,{name:"permalink",hash:{},data:e}):t))+'">share on Twitter</a>\n    </li>\n    <li class="share__item">\n      <a class="icon icon--facebook" href="'+r((t=null!=(t=l.permalink||(null!=a?a.permalink:a))?t:s,typeof t===o?t.call(a,{name:"permalink",hash:{},data:e}):t))+'">share on Facebook</a>\n    </li>\n\n   '+(null!=(i=l["if"].call(a,null!=a?a.popularity:a,{name:"if",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+"\n\n  </ul>\n</div>"},useData:!0}),l.socialFooterModal=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t,s=l.helperMissing,o="function",r=this.escapeExpression;return'<div class="modal__footer">\n  <div class="social">\n    \n    <ul data-id='+r((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:s,typeof t===o?t.call(a,{name:"ID",hash:{},data:e}):t))+' class="share share--tile" data-bitly='+r((t=null!=(t=l.bitly||(null!=a?a.bitly:a))?t:s,typeof t===o?t.call(a,{name:"bitly",hash:{},data:e}):t))+'>\n      <li><strong>Share this</strong></li>\n      <li class="share__item">\n        <a class="icon icon--facebook" href="'+r((t=null!=(t=l.permalink||(null!=a?a.permalink:a))?t:s,typeof t===o?t.call(a,{name:"permalink",hash:{},data:e}):t))+'">share on Facebook</a>\n      </li>\n      <li class="share__item">\n        <a class="icon icon--twitter" href="'+r((t=null!=(t=l.permalink||(null!=a?a.permalink:a))?t:s,typeof t===o?t.call(a,{name:"permalink",hash:{},data:e}):t))+'">share on Twitter</a>\n      </li>\n      <li class="share__item">\n        <a class="icon icon--email" href="">Share via Email</a>\n      </li>\n\n    </ul>\n    <p>'+(t=null!=(t=l.download_button_copy||(null!=a?a.download_button_copy:a))?t:s,null!=(i=typeof t===o?t.call(a,{name:"download_button_copy",hash:{},data:e}):t)?i:"")+" "+r((t=null!=(t=l.generic_modal_text||(null!=a?a.generic_modal_text:a))?t:s,typeof t===o?t.call(a,{name:"generic_modal_text",hash:{},data:e}):t))+"</p>\n  </div>\n</div>"},useData:!0}),l.video=a({1:function(a,l,n,e){var i;return null!=(i=this.invokePartial(n.socialFooter,a,{name:"socialFooter",data:e,indent:"      ",helpers:l,partials:n}))?i:""},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,e){var i,t,s=l.helperMissing,o="function",r=this.escapeExpression;return'  <li class="tiles__item item--video" data-type="video" data-video-url="'+r((t=null!=(t=l.youtube_link||(null!=a?a.youtube_link:a))?t:s,typeof t===o?t.call(a,{name:"youtube_link",hash:{},data:e}):t))+'" id="tile'+r((t=null!=(t=l.ID||(null!=a?a.ID:a))?t:s,typeof t===o?t.call(a,{name:"ID",hash:{},data:e}):t))+'">\n    <img class="zoom" src="'+r(this.lambda(null!=(i=null!=a?a.image:a)?i.tile:i,a))+'" alt="'+r((t=null!=(t=l.title||(null!=a?a.title:a))?t:s,typeof t===o?t.call(a,{name:"title",hash:{},data:e}):t))+'" />\n    <span class="play zoom">play</span>\n'+(null!=(i=l["if"].call(a,null!=a?a.description:a,{name:"if",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+"  </li>"},usePartial:!0,useData:!0})}();
