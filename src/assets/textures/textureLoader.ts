import { grassBlockTop, dirtBlock } from "./textureList";

import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

// GrassBlockTop
const grassBlockTopTexture = new TextureLoader().load(grassBlockTop)
grassBlockTopTexture.wrapS = RepeatWrapping
grassBlockTopTexture.wrapT = RepeatWrapping
grassBlockTopTexture.magFilter = NearestFilter

// DirtBlock
const dirtBlockTexture = new TextureLoader().load(dirtBlock)
dirtBlockTexture.wrapS = RepeatWrapping
dirtBlockTexture.wrapT = RepeatWrapping
dirtBlockTexture.magFilter = NearestFilter

export { grassBlockTopTexture }
