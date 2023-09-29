import { grassTop } from "./textureList";

import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

const grassTopTexture = new TextureLoader().load(grassTop)
grassTopTexture.wrapS = RepeatWrapping
grassTopTexture.wrapT = RepeatWrapping
grassTopTexture.magFilter = NearestFilter

export { grassTopTexture }
