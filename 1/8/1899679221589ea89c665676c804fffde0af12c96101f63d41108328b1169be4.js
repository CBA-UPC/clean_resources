jQuery(document).ready(function($){

   jQuery('.ai-more').on('click', function() {
                // read the json that is in the ai-shortcode-data that contains all of the shortcode arguments
                    var $ai = jQuery(this).closest(".ai-tweets"),
                    $aimore = $ai.find('.ai-more'),
                    lastIDData = $ai.find('.ai-twitter-item').last().attr('id');
                    //persistentIndex = $ai.find('.ai-twitter-item').length;
                    ai_numberoftweets = $ai.find(".ai_numberoftweets").val();
                    ai_twitteruser = $ai.find(".ai_twitteruser").val();

                jQuery.ajax({
                url : ai.ajax_url,
                type : 'post',
                data : {
                    action : 'ai_get_more_posts',
                    ai_numberoftweets : ai_numberoftweets,
                    ai_twitteruser : ai_twitteruser,
                    last_id_data : lastIDData,
                },
                success : 
            }); // ajax call

            });

});

