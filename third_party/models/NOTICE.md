# 3D models (Middle-earth in 3D)

`app/src/main/assets/world/models/*.glb`. All from [Poly Pizza](https://poly.pizza), slimmed by
`tools/world/slim_models.mjs` (unused animation clips removed, meshes welded and quantized) and
recoloured in the app (`models.json`: recolour by material, greyscale tint for Gandalf, black for
the Nazgûl and their horses). Generic low-poly characters standing in for the Fellowship, not likenesses.

| File | Used as | Model | Author | Licence |
|---|---|---|---|---|
| frodo.glb | Frodo | https://poly.pizza/m/y9KWOVG21R | Quaternius | CC0 |
| sam.glb | Sam | https://poly.pizza/m/7pn3R6hPvE | Quaternius | CC0 |
| merry.glb | Merry | https://poly.pizza/m/ZwF0K7WBmu | Quaternius | CC0 |
| pippin.glb | Pippin | https://poly.pizza/m/DgOCW9ZCRJ | Quaternius | CC0 |
| aragorn.glb | Aragorn | https://poly.pizza/m/5EGWBMpuXq | Quaternius | CC0 |
| wizard.glb | Gandalf (Grey and White) | https://poly.pizza/m/kttbFvCl2C | Quaternius | CC BY 3.0 |
| nazgul.glb | Nazgûl, Witch-king | https://poly.pizza/m/3Ook4jHoAjW | Falibu | CC BY 3.0 |
| eagle.glb | The Eagles | https://poly.pizza/m/RkN6MEbP6g | Sherkiz | CC BY 3.0 |
| orc.glb | Goblins | https://poly.pizza/m/5vO2YJsPEf | Quaternius | CC0 |
| horse.glb | Horses (Rohirrim, Black Riders) | https://poly.pizza/m/qvTrSG9pZF | Quaternius | CC0 |
| pony.glb | Bilbo's pony | https://poly.pizza/m/qmX6nhnvp7 | Quaternius | CC0 |

Everyone else (Legolas, Gimli, Boromir, Gollum, the dwarves, Treebeard, Théoden, Éomer, the
Uruk-hai, the Dead), the Balrog, Smaug, the fell beasts, trolls and mûmakil are built from
primitives in `tools/world/web/src/` - the downloadable models for those were poor matches
(a garden gnome for Gimli, a cartoon demon with a halo for the Balrog, and so on).
