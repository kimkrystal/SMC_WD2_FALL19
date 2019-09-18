(function () {
    var jQuery;
    // check if jquery exists - if not, load it.
    // then initiate our class
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.2.2') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js");
        if(script_tag.readyState) {
          script_tag.onreadystatechange = function () { // For old versions of IE
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                jQuery = window.jQuery.noConflict(true);
                conjuredReferralHandler();
            }
          };
        } else { // Other browsers
          script_tag.onload = function() {
            jQuery = window.jQuery.noConflict(true);
            conjuredReferralHandler();
          }
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        jQuery = window.jQuery;
        conjuredReferralHandler();
    }


    function conjuredReferralHandler() {
        jQuery(document).ready(function() {

            // set up modal if necessary
            
            // set up javascript cookie
            !function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(s){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var m=f[0].replace(u,decodeURIComponent);if(l=t.read?t.read(l,m):t(l,m)||l.replace(u,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(s){}if(n===m){c=l;break}n||(c[m]=l)}catch(s){}}return c}}return o.set=o,o.get=function(e){return o(e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

            // add appropriate vars
            jQuery('head').append('<style>/* below are all the default CSS styles for the referral pages */\n\n/* by default, don\'t display error messages */\n#conjured_referral .conjured_error,\n#conjured_redemption .conjured_error {\n  color: #ff0000;\n  display: none;\n}\n\n#conjured_referral .conjured_success {\n  color: #0e7f81;\n  display: none;\n}\n\n/* align everything to center */\n#conjured_referral,\n#conjured_redemption {\n  text-align: center;\n  position: relative;\n}\n#conjured_redemption {\n  overflow: visible;\n  padding-top: 25px;\n}\n\n\n/* align text inputs to center */\n#conjured_referral input[type="text"],\n#conjured_redemption input[type="text"] {\n  display: block;\n  margin: 0px auto 10px;\n  text-align: center;\n  max-width: 370px;\n  background: transparent;\n}\n\n\n#conjured_referral #conjured_advocate_signup,\n#conjured_referral #conjured_advocate_signup input[type="text"],\n#conjured_redemption,\n#conjured_redemption input[type="text"] {\n  text-align: left;\n}\n#conjured_referral #conjured_advocate_signup input[type="text"],\n#conjured_referral #conjured_advocate_signup .btn,\n#conjured_redemption input[type="text"],\n#conjured_redemption .btn {\n  margin-left: 0px;\n}\n\n#conjured_referral a,\n#conjured_redemption a {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding-bottom: 0;\n}\n\n/* set border for inputs with errors */\n#conjured_referral input[type="text"].error,\n#conjured_referral textarea.error,\n#conjured_redemption input[type="text"].error {\n  border: 1px solid #ff0000;\n}\n\n\n/* align text inputs to center */\n#conjured_referral textarea {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n/* align buttons to center */\n#conjured_referral button,\n#conjured_redemption button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n/* set facebook and twitter button colors */\n#conjured_referral button#conjured_share_social_fb_button {\n  background-color: #3B5998;\n  border-color: #3B5998;\n  color: #fff;\n  width: 370px;\n  max-width: 100%;\n  display: block;\n  margin: 10px auto;\n}\n#conjured_referral button#conjured_share_social_tw_button {\n  background-color: #00aced;\n  border-color: #00aced;\n  color: #fff;\n  width: 370px;\n  max-width: 100%;\n  display: block;\n  margin: 10px auto;\n}\n#conjured_referral button#conjured_share_social_link_button,\n#conjured_referral button#conjured_share_email_button {\n  width: 370px;\n  max-width: 100%;\n  display: block;\n  margin: 10px auto;\n}\n\n/* create overlay class to display email and terms as "modal" */\n#conjured_referral div.conjured_mini_modal {\n  margin: 0px;\n  position: absolute;\n  height: auto;\n  top: -90px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 25px;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);\n  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);\n  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);\n  overflow-y: scroll;\n  min-height: 500px;\n  z-index: 100000;\n}\n#conjured_referral div.conjured_mini_modal h4 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n#conjured_referral div.conjured_mini_modal label {\n  text-align: left;\n}\n#conjured_referral div.conjured_mini_modal input[type="text"],\n#conjured_referral div.conjured_mini_modal textarea {\n  width: 100%;\n  max-width: 100%;\n  text-align: left;\n}\n#conjured_referral div.conjured_mini_modal .mini_modal_close {\n  float: right;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  margin-top: 3px;\n  margin-right: 0px;\n  font-size: 30px;\n  color: #666;\n  line-height: 0.5;\n}\n\n/* make sure checkboxes and their labels both display on one line */\n#conjured_referral input[type="checkbox"],\n#conjured_redemption input[type="checkbox"] {\n  display: inline-block;\n}\n#conjured_referral label[for="conjured_accepts_marketing"],\n#conjured_redemption label[for="conjured_accepts_marketing"] {\n  display: inline;\n}\n\n/* if you\'re displaying your campaign in a modal, the following styles are relevant */\n.conjured_blocker {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: 10;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #000000;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-align: center;\n}\n.conjured_blocker #conjured_referral {\n  width: 90%;\n}\n.conjured_blocker:before {\n  content: "";\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: -0.05em;\n}\n.conjured_blocker.behind {\n  background-color: transparent;\n}\n.conjured_modal {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  z-index: 3;\n  max-width: 1200px !important;\n  background: #fff;\n  padding: 15px 30px;\n  border-radius: 8px;\n  -o-box-shadow: 0 0 10px #000;\n  -ms-box-shadow: 0 0 10px #000;\n  box-shadow: 0 0 10px #000;\n  text-align: left;\n}\n.conjured_modal a.conjured_close-modal {\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  text-indent: -9999px;\n  background: url("data:image/png;base64,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") no-repeat 0 0;\n}\n.conjured_modal-spinner {\n  display: none;\n  width: 64px;\n  height: 64px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-right: -32px;\n  margin-top: -32px;\n  background: url("data:image/gif;base64,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") #111 no-repeat center center;\n  border-radius: 8px;\n}\n.conjured_flexbox.left_image,\n.conjured_flexbox.right_image {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.conjured_flexbox.right_image {\n    flex-direction: row-reverse;\n}\n\n.conjured_flexbox.top_banner .conjured_content {\n    padding-top: 25px;\n}\n\n.conjured_flexbox .conjured_content,\n.conjured_flexbox .conjured_image {\n    flex: 1;\n}\n\n.conjured_flexbox .conjured_image > img {\n    display: block;\n    width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n    .conjured_flexbox .conjured_content,\n    .conjured_flexbox .conjured_image {\n        min-width: 100%;\n    }\n    .conjured_flexbox .conjured_content {\n        padding: 25px 10px;\n    }\n}\n            \n#conjured_referral button#conjured_share_sms_button {\n  display: none;\n  width: 200px;\n  max-width: 100%;\n  margin: 10px auto;\n}\n@media screen and (max-width: 768px) {\n    #conjured_referral button#conjured_share_sms_button {\n        display: block;\n    }\n}\n</style>');
            jQuery('#conjured_referral').append('<div id="conjured_advocate_signup">\n  <p id="conjured_save_advocate_error" class="conjured_error"\n    data-invalid-input="Please enter your name and a valid email address."\n    data-unknown-error="An error has occured. Please contact the administrator of this site for more information."\n  >\n  </p>\n  <input id="conjured_referral_name" class="type" name="name" type="text" value="" autocomplete="name" placeholder="Your first and last name" />\n  <input id="conjured_referral_email" class="type" name="email" type="text" value="" autocomplete="email" placeholder="Your email address" />\n  <input id="conjured_accepts_marketing" name="accepts_marketing" type="hidden" value="1" />\n  <button id="conjured_save_advocate" class="btn" style="margin-top:25px">Spread the Word</button>\n</div>');
            jQuery('#conjured_referral').append('<div id="conjured_advocate_share_type">\n  <p id="conjured_show_social_error" class="conjured_error"\n    data-blacklisted="Unfortunately, you aren\'t eligible for this offer."\n    data-max-monthly-referrals-hit="You\'ve hit your maximum referrals for the month. Try again next month."\n  >\n  </p>\n  <button class="btn" id="conjured_share_email_button">Send Via Email</button>\n  <button class="btn" id="conjured_share_social_fb_button" data-share-type="facebook">Post To Facebook</button>\n  <button class="btn" id="conjured_share_social_tw_button" data-share-type="twitter">Post To Twitter</button>\n  <button class="btn" id="conjured_share_social_link_button" data-share-type="link">Get A Link</button>\n  \n  <a id="conjured_terms_and_conditions_button" href="javascript:void(0)">Terms &amp; Conditions</a>\n</div>');
            jQuery('#conjured_referral').append('<div id="conjured_advocate_share_email" class="conjured_mini_modal">\n  <button id="conjured_share_email_close" class="mini_modal_close">&times;</button>\n  <h4>Share Via Email</h4>\n  <p id="conjured_send_email_error" class="conjured_error"\n    data-invalid-input="Please complete the form to send the referral."\n    data-blacklisted="Unfortunately, you aren\'t eligible for this offer."\n    data-max-monthly-referrals-hit="You\'ve hit your maximum referrals for the month. Try again next month."\n    data-self-referral="Sorry, but you can\'t refer yourself."\n  >\n  </p>\n  <p id="conjured_send_email_success" class="conjured_success">Thanks! Your email has been sent. Send another?</p>\n  <label>To:</label>\n  <input id="conjured_emails" class="type" name="emails" type="text" value="" placeholder="Enter emails separated by commas" />\n  <label>Subject:</label>\n  <input id="conjured_subject" class="type" name="subject" type="text" value="Get 10% off!" placeholder="Get 10% off!" />\n  <label>Message:</label>\n  <input id="conjured_message" class="type" name="message" placeholder="Hey there! I love The Sill and thought you would too. Check them out!" value="Hey there! I love The Sill and thought you would too. Check them out!" />\n  <button id="conjured_send_email_button" class="btn" style="margin-top:25px">Send Email</button>\n</div>');
            jQuery('#conjured_referral').append('<div id="conjured_advocate_share_link" class="conjured_mini_modal">\n  <button id="conjured_share_link_close" class="mini_modal_close">&times;</button>\n  <h4>Share Via Link</h4>\n  <p>Use the link below to share your referral!</p>\n  <p id="conjured_show_link_error" class="conjured_error"\n    data-blacklisted="Unfortunately, you aren\'t eligible for this offer."\n    data-max-monthly-referrals-hit="You\'ve hit your maximum referrals for the month. Try again next month."\n  >\n  </p>\n  <input type="text" class="type" id="conjured_link" value="REFERRAL_LINK_PLACEHOLDER" readonly />\n  <div>[ <a href="javascript:void(0)" id="conjured_copy_button">copy link</a> ]</div>\n</div>\n\n<script type="text/javascript">\n  document.getElementById("conjured_copy_button").addEventListener("click", function() {\n    conjured_copyToClipboard(document.getElementById("conjured_link"));\n  });\n  function conjured_copyToClipboard(elem) {\n    // create hidden text element, if it does not already exist\n    var targetId = "_hiddenCopyText_";\n    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";\n    var origSelectionStart, origSelectionEnd;\n    if (isInput) {\n      // can just use the original source element for the selection and copy\n      target = elem;\n      origSelectionStart = elem.selectionStart;\n      origSelectionEnd = elem.selectionEnd;\n    } else {\n      // must use a temporary form element for the selection and copy\n      target = document.getElementById(targetId);\n      if (!target) {\n        var target = document.createElement("textarea");\n        target.style.position = "absolute";\n        target.style.left = "-9999px";\n        target.style.top = "0";\n        target.id = targetId;\n        document.body.appendChild(target);\n      }\n      target.textContent = elem.textContent;\n    }\n    // select the content\n    var currentFocus = document.activeElement;\n    target.focus();\n    target.setSelectionRange(0, target.value.length);\n\n    // copy the selection\n    var succeed;\n    try {\n      succeed = document.execCommand("copy");\n    } catch(e) {\n      succeed = false;\n    }\n\n    if(succeed) {\n      var originalText = document.getElementById("conjured_copy_button").innerHTML;\n      document.getElementById("conjured_copy_button").innerHTML = "copied!";\n      setTimeout(\'document.getElementById("conjured_copy_button").innerHTML = "\' + originalText + \'"\', 2000);\n    }\n\n    // restore original focus\n    if (currentFocus && typeof currentFocus.focus === "function") {\n      currentFocus.focus();\n    }\n\n    if (isInput) {\n      // restore prior selection\n      elem.setSelectionRange(origSelectionStart, origSelectionEnd);\n    } else {\n      // clear temporary content\n      target.textContent = "";\n    }\n    return succeed;\n  }\n</script>');
            jQuery('#conjured_referral').append('<div id="conjured_advocate_terms" class="conjured_mini_modal">\n  <button id="conjured_terms_and_conditions_close" class="mini_modal_close">&times;</button>\n  <h4>Terms &amp; Conditions</h4>\n  <p style="text-align: left;">\n    Friends must spend a minimum of $50 in order to use the referral discount. 24 hours after a successful purchase by the friend referred using the referral discount code, advocate will receive a discount code via email for $5 off. <br />\n<br />\nAny abuse of this offer, as determined by The Sill , may result in the rescission of the referring customer\'s referral credit and the referred person\'s promo code as well as both parties\' inability to participate in this or future promotions. Referral credit cannot be applied to previous purchases, and is not redeemable for cash. This referral program is subject to modification or termination at any time without notice in our sole discretion.\n  </p>\n</div>');

            // replace variable
            jQuery('#conjured_referral').html( jQuery('#conjured_referral').html().replace( new RegExp("_TOTALFRIENDSREFERRED_", "g"), "<span id='conjured_total_friends_referred'>0</span>" ) );

            // if it's per advocate, go ahead and generate the link now
            
            jQuery('#conjured_referral #conjured_advocate_signup').hide();
            jQuery('#conjured_referral #conjured_advocate_share_type').hide();
            jQuery('#conjured_referral #conjured_advocate_share_email').hide();
            jQuery('#conjured_referral #conjured_advocate_share_link').hide();
            jQuery('#conjured_referral #conjured_advocate_terms').hide();

            
            // call any external function
            if(typeof conjuredReferralExternal == 'function') {
                conjuredReferralExternal(conjuredReferral);
            }

            // initialize class
            conjuredReferral.init();
        });
    }


    var conjuredReferral = {
            
                    adv: false,
        
        init: function() {

            jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-original-message', jQuery('#conjured_referral #conjured_save_advocate_error').text());
            jQuery('#conjured_referral #conjured_send_email_error').attr('data-original-message', jQuery('#conjured_referral #conjured_send_email_error').text());
            jQuery('#conjured_referral #conjured_show_link_error').attr('data-original-message', jQuery('#conjured_referral #conjured_show_link_error').text());

            // add this for backwards compatibility
            if(jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-invalid-input') == '') {
                jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-invalid-input', jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-original-message'));
            }
            if(jQuery('#conjured_referral #conjured_send_email_error').attr('data-invalid-input') == '') {
                jQuery('#conjured_referral #conjured_send_email_error').attr('data-invalid-input', jQuery('#conjured_referral #conjured_send_email_error').attr('data-original-message'));
            }
            if(jQuery('#conjured_referral #conjured_show_link_error').attr('data-invalid-input') == '') {
                jQuery('#conjured_referral #conjured_show_link_error').attr('data-invalid-input', jQuery('#conjured_referral #conjured_show_link_error').attr('data-original-message'));
            }

            jQuery('#conjured_referral #conjured_save_advocate').click({that: this}, function(event) {
                event.preventDefault();
                jQuery('#conjured_referral #save_advocate_error').hide();
                jQuery('#conjured_referral #conjured_referral_name').removeClass('error');
                jQuery('#conjured_referral #conjured_referral_email').removeClass('error');
                jQuery('#conjured_referral #conjured_save_advocate').prop('disabled', true).prop('readonly', 'readonly').addClass('disabled');

                var email_domain = '';
                var email_domain_array = jQuery('#conjured_referral #conjured_referral_email').val().split("@");
                if(email_domain_array[1]) {
                    email_domain = email_domain_array[1];
                }

                if(
                    jQuery('#conjured_referral #conjured_referral_name').val() == '' ||
                    jQuery('#conjured_referral #conjured_referral_email').val() == '' ||
                    jQuery('#conjured_referral #conjured_referral_email').val().indexOf('.@') != -1 ||
                    email_domain == 'hotmail.con' ||
                    email_domain == 'gmail.con' ||
                    email_domain == 'yahoo.con' ||
                    email_domain == 'aol.con' ||
                    email_domain == 'hotmail.cm' ||
                    email_domain == 'gmail.cm' ||
                    email_domain == 'yahoo.cm' ||
                    email_domain == 'aol.cm' ||
                    email_domain == 'hotnail.com' ||
                    email_domain == 'gnail.com' ||
                    email_domain == 'hormail.com' ||
                    email_domain == 'ail.com' ||
                    email_domain == 'gmil.com'
                ) {
                    if(jQuery('#conjured_referral #conjured_referral_name').val() == '') jQuery('#conjured_referral #conjured_referral_name').addClass('error');
                    if(jQuery('#conjured_referral #conjured_referral_email').val() == '') jQuery('#conjured_referral #conjured_referral_email').addClass('error');
                    jQuery('#conjured_referral #conjured_save_advocate').prop('disabled', false).removeProp('readonly').removeClass('disabled');

                    var error_text = jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-invalid-input');
                    jQuery('#conjured_referral #conjured_save_advocate_error').text(error_text).show();
                    return;
                }
                
                var accepts_marketing = 0;
                if(jQuery('#conjured_referral #conjured_accepts_marketing').attr('type') == 'checkbox') {
                    accepts_marketing = (jQuery('#conjured_referral #conjured_accepts_marketing').is(':checked') & 1);
                } else {
                    accepts_marketing = (jQuery('#conjured_referral #conjured_accepts_marketing').val() & 1);
                }
                event.data.that.jsonP(
                    'https://app.conjured.co/shopify/referral/save-advocate?cnjrd=MR1uSYGClkRWvbhkxqsAtFd6fUJTe48apcH2yB5M', 
                    {
                        shop: 'the-sill.myshopify.com', 
                        name: jQuery('#conjured_referral #conjured_referral_name').val(), 
                        email: jQuery('#conjured_referral #conjured_referral_email').val(), 
                        accepts_marketing: accepts_marketing, 
                        cmp: 741 
                    }, 
                    event.data.that.saveAdvocate
                );

            });

            jQuery('#conjured_referral #conjured_share_email_button').click(function(e) {
                e.preventDefault();
                jQuery('#conjured_referral #conjured_advocate_terms').hide();
                jQuery('#conjured_referral #conjured_advocate_share_link').hide();
                jQuery('#conjured_referral #conjured_advocate_share_email').show();
            });
            jQuery('#conjured_referral #conjured_share_email_close').click(function(e) {
                e.preventDefault();
                jQuery('#conjured_referral #conjured_advocate_share_email').hide();
            });

            jQuery('#conjured_referral #conjured_share_social_link_button').click({that: this}, function(event) {
                event.preventDefault();
                if(jQuery('#conjured_referral #conjured_link').val().indexOf('/a/refer-a-friend/redeem/') !== -1) {
                    jQuery('#conjured_referral #conjured_advocate_terms').hide();
                    jQuery('#conjured_referral #conjured_advocate_share_link').show();
                    jQuery('#conjured_referral #conjured_advocate_share_email').hide();
                } else {
                    jQuery('#conjured_referral #conjured_share_social_link_button').prop('disabled', true).prop('readonly', 'readonly').addClass('disabled');
                    event.data.that.jsonP(
                        'https://app.conjured.co/shopify/referral/share-link?cnjrd=MR1uSYGClkRWvbhkxqsAtFd6fUJTe48apcH2yB5M&shop=the-sill.myshopify.com&type=link&preview=',
                        {   
                            cmp: 741,
                            adv: event.data.that.adv   
                        },
                        event.data.that.showLink
                    );
                }
            });
            jQuery('#conjured_referral #conjured_share_link_close').click(function(e) {
                e.preventDefault();
                jQuery('#conjured_referral #conjured_advocate_share_link').hide();
            });

            jQuery('#conjured_referral #conjured_terms_and_conditions_button').click(function(e) {
                e.preventDefault();
                jQuery('#conjured_referral #conjured_advocate_terms').show();
                jQuery('#conjured_referral #conjured_advocate_share_link').hide();
                jQuery('#conjured_referral #conjured_advocate_share_email').hide();
            });
            jQuery('#conjured_referral #conjured_terms_and_conditions_close').click(function(e) {
                e.preventDefault();
                jQuery('#conjured_referral #conjured_advocate_terms').hide();
            });

            jQuery('#conjured_referral #conjured_share_social_fb_button, #conjured_referral #conjured_share_social_tw_button').click({that: this}, function(event) {
                event.preventDefault();
                var share_type = jQuery(this).attr('data-share-type');

                jQuery(this).prop('disabled', true).prop('readonly', 'readonly').addClass('disabled');
                window['socialWindow'] = window.open('', 'socialShare', 'height=250,width=575');
                event.data.that.jsonP(
                    'https://app.conjured.co/shopify/referral/share-link?cnjrd=MR1uSYGClkRWvbhkxqsAtFd6fUJTe48apcH2yB5M&shop=the-sill.myshopify.com&type=' + share_type + '&preview=',
                    { 
                        cmp: 741,
                        adv: event.data.that.adv  
                    },
                    event.data.that.showSocial
                );
            });

            jQuery('#conjured_referral #conjured_share_sms_button').click({that: this}, function(event) {
                event.preventDefault();
                if(jQuery('#conjured_referral #conjured_share_sms_button').attr('data-link') != undefined && jQuery('#conjured_referral #conjured_share_sms_button').attr('data-link').indexOf('/a/refer-a-friend/redeem/') !== -1) {
                    event.data.that.showSMS({
                        redeem_link: jQuery('#conjured_referral #conjured_share_sms_button').attr('data-link'), 
                        text: jQuery('#conjured_referral #conjured_share_sms_button').attr('data-text')
                    });
                } else {
                    jQuery('#conjured_referral #conjured_share_sms_button').prop('disabled', true).prop('readonly', 'readonly').addClass('disabled');
                    event.data.that.jsonP(
                        'https://app.conjured.co/shopify/referral/share-link?cnjrd=MR1uSYGClkRWvbhkxqsAtFd6fUJTe48apcH2yB5M&shop=the-sill.myshopify.com&type=sms&preview=',
                        { 
                            cmp: 741,
                            adv: event.data.that.adv 
                        },
                        event.data.that.showSMS
                    );
                }
            });

            if(jQuery('#conjured_referral #conjured_send_email_button').attr('data-no-loading') != 'true') {
                jQuery('#conjured_referral #conjured_send_email_button').attr('data-old-text', jQuery('#conjured_referral #conjured_send_email_button').text());
            }
            jQuery('#conjured_referral #conjured_send_email_button').click({that: this}, function(event) {
                jQuery('#conjured_referral #conjured_send_email_error').hide();
                jQuery('#conjured_referral #conjured_send_email_success').hide();
                jQuery('#conjured_referral #conjured_emails').removeClass('error');
                jQuery('#conjured_referral #conjured_subject').removeClass('error');
                jQuery('#conjured_referral #conjured_message').removeClass('error');
                jQuery('#conjured_referral #conjured_send_email_button').prop('disabled', true).prop('readonly', 'readonly').addClass('disabled');

                if(jQuery('#conjured_referral #conjured_emails').val() == '' || jQuery('#conjured_referral #conjured_subject').val() == '' || jQuery('#conjured_referral #conjured_message').val() == '') {
                    if(jQuery('#conjured_referral #conjured_emails').val() == '') jQuery('#conjured_referral #conjured_emails').addClass('error');
                    if(jQuery('#conjured_referral #conjured_subject').val() == '') jQuery('#conjured_referral #conjured_subject').addClass('error');
                    if(jQuery('#conjured_referral #conjured_message').val() == '') jQuery('#conjured_referral #conjured_message').addClass('error');
                    jQuery('#conjured_referral #conjured_send_email_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');

                    var error_text = jQuery('#conjured_referral #conjured_send_email_error').attr('data-invalid-input');
                    jQuery('#conjured_referral #conjured_send_email_error').text(error_text).show();
                    return;
                }

                if(jQuery('#conjured_referral #conjured_send_email_button').attr('data-no-loading') != 'true') {
                    jQuery('#conjured_referral #conjured_send_email_button').empty().append('<img src="https://app.conjured.co/img/shopify_referral/spinner.gif" class="conjured_loading_spinner" style="width:20px; margin: 3px 10px" />');
                }
                console.log(event.data.that.adv);
                event.data.that.jsonP(
                    'https://app.conjured.co/shopify/referral/share-email?cnjrd=MR1uSYGClkRWvbhkxqsAtFd6fUJTe48apcH2yB5M',
                    {
                        shop: 'the-sill.myshopify.com',
                        emails: jQuery('#conjured_referral #conjured_emails').val(),
                        subject: jQuery('#conjured_referral #conjured_subject').val(),
                        message: jQuery('#conjured_referral #conjured_message').val(),
                        r: window.location.href.replace(/\/?$/, '/') + 'redeem/',
                        cmp: 741,
                        adv: event.data.that.adv
                    },
                    event.data.that.sendEmails
                );

            });

            this.loadInitialScreen();

        },

        jsonP: function(url, parameters, callback) {
            // create callback
            var callbackName = 'conjuredJsonPCallback' + new Date().getMilliseconds();
            window[callbackName] = callback;

            // create querystring
            var params = jQuery.param(parameters) + '&callback=' + callbackName + '&time=' + new Date().getMilliseconds();

            // build and append the script
            var script = document.createElement('script');
            if(url.indexOf('?') !== -1) {
                script.src = url + '&' + params;
            } else {
                script.src = url + '?' + params;
            }
            script.async = true;
            script.type = 'text/javascript';
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
        },



        loadInitialScreen: function() {
                            jQuery('#conjured_referral #conjured_advocate_signup').show();
                jQuery('#conjured_referral #conjured_advocate_share_type').hide();
            

            // set up modal if necessary
            
            // if we have their info, autosubmit
            if(jQuery('#conjured_referral #conjured_referral_name').val() != '' && jQuery('#conjured_referral #conjured_referral_email').val() != '') {
                jQuery('#conjured_referral #conjured_save_advocate').trigger('click');
            }

        },

        showModal: function(container) {
                    },

        saveAdvocate: function(data) {
            if(data.is_error) {
                if(data.errors.name !== undefined) jQuery('#conjured_referral #conjured_referral_name').addClass('error');
                if(data.errors.email !== undefined) jQuery('#conjured_referral #conjured_referral_email').addClass('error');
                jQuery('#conjured_referral #conjured_save_advocate').prop('disabled', false).removeProp('readonly').removeClass('disabled');

                var error_text = jQuery('#conjured_referral #conjured_save_advocate_error').attr('data-' + data.error_code);
                if(error_text == '' || error_text == undefined) {
                    error_text = '';
                    if(data.errors instanceof Array || data.errors instanceof Object) {
                        for(var i in data.errors) {
                            error_text += data.errors[i] + ' ';
                        }
                    } else {
                        error_text = data.errors;
                    }
                }

                jQuery('#conjured_referral #conjured_save_advocate_error').text(error_text).show();
            } else {
                jQuery('#conjured_referral #conjured_advocate_signup').hide();
                jQuery('#conjured_referral #conjured_advocate_share_type').show();
                jQuery('#conjured_referral #conjured_total_friends_referred').text(data.total_friends_referred);

                // if it's per advocate, go ahead and generate the link now
                
                this.adv = data.adv;
            }
        },



        sendEmails: function(data) {
            console.log(data);

            if(jQuery('#conjured_referral #conjured_send_email_button').attr('data-no-loading') != 'true') {
                jQuery('#conjured_referral #conjured_send_email_button').empty().text(jQuery('#conjured_referral #conjured_send_email_button').attr('data-old-text'));
            }
            if(data.is_error) {
                if(data.errors.emails !== undefined) jQuery('#conjured_referral #conjured_emails').addClass('error');
                if(data.errors.subject !== undefined) jQuery('#conjured_referral #conjured_subject').addClass('error');
                if(data.errors.message !== undefined) jQuery('#conjured_referral #conjured_message').addClass('error');
                jQuery('#conjured_referral #conjured_send_email_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');

                var error_text = jQuery('#conjured_referral #conjured_send_email_error').attr('data-' + data.error_code);
                if(error_text == '' || error_text == undefined) {
                    if(data.errors.general === undefined) {
                        error_text = data.errors;
                    } else {
                        error_text = data.errors.general[0];
                    }
                }
                jQuery('#conjured_referral #conjured_send_email_error').text(error_text).show();

            } else {
                jQuery('#conjured_referral #conjured_send_email_success').show();
                jQuery('#conjured_referral #conjured_emails').val('');
                jQuery('#conjured_referral #conjured_send_email_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');
            }
        },



        showLink: function(data) {
            console.log(data);
            jQuery('#conjured_referral #conjured_share_social_link_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');
            if(data.is_error) {
                jQuery('#conjured_referral #conjured_link').hide();
                jQuery('#conjured_referral #conjured_link').hide();

                var error_text = jQuery('#conjured_referral #conjured_show_link_error').attr('data-' + data.error_code);
                if(error_text == '' || error_text == undefined) error_text = data.errors;

                jQuery('#conjured_referral #conjured_advocate_terms').hide();
                jQuery('#conjured_referral #conjured_advocate_share_link').show();
                jQuery('#conjured_referral #conjured_advocate_share_email').hide();
                jQuery('#conjured_referral #conjured_show_link_error').text(error_text).show();

            } else {
                jQuery('#conjured_referral #conjured_link').val(data.redeem_link);
                jQuery('#conjured_referral #conjured_advocate_terms').hide();
                jQuery('#conjured_referral #conjured_advocate_share_link').show();
                jQuery('#conjured_referral #conjured_advocate_share_email').hide();
                jQuery('#conjured_referral #conjured_show_link_error').hide();
            }

        },

        showSMS: function(data) {
            jQuery('#conjured_referral #conjured_share_sms_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');
            jQuery('#conjured_referral #conjured_share_sms_button').attr('data-text', data.text);
            jQuery('#conjured_referral #conjured_share_sms_button').attr('data-link', data.redeem_link);
            var ua = navigator.userAgent.toLowerCase();
            var url;
            if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("macintosh") > -1) {
            url = "sms:;&body=" + encodeURIComponent(data.text + ' ' + data.redeem_link);
            } else {
            url = "sms:?body=" + encodeURIComponent(data.text + ' ' + data.redeem_link);
            }
            window.location.href = url;
        },

        showSocial: function(data) {
            console.log(data);
            jQuery('#conjured_referral #conjured_share_social_' + data.type + '_button').prop('disabled', false).removeProp('readonly').removeClass('disabled');
            if(data.is_error) {
                if(window['socialWindow']) window['socialWindow'].close();
                var error_text = jQuery('#conjured_referral #conjured_show_social_error').attr('data-' + data.error_code);
                if(error_text == '' || error_text == undefined) error_text = data.errors;

                jQuery('#conjured_referral #conjured_show_social_error').text(error_text).show();
            } else {
                window['socialWindow'].location.href = data.link;
            }

        }

    };

})();
