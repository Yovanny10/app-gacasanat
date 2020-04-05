import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import { clear } from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {
  public imageTaken: ImageAsset;
  public saveToGallery: boolean = true;
  public keepAspectRatio: boolean = true;
  public width: number = 300;
  public height: number = 300;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  salirlogin()
  {
    clear();
    this.routerExtensions.navigate(["/login"],{clearHistory: true});
  }

  onTakePhoto() {
    let options = {
        width: this.width,
        height: this.height,
        keepAspectRatio: this.keepAspectRatio,
        saveToGallery: this.saveToGallery
    };

    takePicture(options)
        .then(imageAsset => {
            this.imageTaken = imageAsset;
            console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);
        }).catch(err => {
            console.log(err.message);
        });
  }

  onRequestPermissions() {
    requestPermissions();
  }

  onCheckForCamera() {
    let isCameraAvailable = isAvailable();
    console.log("¿Está disponible el hardware de la cámara?: " + isCameraAvailable);
}

}
