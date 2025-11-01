import { defineConfig, presetAttributify, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetWind4()
  ],
})
