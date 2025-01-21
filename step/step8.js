// アニメーション関数を作成
    function animate() {
    requestAnimationFrame(animate);

    angle += speed;

    lightGrop.position.x = radius * Math.cos(angle);
    lightGrop.position.z = radius * Math.sin(angle);

    lilsphere.position.x = radiusRed * Math.cos(angle / 2);
    lilsphere.position.z = radiusRed * Math.sin(angle / 2); 

    sphereGroup.position.x = radiusBlue * Math.cos(angle / 4);
    sphereGroup.position.z = radiusBlue * Math.sin(angle / 4); 

    particles.rotation.y -= 0.001;

    if(isRotating) {
      cardGroup.rotation.y -= 0.01;
    }
    
    renderer.render(scene, camera);
    }

    animate();