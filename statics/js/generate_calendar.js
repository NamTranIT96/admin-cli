/******************************************************************************
<div class="calendarFisheye">
    
</div>

<div class="productContentWrapperFishEye"></div>

<script type="text/javascript"
    src="url file javascript"
    async>
</script>

*******************************************************************************/

// B1: Khởi tạo modal product. Sẽ chèn 1 iframe vào trong modal này

// B2: Xử lý sự kiện khi click và button sẽ thêm 1 class để hiển thị modal ra

// Get data source
var div = document.getElementsByClassName ('calendarFisheye')[0];

var data_src = div.getAttribute ('target');

// Init ifame
var iframe = document.createElement ('iframe');
iframe.setAttribute ('class', 'iframe-main-fisheye-calendar');
iframe.setAttribute ('id', 'iframe-id');
iframe.setAttribute ('frameBorder', '0');
iframe.src = data_src;

document
  .getElementsByClassName ('productContentWrapperFishEye')[0]
  .appendChild (iframe);

function resizeIFrameToFitContent (iFrame) {
  iFrame.width = '100%';
  iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

var iFrame = document.getElementById ('iframe-id');

iFrame.onload = function () {
  // put your awesome code here
  resizeIFrameToFitContent (iFrame);
};
