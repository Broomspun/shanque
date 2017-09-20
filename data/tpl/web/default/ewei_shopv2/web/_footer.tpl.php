<?php defined('IN_IA') or exit('Access Denied');?></div>

<script language='javascript'>
    require(['jquery','bootstrap'], function ($,bs) {

        $('[data-toggle="tooltip"]').tooltip({
            container: $(document.body)
        });
        $('[data-toggle="popover"]').popover({
            container: $(document.body)
        });
    });


 <?php  if($_W['isfounder'] && $_W['routes']!='system.auth.upgrade') { ?>
    function check_ewei_shopv2_upgrade() {
  
        require(['util'], function (util) {  
            if (util.cookie.get('checkeweishopv2upgrade_sys')) {
                return;
            }
            $.post('<?php  echo webUrl("system/auth/upgrade/check")?>', function (ret) {
                if (ret && ret.status == '1') { 
		  
	var result = ret.result;	    
                    if(result.filecount>0 || result.database || result.upgrades){
	 	 
                        var html = '<div id="ewei-shopv2-upgrade-tips" class="tips-upgrade">';
	   html+='<span class="tclose" onclick="check_ewei_shopv2_upgrade_hide();"><i class="fa fa-times-circle fa-2x"></i></span>';
                         html+= '<div class="title">检测到更新</div>';
                        html+='<div class="text"> 新版本 ' + result.version + " RELEASE " + result.release;
                        html+=',请尽快更新! </div>';
			html+='<div class="buttons"><a href="<?php  echo webUrl("system/auth/upgrade")?>" class="btn btn-warning btn-sm">立即去更新</a></div></div>';
                        $('body').prepend(html);
                   }
                }
            },'json');
        });
    }
      function check_ewei_shopv2_upgrade_hide() {
        require(['util'], function (util) {
            util.cookie.set('checkeweishopv2upgrade_sys', 1, 3600);
            $('#ewei-shopv2-upgrade-tips').fadeOut(150);
        });
    }
    $(function () {
        setTimeout( function() {
            check_ewei_shopv2_upgrade();
        },4000);
    });
<?php  } ?>

    $(function () {
        $('.page-content').show();
        $('.img-thumbnail').each(function () {
            if ($(this).attr('src').indexOf('nopic.jpg') != -1) {
                $(this).attr('src', "<?php echo EWEI_SHOPV2_LOCAL;?>static/images/nopic.jpg");
            }
        })

        <?php  $task_mode =intval(m('cache')->getString('task_mode', 'global'))?>

        <?php  if($task_mode==0) { ?>
            $.getJSON("<?php  echo mobileUrl('util/task')?>");
        <?php  } ?>



        // GoTop
        $(window).bind('scroll resize', function () {
            var scrolltop = $(window).scrollTop();
            if (scrolltop > 300) {
                $(".page-gotop").fadeIn(300)
            } else {
                $(".page-gotop").fadeOut(300)
            }
            $(".page-gotop").unbind('click').click(function () {
                $('body').animate({scrollTop: "0px"}, 1000)
            })
        });

    });
</script>
<?php  if(!empty($_W['setting']['copyright']['statcode'])) { ?><?php  echo $_W['setting']['copyright']['statcode'];?><?php  } ?>
<?php  if(!empty($copyright) && !empty($copyright['copyright'])) { ?>
<div class="footer" style='width:100%;'>
    <div><?php  echo $copyright['copyright'];?></div>
</div>
<?php  } ?>
<div id="page-loading" style="position: fixed;width:100%;height:100%;background:rgba(255,255,255,0.8);left:0;top:0;z-index:9999">
    <div class="sk-spinner sk-spinner-double-bounce" style="position:fixed;top:50%;left:50%;width:40px;height:40px;margin-left:-20px;margin-top:-20px;">
        <div class="sk-double-bounce1"></div>
        <div class="sk-double-bounce2"></div>
    </div>
</div>
<script language="javascript">
    myrequire(['web/init']);
    if( $('form.form-validate').length<=0){
        window.formInited = true;
    }
    window.formInitTimer = setInterval(function () {
         if (typeof(window.formInited ) !== 'undefined') {
             $('#page-loading').remove();
              clearInterval(window.formInitTimer);
          }
    }, 1);
</script>
<?php  if(!empty($_W['shopset']['shop']['funbar'])) { ?>
    <?php  echo $this->show_funbar()?>
<?php  } ?>


<?php  if($_W['shopset']['shop']['funbar']!=2) { ?>
    <div class="page-gotop" title="返回顶部">
        <p><i class="fa fa-angle-up"></i></p>
        <p>返回</p>
        <p>顶部</p>
    </div>
<?php  } ?>

</body>
</html>
