const boxGeometry = new THREE.BoxGeometry(51.0, 55.0, 0.3);
      const cardMaterial = new THREE.MeshPhongMaterial({color:0xfffff9});
      const card = new THREE.Mesh (boxGeometry, cardMaterial);
      scene.add(card);
      card.position.set(-25.5, 0.0, 0.0);

      //カードグループを作成して後で画像、テキスト、校章を追加する
      const cardGroup = new THREE.Group();
      scene.add(cardGroup);