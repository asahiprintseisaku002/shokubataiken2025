function loadTextureAsync(path) {
        return new Promise((resolve, reject) => {
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
                path,
                (texture) => resolve(texture), // 成功時
                undefined, // ロード進捗は不要
                (error) => reject(error) // エラー時
            );
        });
    }

    // 非同期でテクスチャを設定する関数
    async function setupScene() {
        try {
            // テクスチャを非同期でロード
            const texture = await loadTextureAsync('./lib/card2Material2.jpg'); // 画像のパスを指定

            // card2Material2にテクスチャを適用
            const card2Material2 = new THREE.MeshPhongMaterial({
                map: texture
            });

            // 他のマテリアルやジオメトリの設定
            const card2Material1 = new THREE.MeshPhongMaterial({ color: 0xfffff9 });
            const card2Materials = [
                card2Material1,
                card2Material1,
                card2Material1,
                card2Material1,
                card2Material2, // テクスチャを適用したマテリアル
                card2Material1,
            ];

            const box2Geometry = new THREE.BoxGeometry(40.0, 55.0, 0.3);
            const card2 = new THREE.Mesh(box2Geometry, card2Materials);
            scene.add(card2);
            card2.position.set(20.0, 0.0, 0.0);
            cardGroup.add(card, card2);

            console.log("テクスチャのロードとシーンのセットアップが完了しました！");
        } catch (error) {
            console.error("テクスチャのロード中にエラーが発生しました:", error);
        }
    }
    // シーンのセットアップを呼び出す
    setupScene();