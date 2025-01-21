//青い球体
      const sphereGeometry = new THREE.SphereGeometry( 300, 32, 16 ); 
      const spherematerial = new THREE.MeshPhongMaterial( { color: 0x5cb3e8 } ); 
      const sphere = new THREE.Mesh( sphereGeometry, spherematerial ); 
      scene.add( sphere );
      sphere.position.set(50, -250, -400.0);

      const sphereGroup = new THREE.Group();
      scene.add(sphereGroup);
      sphereGroup.add(sphere);

      //赤い球体
      const lilsphereGeometry = new THREE.SphereGeometry( 10, 32, 16 ); 
      const lilspherematerial = new THREE.MeshPhongMaterial( { color: 0xe85f5c } ); 
      const lilsphere = new THREE.Mesh( lilsphereGeometry, lilspherematerial ); 
      scene.add( lilsphere );
      lilsphere.position.set(150, 100, -1000.0);