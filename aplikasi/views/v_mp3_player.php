<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<title>Basic MP3 Player</title>
<meta name="robots" content="noindex" />
<style type="text/css">
#soundmanager-debug {
 /* SM2 debug container (optional, makes debug more useable) */
 position:absolute;position:fixed;*position:absolute;bottom:10px;right:10px;width:50em;height:18em;overflow:auto;background:#fff;margin:1em;padding:1em;border:1px solid #999;font-family:"lucida console",verdana,tahoma,"sans serif";font-size:x-small;line-height:1.5em;opacity:0.9;filter:alpha(opacity=90);
}

body {
	font:75% normal verdana,arial,tahoma,"sans serif";
	margin:0;padding:0;
}
</style>
<link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/sound/demo/mp3-player-button/css/mp3-player-button.css" />
<script type="text/javascript" src="<?=base_url()?>assets/sound/script/soundmanager2-nodebug-jsmin.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/sound/demo/mp3-player-button/script/mp3-player-button.js"></script>
<script>
soundManager.audioFormats = {
  'mp3': {
    'type': ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
    'required': true
  },

  'mp4': {
    'related': ['aac','m4a'], // additional formats under the MP4 container
    'type': ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
    'required': false
  },

  'ogg': {
    'type': ['audio/ogg; codecs=vorbis'],
    'required': false
  },

  'wav': {
    'type': ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'],
    'required': false
  }

};
soundManager.setup({
  // required: path to directory containing SM2 SWF files
  // url: '../sound/swf/',
  preferFlash: false,
});
</script>
</head>
<body>
<a href="<?=$this->config->item('quran_mp3').$mp3_file?>" class="sm2_button"><?=$mp3_info?> <?=$mp3_info?> (Murottal)</a>
</body>
</html>
