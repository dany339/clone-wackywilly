const $productTabMenu = $(".menuCategory > li");
const $productTabCon = $(".xans-project-list");

productTabAction(0);

$productTabMenu.on("click", function (e) {
  e.preventDefault();

  const productTabIdx = $(this).index();
  console.log(productTabIdx);

  productTabAction(productTabIdx);
});

// 공통의 동작을 함수로 정의
function productTabAction(index) {
  // 탭메뉴 활성화
  $productTabMenu.removeClass("active");
  $productTabMenu.eq(index).addClass("active");

  // 인덱스에 해당하는 $tabCon 보이기
  $productTabCon.hide();
  $productTabCon.eq(index).show();
}
