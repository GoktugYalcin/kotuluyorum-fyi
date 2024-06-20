export class RandomGenerator {
  constructor() {}

  numberGenerate(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  emojiGenerate(): string {
    const emojiRanges = [
      [0x1f600, 0x1f64f], // Emoticons
      [0x1f300, 0x1f5ff], // Miscellaneous Symbols and Pictographs
      [0x1f680, 0x1f6ff], // Transport and Map Symbols
      [0x1f700, 0x1f77f], // Alchemical Symbols
      [0x1f780, 0x1f7ff], // Geometric Shapes Extended
      [0x1f900, 0x1f9ff], // Supplemental Symbols and Pictographs
      [0x1fa70, 0x1faff] // Symbols and Pictographs Extended-A
    ]

    const range = emojiRanges[Math.floor(Math.random() * emojiRanges.length)]
    const start = range[0]
    const end = range[1]

    const randomCodePoint =
      Math.floor(Math.random() * (end - start + 1)) + start

    return String.fromCodePoint(randomCodePoint)
  }

  colorGenerate = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}
