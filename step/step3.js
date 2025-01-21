    //校章
    const svgloader = new SVGLoader();

    svgloader.load(
      './lib/kousyou.svg',                //@@@ 画像のファイル
      function ( data ) {

        const paths = data.paths;
        const kosyoSVGgroup = new THREE.Group();

        for ( let i = 0; i < paths.length; i ++ ) {

          const path = paths[ i ];

          const material = new THREE.MeshPhongMaterial( {
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: true
          } );

          const shapes = SVGLoader.createShapes( path );

          for ( let j = 0; j < shapes.length; j ++ ) {
            const shape = shapes[ j ];

            const extrudeSettings = {
              depth: 10, // 厚みの深さ
              bevelEnabled: false // ベベルを無効化
            };

            const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
            const mesh = new THREE.Mesh( geometry, material );
            kosyoSVGgroup.add( mesh );
          }
        }
        scene.add( kosyoSVGgroup );
        kosyoSVGgroup.scale.set(0.08, -0.08, 0.08);
        kosyoSVGgroup.position.set(-45.0, 24.0, 0.5);
        cardGroup.add(kosyoSVGgroup);
      },
      // called when loading is in progress
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      function ( error ) {
        console.log( 'An error happened' );
      }
    );