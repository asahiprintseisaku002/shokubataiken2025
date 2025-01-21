 //カードのテキスト
      const loader = new FontLoader();
      loader.load('./lib/Noto Sans JP Medium_Regular.json', (font) => {
        // テキスト名前
        const textNameGeometry = new TextGeometry('ここに名前を入れる', {
          font: font,
          size: 5,
          height: 1, // テキストの厚み
          curveSegments: 12,
          bevelEnabled: false, // テキストのベベル（斜角）
          bevelThickness: 1,
          bevelSize: 1,
          bevelSegments: 5
        });
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
        const textNameMesh = new THREE.Mesh(textNameGeometry, textMaterial);

        //テキスト1
        const text1Geometry = new TextGeometry('Text1 好きな〇〇：〇〇〇〇', {
          font: font,
          size: 2.5,
          height: 1, // テキストの厚み
          curveSegments: 12,
          bevelEnabled: false, // テキストのベベル（斜角）
        });
        const text1Mesh = new THREE.Mesh(text1Geometry, textMaterial);

        //テキスト2
        const text2Geometry = new TextGeometry('Text2 好きな〇〇：〇〇〇〇', {
          font: font,
          size: 2.5,
          height: 1, // テキストの厚み
          curveSegments: 12,
          bevelEnabled: false, // テキストのベベル（斜角）
        });
        const text2Mesh = new THREE.Mesh(text2Geometry, textMaterial);

        //テキスト3
        const text3Geometry = new TextGeometry('Text3 好きな〇〇：〇〇〇〇', {
          font: font,
          size: 2.5,
          height: 1, // テキストの厚み
          curveSegments: 12,
          bevelEnabled: false, // テキストのベベル（斜角）
        });
        const text3Mesh = new THREE.Mesh(text3Geometry, textMaterial);

        //テキスト4
        const text4Geometry = new TextGeometry('Text4 好きな〇〇：〇〇〇〇', {
          font: font,
          size: 2.5,
          height: 1, // テキストの厚み
          curveSegments: 12,
          bevelEnabled: false, // テキストのベベル（斜角）
        });
        const text4Mesh = new THREE.Mesh(text4Geometry, textMaterial);

        // テキストをシーンに追加
        scene.add(textNameMesh);
        scene.add(text1Mesh);
        scene.add(text2Mesh);
        scene.add(text3Mesh);
        scene.add(text4Mesh);

        // テキストの位置を調整
        textNameMesh.position.set(-45, 4, 0.5);
        text1Mesh.position.set(-45, -5, 0.5);
        text2Mesh.position.set(-45, -10, 0.5);
        text3Mesh.position.set(-45, -15, 0.5);
        text4Mesh.position.set(-45, -20, 0.5);

        cardGroup.add(textNameMesh);
        cardGroup.add(text1Mesh);
        cardGroup.add(text2Mesh);
        cardGroup.add(text3Mesh);
        cardGroup.add(text4Mesh);
      });