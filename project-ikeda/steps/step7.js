// 球体の円運動のパラメータ
    let angle = 0; // 初期角度
    const radius = 200; // 円の半径
    const radiusRed = 400;
    const radiusBlue = 70;
    const speed = 0.02; // 回転速度（ラジアン単位）

    // タップまたはクリックでカードを回転させる
    let isRotating = false;

    const textElement = document.querySelector('.text');

    // クリック/タップイベントリスナー
    textElement.addEventListener('click', onInteract);
    textElement.addEventListener('touchstart', onInteract);

    function onInteract() {
      // イベントの伝播を止める
      event.stopPropagation();

      // 回転フラグをトグル
      isRotating = !isRotating;

      // .text の内容を変更
      if (isRotating) {
        textElement.classList.add('hidden'); // 非表示のアニメーション開始
        setTimeout(() => {
          textElement.textContent = "Click to Stop"; // 新しいメッセージに変更
          textElement.classList.remove('hidden'); // 表示のアニメーション開始
        }, 1200); // アニメーションが完了する時間 (transition と一致)
      } else {
        textElement.classList.add('hidden'); // 非表示のアニメーション開始
        setTimeout(() => {
          textElement.textContent = "Click to Rotate"; // 停止メッセージに変更
          textElement.classList.remove('hidden'); // 表示のアニメーション開始
        }, 1200);
      }
    }