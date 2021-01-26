/******************************************************************************
<button class="fisheyeButton">
    Book now
</button>

<div class="modalProduct"></div>

<style>
    .fisheyeButton {
        display: inline-block;
        padding: 10px 20px;
        background: #408C3D;
        border-radius: 5px;
        box-shadow: none;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        color: #FFFFFF;
        font-family: sans-serif;
        cursor: pointer;
    }

    .fisheyeButton:hover {
        background: #285726;
    }

    .fisheyeButton:active {
        background: #30682e;
    }
</style>

<script type="text/javascript"
    src="url file javascript"
    async>
</script>

*******************************************************************************/

// B1: Khởi tạo modal product. Sẽ chèn 1 iframe vào trong modal này

// B2: Xử lý sự kiện khi click và button sẽ thêm 1 class để hiển thị modal ra

// Get data source
var button = document.getElementsByClassName ('fisheyeButtonForProduct')[0];

var data_src_button = button.getAttribute ('target');

var modal = document.getElementsByClassName ('modalProductFisheyes')[0];

var icon_close = document.getElementsByClassName ('x-close')[0];

// Init ifame
var iframe = document.createElement ('iframe');
iframe.setAttribute ('class', 'iframe-main-fisheye');
iframe.src = data_src_button;

document
  .getElementsByClassName ('productContentWrapper')[0]
  .appendChild (iframe);

//

button.addEventListener (
  'click',
  function (e) {
    modal.classList.remove ('display-none');
  },
  false
);

icon_close.addEventListener (
  'click',
  function (e) {
    modal.classList.add ('display-none');
  },
  false
);
