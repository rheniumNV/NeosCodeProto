import React, { FC } from "react";
import Image from "lib/neoscript/core/components/UIX/Graphics/Image";
import UI_UnlitMaterial from "lib/neoscript/core/components/Assets/Materials/UI/UI_UnlitMaterial";
import UIXElement from "lib/uixHelper/UIXElement";
import { generateId } from "lib/neoscript/util";
import SpriteProvider from "lib/neoscript/core/components/Assets/SpriteProvider";
import StaticTexture2D from "lib/neoscript/core/components/Assets/StaticTexture2D";
import { CommonTexture, useTexture } from "./AssetUtil";

interface UIXBackgroundInput {
  name?: string;
}

const UIXBackground: FC<UIXBackgroundInput> = ({ name = "BG", children }) => {
  const backgroundMaterialId = generateId();

  const { spriteId, assets } = useTexture({
    texture: CommonTexture.Circle,
    sprite: { Scale: 0.05, Borders: [0.333, 0.333, 0.333, 0.333] },
  });

  return (
    <UIXElement
      name={name}
      components={[
        <UI_UnlitMaterial
          id={backgroundMaterialId}
          ZWrite={"On"}
          OffsetUnits={100}
          OffsetFactor={1}
        />,
        <Image Material={backgroundMaterialId} Sprite={spriteId} />,
        ...assets,
      ]}
    >
      {children}
    </UIXElement>
  );
};

export default UIXBackground;
