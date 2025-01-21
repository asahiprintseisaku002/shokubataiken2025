 // パーティクルをランダムに配置する
      const particleCount = 1000; // パーティクルの数
      const particleGeometry = new THREE.BufferGeometry();
      const positions = [];

      const range = 500; // 各軸の範囲
        for (let i = 0; i < particleCount; i++) {
            positions.push(
                (Math.random() - 0.5) * range * 2, // x
                (Math.random() - 0.5) * range * 2, // y
                (Math.random() - 0.5) * range * 2  // z
            );
      }

      particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const textureLoader = new THREE.TextureLoader();
      const particleTexture = textureLoader.load('./lib/particlePoints.png');
      // パーティクル用のマテリアル
      const particleMaterial = new THREE.PointsMaterial({
        size: 3, // パーティクルの直径（大きさ）
        map: particleTexture,
        transparent: true, // 透明部分を有効化
        alphaTest: 0.5, // アルファチャンネルで透過部分を除外
        depthWrite: false // 奥行きテストを無効化（透過を正しく処理）
      });

      // パーティクルシステムを作成
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);